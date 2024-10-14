import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            username, password
        } = request.body;


    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json({
            error: 'Login Failed'
        });
    }
}