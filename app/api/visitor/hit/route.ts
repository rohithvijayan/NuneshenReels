import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { sessionId, isNewSession } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    // 1. Update total visits if it's a new session
    if (isNewSession) {
      await sql`
        UPDATE site_stats 
        SET total_visits = total_visits + 1 
        WHERE id = 1
      `;
    }

    // 2. Heartbeat: Update or insert session activity
    await sql`
      INSERT INTO visitor_sessions (session_id, last_active_at)
      VALUES (${sessionId}, now())
      ON CONFLICT (session_id) 
      DO UPDATE SET last_active_at = now()
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor hit error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
