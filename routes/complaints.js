import express from 'express';
import { getAllComplaintsC,createComplaintC,getComplaintsByCategoryC } from '../controllers/complaintsController.js';



const router = express.Router();

router.get('/',getAllComplaintsC);
router.post('/',createComplaintC);
router.get('/category/:category',getComplaintsByCategoryC);





export default router;