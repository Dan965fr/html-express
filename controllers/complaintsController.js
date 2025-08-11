import { getAllComplaints,getComplaintsByCategory,createComplaint,deleteComplaintById } from "../DAL/complaintDAL.js";



export async function getAllComplaintsC(req, res) {
    try {
        const complaints = await getAllComplaints();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: 'שגיאה בקבלת התלונות' });
    }
}

export async function createComplaintC(req, res) {
    try {
        const {  category, message } = req.body;

        if (  !category || !message) {
            return res.status(400).json({ error: 'נא למלא את כל השדות' });
        }

        const result = await createComplaint({ category, message });
        res.status(201).json({ message: 'התלונה נוספה בהצלחה', id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'שגיאה ביצירת התלונה' });
    }
}

export async function getComplaintsByCategoryC(req, res) {
    try {
        const { category } = req.params;
        const complaints = await getComplaintsByCategory(category);
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: 'שגיאה בקבלת תלונות לפי קטגוריה' });
    }
}


export async function deleteComplainC(req,res){
    try{
        const {id} = req.params;
        if(!id) return res.status(400).json({error:'missing complaint id'});

        const result = await deleteComplaintById(id);
        if(result.deletedCount === 0){
            return res.status(404).json({error:'complaint not found'})
        }

        res.json({msg:'התלונה נמחקה בהצלחה'})

    }catch(error){
        res.status(500).json({error:"שגיאה במחיקת התלונה" })
    }
}