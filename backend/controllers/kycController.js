const KYC = require('../models/KYC');
const User = require('../models/User');

// @desc    Submit KYC
// @route   POST /api/kyc/submit
exports.submitKYC = async (req, res) => {
    try {
        const { idType, idNumber, universityName, country, city, street } = req.body;
        
        const existingKYC = await KYC.findOne({ user: req.user.id });
        if (existingKYC && existingKYC.status !== 'rejected') {
            return res.status(400).json({ message: 'KYC already submitted or approved' });
        }

        const kycData = {
            user: req.user.id,
            idType,
            idNumber,
            universityName,
            address: { country, city, street },
            documents: {
                idFront: req.files['idFront'] ? req.files['idFront'][0].path : null,
                idBack: req.files['idBack'] ? req.files['idBack'][0].path : null,
                studentProof: req.files['studentProof'] ? req.files['studentProof'][0].path : null,
                selfie: req.files['selfie'] ? req.files['selfie'][0].path : null
            }
        };

        let kyc;
        if (existingKYC) {
            // Update rejected KYC
            kyc = await KYC.findByIdAndUpdate(existingKYC._id, kycData, { new: true });
        } else {
            kyc = await KYC.create(kycData);
        }

        // Update user KYC status
        await User.findByIdAndUpdate(req.user.id, { 
            kycStatus: 'pending',
            kycData: kyc._id 
        });

        res.status(201).json({
            message: 'KYC submitted successfully',
            kyc
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get User KYC Status
// @route   GET /api/kyc/status
exports.getKYCStatus = async (req, res) => {
    try {
        const kyc = await KYC.findOne({ user: req.user.id });
        if (!kyc) {
            return res.json({ status: 'none' });
        }
        res.json(kyc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
