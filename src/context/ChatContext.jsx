import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { socket } from '../services/socket';
import api from '../services/api';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
    const { user } = useAuth();
    const [totalUnread, setTotalUnread] = useState(0);
    const [onlineUsers, setOnlineUsers] = useState(new Set());
    const [notificationAudio] = useState(new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3'));

    const fetchUnreadCount = useCallback(async () => {
        if (!user) return;
        try {
            const res = await api.get('/chat/unread/total');
            setTotalUnread(res.data.count);
        } catch (error) {
            console.error('Error fetching unread count:', error);
        }
    }, [user]);

    useEffect(() => {
        if (!user) return;

        fetchUnreadCount();

        if (!socket.connected) {
            socket.auth = { token: localStorage.getItem('token') };
            socket.connect();
        }

        const handleNotification = (message) => {
            // Play sound
            notificationAudio.play().catch(e => console.log('Audio play failed:', e));
            
            // Increment unread count
            setTotalUnread(prev => prev + 1);
        };

        const handleOnlineStatus = ({ userId, status }) => {
            setOnlineUsers(prev => {
                const newSet = new Set(prev);
                if (status === 'online') newSet.add(userId);
                else newSet.delete(userId);
                return newSet;
            });
        };

        socket.on('new_message_notification', handleNotification);
        socket.on('online_status', handleOnlineStatus);

        return () => {
            socket.off('new_message_notification', handleNotification);
            socket.off('online_status', handleOnlineStatus);
        };
    }, [user, fetchUnreadCount, notificationAudio]);

    const markAsRead = async (room) => {
        try {
            await api.put(`/chat/read/${room}`);
            fetchUnreadCount();
            socket.emit('mark_as_read', { room, userId: user._id });
        } catch (error) {
            console.error('Error marking as read:', error);
        }
    };

    return (
        <ChatContext.Provider value={{ totalUnread, onlineUsers, markAsRead, fetchUnreadCount }}>
            {children}
        </ChatContext.Provider>
    );
};
