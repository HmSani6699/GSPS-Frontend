import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get('/admin/users');
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="space-y-12">
            <header>
                <h1 className="text-4xl font-black text-gsps-blue mb-2">User <span className="text-gsps-green">Database</span></h1>
                <p className="text-gsps-blue/40 font-bold uppercase tracking-widest text-sm">Monitor & Manage Accounts</p>
            </header>

            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gsps-bg-light border-b border-gray-100">
                        <tr>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Full Name</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Email</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">KYC Status</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Tier</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Referrals</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Wallet</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Joined</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((u) => (
                            <tr key={u._id} className="hover:bg-gsps-bg-light/30 transition-all">
                                <td className="px-8 py-6 font-black text-gsps-blue">{u.fullName}</td>
                                <td className="px-8 py-6 font-bold text-sm text-gsps-blue/60">{u.email}</td>
                                <td className="px-8 py-6">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                        u.kycStatus === 'approved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                                    }`}>{u.kycStatus}</span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                        u.tier === 'Diamond' ? 'bg-purple-100 text-purple-600' : 
                                        u.tier === 'Gold' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
                                    }`}>{u.tier || 'Silver'}</span>
                                </td>
                                <td className="px-8 py-6 font-black text-gsps-blue">{u.referralCount || 0}</td>
                                <td className="px-8 py-6 font-black text-gsps-blue">${u.walletBalance.toFixed(2)}</td>
                                <td className="px-8 py-6 font-bold text-sm text-gsps-blue/40">{new Date(u.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
