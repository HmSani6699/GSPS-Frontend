import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const KYCManagement = () => {
    const [kycs, setKycs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedKYC, setSelectedKYC] = useState(null);
    const [rejectionReason, setRejectionReason] = useState('');

    const fetchKYCs = async () => {
        try {
            const res = await api.get('/admin/kyc');
            setKycs(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchKYCs();
    }, []);

    const handleUpdateStatus = async (id, status) => {
        try {
            await api.put(`/admin/kyc/${id}`, { status, rejectionReason });
            setSelectedKYC(null);
            setRejectionReason('');
            fetchKYCs();
        } catch (err) {
            alert('Error updating status');
        }
    };

    return (
        <div className="space-y-12">
            <header>
                <h1 className="text-4xl font-black text-gsps-blue mb-2">KYC <span className="text-gsps-green">Verification</span></h1>
                <p className="text-gsps-blue/40 font-bold uppercase tracking-widest text-sm">Review Student Identites</p>
            </header>

            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gsps-bg-light border-b border-gray-100">
                        <tr>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Student</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Document</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Submitted</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-6 text-xs font-black text-gsps-blue/40 uppercase tracking-widest text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {kycs.map((kyc) => (
                            <tr key={kyc._id} className="hover:bg-gsps-bg-light/30 transition-all">
                                <td className="px-8 py-6">
                                    <p className="font-black text-gsps-blue">{kyc.user?.fullName}</p>
                                    <p className="text-xs font-bold text-gsps-blue/40 italic">{kyc.user?.email}</p>
                                </td>
                                <td className="px-8 py-6 font-bold text-sm text-gsps-blue/60">{kyc.idType} ({kyc.idNumber})</td>
                                <td className="px-8 py-6 font-bold text-sm text-gsps-blue/40">{new Date(kyc.createdAt).toLocaleDateString()}</td>
                                <td className="px-8 py-6">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                        kyc.status === 'approved' ? 'bg-green-100 text-green-600' : 
                                        kyc.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                                    }`}>{kyc.status}</span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <button 
                                        onClick={() => setSelectedKYC(kyc)}
                                        className="text-gsps-green font-black hover:underline text-sm uppercase tracking-widest"
                                    >
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedKYC && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gsps-blue/80 backdrop-blur-md" onClick={() => setSelectedKYC(null)}></div>
                    <div className="relative bg-white w-full max-w-4xl rounded-[50px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                        <div className="p-8 md:p-12 space-y-10">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-black text-gsps-blue">KYC Review</h2>
                                <button onClick={() => setSelectedKYC(null)} className="text-2xl opacity-20 hover:opacity-100">✕</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <section className="space-y-6">
                                    <p className="text-xs font-black text-gsps-blue/30 uppercase tracking-widest">Student Information</p>
                                    <div className="space-y-4">
                                        <p className="text-lg font-black text-gsps-blue">{selectedKYC.user?.fullName}</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div><p className="text-[10px] opacity-40 uppercase font-black">ID Type</p><p className="font-bold">{selectedKYC.idType}</p></div>
                                            <div><p className="text-[10px] opacity-40 uppercase font-black">ID Number</p><p className="font-bold">{selectedKYC.idNumber}</p></div>
                                        </div>
                                        <div><p className="text-[10px] opacity-40 uppercase font-black">University</p><p className="font-bold">{selectedKYC.universityName}</p></div>
                                        <div><p className="text-[10px] opacity-40 uppercase font-black">Location</p><p className="font-bold">{selectedKYC.address?.street}, {selectedKYC.address?.city}, {selectedKYC.address?.country}</p></div>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <p className="text-xs font-black text-gsps-blue/30 uppercase tracking-widest">Document Previews</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(selectedKYC.documents).map(([key, val]) => val && (
                                            <a key={key} href={`http://localhost:5000/${val}`} target="_blank" rel="noreferrer" className="block p-4 bg-gsps-bg-light rounded-2xl hover:bg-gsps-green/5 transition-all text-center">
                                                <span className="text-2xl block mb-2">📄</span>
                                                <span className="text-[10px] font-black uppercase text-gsps-blue/40">{key}</span>
                                            </a>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="pt-10 border-t border-gray-100 space-y-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gsps-blue/40 uppercase tracking-widest ml-1">Rejection Reason (if applicable)</label>
                                    <textarea 
                                        value={rejectionReason}
                                        onChange={(e) => setRejectionReason(e.target.value)}
                                        placeholder="Explain why the KYC is being rejected..."
                                        className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light outline-none font-bold text-gsps-blue"
                                    ></textarea>
                                </div>
                                <div className="flex space-x-4">
                                    <button 
                                        onClick={() => handleUpdateStatus(selectedKYC._id, 'approved')}
                                        className="flex-1 bg-gsps-green text-white py-5 rounded-3xl font-black text-lg shadow-xl shadow-green-500/10 hover:scale-[1.02] transition-all"
                                    >
                                        Approve & Verify
                                    </button>
                                    <button 
                                        onClick={() => handleUpdateStatus(selectedKYC._id, 'rejected')}
                                        className="flex-1 bg-red-500 text-white py-5 rounded-3xl font-black text-lg shadow-xl shadow-red-500/10 hover:scale-[1.02] transition-all"
                                    >
                                        Reject Application
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KYCManagement;
