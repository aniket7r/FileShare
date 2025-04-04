const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { expires: '10m' } } // OTP expires after 10 minutes
});

const upotp = mongoose.model('upotp', otpSchema);
module.exports = upotp;
