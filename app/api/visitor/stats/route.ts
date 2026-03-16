import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Get total visits
    const statsResult = await sql`SELECT total_visits FROM site_stats WHERE id = 1`;
    const totalVisits = statsResult[0]?.total_visits || 943;

    // 2. Get live visitors (active in the last 60 seconds)
    const liveResult = await sql`
      SELECT count(*) as count 
      FROM visitor_sessions 
      WHERE last_active_at > now() - interval '1 minute'
    `;
    const liveCount = parseInt(liveResult[0]?.count || '0', 10);

    // 3. Cleanup old sessions (optional, but good for maintenance)
    // We only cleanup sessions older than 5 minutes to keep the table small
    await sql`DELETE FROM visitor_sessions WHERE last_active_at < now() - interval '5 minutes'`;

    return NextResponse.json({
      total: parseInt(totalVisits, 10),
      live: Math.max(1, liveCount) // Ensure at least 1 (the current user)
    });
  } catch (error) {
    console.error('Visitor stats error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
