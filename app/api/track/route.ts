import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real app, you would send this to GA4, Mixpanel, or your DB.
        // For now, we just acknowledge receipt.
        console.log('[API Track Received]:', body);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
