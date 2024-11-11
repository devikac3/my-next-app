import { NextRequest, NextResponse } from "next/server";
import connectDb from '../../../app/DB/connectDb.js';
import User from '../../model/userModel.js'
await connectDb();
export async function GET(req,res){
  try {
    const getAllUsers = await User.find({})
    return NextResponse.json({ message: getAllUsers, count: getAllUsers.length }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

export async function POST(req,res){
  try {
    const { name, username, email, address, phone, website, company, } = await req.json();
    const user = new User({name, username, email, address, phone, website, company})
    await user.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
export function PUT(){
  return new Response('PUT API', {
    status: 200,
  })
}
export function DELETE(){
  return new Response('DELETE API', {
    status: 200,
  })
}