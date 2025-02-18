import express from 'express';
import {
  addPatient,
  getPatient,
  addHeartRate,
  getPatients,
} from '../controllers/patient.controller.js';

const router = express.Router();

router.post('/', addPatient);
router.get('/', getPatients);
router.get('/:patientId', getPatient);
router.put('/heart-rate', addHeartRate);

export default router;
