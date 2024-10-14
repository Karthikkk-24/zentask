import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('Received request:', request);

    try {
        const body = await request.json();
        console.log('Received body:', body);
        
        

        return NextResponse.json(
            { message: 'User registered successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error parsing request body:', error);
        return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
        );
    }
}
