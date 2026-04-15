const express = require('express');
const router = express.Router();
const { submitKYC, getKYCStatus } = require('../controllers/kycController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/submit', protect, upload.fields([
    { name: 'idFront', maxCount: 1 },
    { name: 'idBack', maxCount: 1 },
    { name: 'studentProof', maxCount: 1 },
    { name: 'selfie', maxCount: 1 }
]), submitKYC);

router.get('/status', protect, getKYCStatus);

module.exports = router;
