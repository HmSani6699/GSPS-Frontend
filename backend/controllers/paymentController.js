const Payment = require('../models/Payment');

// @desc    Create Payment Request
// @route   POST /api/payments/request
exports.createPaymentRequest = async (req, res) => {
    try {
        const { paymentType, amount, currency, purpose } = req.body;

        const payment = await Payment.create({
            user: req.user.id,
            paymentType,
            amount,
            currency,
            purpose,
            invoiceDocument: req.file ? req.file.path : null
        });

        res.status(201).json({
            message: 'Payment request submitted successfully',
            payment
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get User Payment History
// @route   GET /api/payments/my
exports.getMyPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ user: req.user.id }).sort('-createdAt');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
