const mongoose = require('mongoose');

const kycSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idType: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    address: {
        country: String,
        city: String,
        street: String
    },
    universityName: {
        type: String,
        required: true
    },
    documents: {
        idFront: String, // Path to file
        idBack: String,
        studentProof: String,
        selfie: String
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    rejectionReason: String
}, { timestamps: true });

module.exports = mongoose.model('KYC', kycSchema);
