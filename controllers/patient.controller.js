import Patient from '../models/patient.model.js';

// adding heart rate
export const addHeartRate = async (req, res) => {
  const { patientId, value, timestamp } = req.body;

  try {
    if (!patientId) {
      return res.status(400).json({ message: 'PatientId is required' });
    }

    if (!value) {
      return res.status(400).json({ message: 'Heart rate value is required' });
    }

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    patient.heartRate.push({ value, timestamp });

    await patient.save();

    res.status(200).json({
      message: 'Heart rate data added successfully',
      patient,
    });
  } catch (error) {
    console.error('Error adding heart rate:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get patient profile
export const getPatient = async (req, res) => {
  const { patientId } = req.params;

  try {
    // Fetch user profile
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

// Get all patients
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({}, 'name heartRate uid');

    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

// add patient

export const addPatient = async (req, res) => {
  try {
    const {
      name,
      email,
      age,
      gender,
      address,
      phoneNumber,
      allergies,
      heartRate,
    } = req.body;
    const newPatient = await Patient.create({
      name,
      email,
      age,
      gender,
      address,
      phoneNumber,
      allergies,
      heartRate,
    });
    const savedPatient = await newPatient.save();

    return res.status(201).json(savedPatient);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error creating user' });
  }
};
