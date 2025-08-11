import express from 'express';
import { getAllComplaintsC,createComplaintC,getComplaintsByCategoryC,deleteComplainC } from '../controllers/complaintsController.js';



const router = express.Router();

router.get('/',getAllComplaintsC);
router.post('/',createComplaintC);
router.get('/category/:category',getComplaintsByCategoryC);
router.delete('/:id',deleteComplainC)





export default router;