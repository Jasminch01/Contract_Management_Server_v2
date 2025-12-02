const mongoose = require('mongoose');
// Contact sub-schema for structured contact information
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    isPrimary : {type : Boolean}
}, { _id: false }); 

const buyerSchema = new mongoose.Schema({
    name:          { type: String, required: true },           
    abn:           { type: String },
    email:         { type: String },                          
    accountNumber: { type: String },
    officeAddress: { type: String },
    phoneNumber:   { type: String },                   
    contacts:      [contactSchema],
    isDeleted:     { type: Boolean, default: false },
    deletedAt:     { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Buyer', buyerSchema);