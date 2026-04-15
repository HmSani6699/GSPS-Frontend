import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

const Overview = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState({
        totalPayments: 0,
        totalSaved: 0,
        referralEarnings: 0,
        referralCount: 0
    });
    const [recentPayments, setRecentPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const res = await api.get('/payments/my');
                const payments = res.data;
                setRecentPayments(payments.slice(0, 5));
                
                const completed = payments.filter(p => p.status === 'Completed');
                const totalPaid = completed.reduce((acc, curr) => acc + curr.amount, 0);
                const totalSaved = completed.reduce((acc, curr) => acc + curr.savingsAmount, 0);

                setStats({
                    totalPayments: completed.length,
                    totalSaved: totalSaved,
                    referralEarnings: user?.walletBalance || 0,
                    referralCount: user?.referralCount || 0
                });
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [user]);

    if (loading) return <div className="animate-pulse space-y-8">
        <div className="h-40 bg-white rounded-3xl"></div>
        <div className="h-80 bg-white rounded-3xl"></div>
    </div>;

    return (
        <div className="space-y-12">
            <header>
                <h1 className="text-4xl lg:text-5xl font-black text-gsps-blue mb-2">Welcome, <span className="text-gsps-green">{user?.fullName.split(' ')[0]}!</span></h1>
                <p className="text-gsps-blue/40 font-bold uppercase tracking-[0.2em] text-sm">Dashboard Overview</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { label: 'Completed Payments', value: stats.totalPayments, icon: '✅', color: 'bg-green-50 text-green-600' },
                    { label: 'Total Saved Amount', value: `$${stats.totalSaved.toFixed(2)}`, icon: '💎', color: 'bg-blue-50 text-gsps-blue' },
                    { label: 'Referral Earnings', value: `$${stats.referralEarnings}`, icon: '💰', color: 'bg-gsps-green/10 text-gsps-green' },
                    { label: 'Total Referrals', value: stats.referralCount, icon: '👥', color: 'bg-orange-50 text-orange-600' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 group hover:scale-[1.02] transition-all">
                        <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>{stat.icon}</div>
                        <p className="text-gsps-blue/40 font-bold uppercase tracking-widest text-xs mb-2">{stat.label}</p>
                        <p className="text-3xl font-black text-gsps-blue">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Recent Payments */}
                <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-gsps-blue">Recent Payments</h2>
                        <button className="text-gsps-green font-bold hover:underline">View All</button>
                    </div>
                    
                    {recentPayments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="text-4xl mb-4">📭</div>
                            <p className="text-gsps-blue/40 font-bold">No payments found yet.</p>
                            <button className="mt-4 text-gsps-green font-bold">Make your first payment request</button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {recentPayments.map((p) => (
                                <div key={p._id} className="flex items-center justify-between p-6 rounded-2xl hover:bg-gsps-bg-light transition-all border border-transparent hover:border-gray-100">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gsps-blue/5 rounded-xl flex items-center justify-center text-xl">💸</div>
                                        <div>
                                            <p className="font-black text-gsps-blue">{p.paymentType}</p>
                                            <p className="text-xs font-bold text-gsps-blue/40 uppercase tracking-widest">{new Date(p.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-gsps-blue">{p.amount} {p.currency}</p>
                                        <p className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                            p.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                                            p.status === 'Pending' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-gsps-blue'
                                        }`}>{p.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Referral Card */}
                <div className="bg-gsps-blue rounded-[40px] p-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gsps-green/20 rounded-full blur-[60px] translate-x-20 -translate-y-20"></div>
                    <div className="relative z-10 space-y-8">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">🚀</div>
                        <div>
                            <h3 className="text-2xl font-black mb-2">Refer & Earn</h3>
                            <p className="text-white/60 font-medium">Earn $20 for every friend who completes their first international payment.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                            <span className="font-mono font-bold text-gsps-green">{user?.referralCode}</span>
                            <button className="text-xs font-black uppercase tracking-widest bg-white text-gsps-blue px-4 py-2 rounded-xl hover:scale-105 transition-all">Copy</button>
                        </div>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] text-center italic">Total referrals: {stats.referralCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
