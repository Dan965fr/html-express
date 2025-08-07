import { getAllComplaints,getComplaintsByCategory,createComplaint } from "../DAL/complaintDAL.js";



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
        const { fullName, category, message } = req.body;

        if (!fullName  || !category || !message) {
            return res.status(400).json({ error: 'נא למלא את כל השדות' });
        }

        const result = await createComplaint({ fullName, category, message });
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