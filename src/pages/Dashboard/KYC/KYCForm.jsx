import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

const KYCForm = () => {
    const { user, checkAuth } = useAuth();
    const [status, setStatus] = useState('none'); // none, pending, approved, rejected
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    
    const [formData, setFormData] = useState({
        idType: 'Passport',
        idNumber: '',
        universityName: '',
        country: '',
        city: '',
        street: ''
    });
    const [files, setFiles] = useState({
        idFront: null,
        idBack: null,
        studentProof: null,
        selfie: null
    });

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await api.get('/kyc/status');
                setStatus(res.data.status || 'none');
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchStatus();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFiles({ ...files, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        Object.keys(files).forEach(key => {
            if (files[key]) data.append(key, files[key]);
        });

        try {
            await api.post('/kyc/submit', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setStatus('pending');
            await checkAuth(); // Refresh user state
        } catch (err) {
            setError(err.response?.data?.message || 'Error submitting KYC');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="text-center py-20">Loading KYC Details...</div>;

    if (status === 'approved') {
        return (
            <div className="max-w-2xl mx-auto text-center space-y-8 py-20">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl">✅</div>
                <h2 className="text-4xl font-black text-gsps-blue">KYC Verified</h2>
                <p className="text-gsps-blue/60 font-medium">Your identity has been verified. You now have full access to the dashboard and global payment services.</p>
                <div className="bg-gsps-bg-light p-6 rounded-2xl border border-gray-100 flex items-center justify-between text-left">
                    <div>
                        <p className="text-xs font-black text-gsps-blue/40 uppercase tracking-widest">Verification Status</p>
                        <p className="text-gsps-blue font-black">Fully Verified Student</p>
                    </div>
                    <span className="text-xs font-black bg-green-500 text-white px-3 py-1 rounded-full uppercase tracking-tighter">Approved</span>
                </div>
            </div>
        );
    }

    if (status === 'pending') {
        return (
            <div className="max-w-2xl mx-auto text-center space-y-8 py-20">
                <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-4xl">⏳</div>
                <h2 className="text-4xl font-black text-gsps-blue">Review in Progress</h2>
                <p className="text-gsps-blue/60 font-medium">We are currently reviewing your documents. This usually takes 24-48 hours. We'll notify you once your account is approved.</p>
                <div className="p-8 bg-gsps-blue text-white rounded-[40px] text-left">
                    <p className="font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">What happens next?</p>
                    <ul className="space-y-4 font-medium">
                        <li className="flex items-center space-x-3"><span className="text-gsps-green">✔</span> <span>Our team verifies your Passport/ID</span></li>
                        <li className="flex items-center space-x-3"><span className="text-gsps-green">✔</span> <span>University offer letter validation</span></li>
                        <li className="flex items-center space-x-3"><span className="text-gsps-green">✔</span> <span>Face verification check</span></li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-black text-gsps-blue mb-4">Identity Verification <span className="text-gsps-green">(KYC)</span></h1>
                <p className="text-gsps-blue/40 font-bold max-w-xl">Mandatory for all students to prevent fraud and ensure secure cross-border payments.</p>
            </header>

            {error && <div className="bg-red-50 text-red-500 p-6 rounded-2xl mb-8 font-bold border border-red-100">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-10">
                <section className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-gray-100 space-y-8">
                    <h3 className="text-xl font-black text-gsps-blue border-l-4 border-gsps-green pl-4">Personal & Academic Info</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gsps-blue/40 uppercase tracking-widest ml-1">Document Type</label>
                            <select name="idType" onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light border-2 border-transparent focus:border-gsps-green/30 outline-none font-bold text-gsps-blue">
                                <option value="Passport">Passport</option>
                                <option value="National ID">National ID</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gsps-blue/40 uppercase tracking-widest ml-1">Document Number</label>
                            <input type="text" name="idNumber" placeholder="ABC123456" onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light border-2 border-transparent focus:border-gsps-green/30 outline-none font-bold text-gsps-blue" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-gsps-blue/40 uppercase tracking-widest ml-1">University Name</label>
                        <input type="text" name="universityName" placeholder="University of London" onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light border-2 border-transparent focus:border-gsps-green/30 outline-none font-bold text-gsps-blue" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" name="country" placeholder="Country" onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light outline-none font-bold text-gsps-blue" />
                        <input type="text" name="city" placeholder="City" onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light outline-none font-bold text-gsps-blue" />
                        <input type="text" name="street" placeholder="Street Address" onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl bg-gsps-bg-light outline-none font-bold text-gsps-blue" />
                    </div>
                </section>

                <section className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-gray-100 space-y-8">
                    <h3 className="text-xl font-black text-gsps-blue border-l-4 border-gsps-green pl-4">Document Uploads</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { label: 'Passport/ID Front', name: 'idFront' },
                            { label: 'Passport/ID Back', name: 'idBack' },
                            { label: 'Uni Offer Letter / ID', name: 'studentProof' },
                            { label: 'Face Selfie', name: 'selfie' }
                        ].map((doc) => (
                            <div key={doc.name} className="space-y-3">
                                <label className="text-xs font-black text-gsps-blue/40 uppercase tracking-widest ml-1">{doc.label}</label>
                                <div className="relative h-40 group cursor-pointer">
                                    <input 
                                        type="file" 
                                        name={doc.name} 
                                        onChange={handleFileChange} 
                                        required={doc.name !== 'idBack'} // ID Back might be optional for some
                                        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer" 
                                    />
                                    <div className="absolute inset-0 bg-gsps-bg-light border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center group-hover:bg-gsps-green/5 group-hover:border-gsps-green transition-all">
                                        <span className="text-2xl mb-2 opacity-40 group-hover:scale-110 transition-transform">📄</span>
                                        <span className="text-xs font-bold text-gsps-blue/40 group-hover:text-gsps-blue">
                                            {files[doc.name] ? files[doc.name].name : 'Choose File or Drag & Drop'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full bg-gsps-blue text-white py-6 rounded-[30px] font-black text-xl hover:bg-gsps-green transition-all shadow-2xl active:scale-[0.98] disabled:opacity-50"
                >
                    {submitting ? '🚀 Submitting Review...' : 'Submit Verification'}
                </button>
            </form>
        </div>
    );
};

export default KYCForm;
