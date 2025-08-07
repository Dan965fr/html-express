import {connect} from '../db/connect.js'
import { ObjectId } from 'mongodb';



export async function getAllComplaints(){
    const db = await connect();
    return  db.collection('complaints').find().toArray();
}


export async function createComplaint(){
    const db = await connect();
    const complaint = {
        catgory,
        message,
        create_at: new Date()
    };
    return db.collection('complaints').insertOne(complaint)
}

export async function getComplaintsByCategory(category) {
    const db = await connect();
    return db.collection('complaints').find({ category }).toArray();
}