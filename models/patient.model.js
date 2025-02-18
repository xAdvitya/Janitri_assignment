import mongoose from 'mongoose';

// Patient schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // Basic email format validation
      'Please provide a valid email address',
    ],
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
    match: [
      /^\+?(\d{1,4})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,9}$/,
      'Please provide a valid phone number',
    ],
  },
  allergies: {
    type: [String],
    default: [],
  },
  heartRate: [
    {
      value: {
        type: Number,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
