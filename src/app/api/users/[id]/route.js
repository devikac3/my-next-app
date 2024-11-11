import connectDb from '../../DB/connectDb';
import User from '../../model/userModel.js'
import { NextRequest, NextResponse } from "next/server";
await connectDb();
export async function PUT(req,{params}){
   try {
    const {id} = params
    // console.log(id)
    const updates = await req.json();
     // Find and update the user document by ID
     const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

     if (!updatedUser) {
       return NextResponse.json({ error: 'User not found' }, { status: 404 });
     }
 
     return NextResponse.json({ message: 'User updated successfully', updatedUser }, { status: 200 });
   } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
   }
   
  }
  export async function DELETE(req, {params}){
    try {
        const {id} = params
      
         // Find and delete the user document by ID
         const deletedUser = await User.findByIdAndDelete(id);
    
         if (!deletedUser) {
           return NextResponse.json({ error: 'User not found' }, { status: 404 });
         }
     
         return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
       } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
       }
  }