import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            email
        } = request.body;
    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json({
            error: 'Login Failed'
        });
    }
}