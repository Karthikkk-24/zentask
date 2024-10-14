import dbConnect from '@/app/lib/dbConnect';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('Received request:', request);

    try {
	await dbConnect();

	const body = await request.json();
	console.log("Request body: ", body);

	const { username, email, password } = body;

	const existingUser = await User.findOne({ $or: [{ email }, { username }] });
	if (existingUser) {
		return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const newUser = new User({
		username,
		email,
		password: hashedPassword,
	});

	await newUser.save();

        return NextResponse.json(
            { message: 'User registered successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json(
            { error: 'Registration Failed' },
            { status: 500 }
        );
    }
}
