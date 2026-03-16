'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function RealTimeVisitorStats() {
  const [stats, setStats] = useState<{ total: number; live: number }>({ total: 943, live: 1 });

  useEffect(() => {
    // 1. Handle Session Identification
    let sessionId = localStorage.getItem('_ns_session_id');
    let isNewSession = false;

    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem('_ns_session_id', sessionId);
      isNewSession = true;
    }

    // 2. Initial Hit & Heartbeat Logic
    const sendHit = async (isNew: boolean) => {
      try {
        await fetch('/api/visitor/hit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId, isNewSession: isNew }),
        });
      } catch (err) {
        console.error('Failed to send visitor hit:', err);
      }
    };

    const fetchStats = async () => {
      try {
        const res = await fetch('/api/visitor/stats');
        const data = await res.json();
        if (data.total && data.live) {
          setStats(data);
        }
      } catch (err) {
        console.error('Failed to fetch visitor stats:', err);
      }
    };

    // Initial sequence
    sendHit(isNewSession);
    fetchStats();

    // 3. Set up Intervals
    // Heartbeat every 35 seconds to keep session alive in the 1-minute window
    const heartbeatInterval = setInterval(() => sendHit(false), 35000);
    // Refresh stats every 15 seconds for the user to see updates
    const statsInterval = setInterval(fetchStats, 15000);

    return () => {
      clearInterval(heartbeatInterval);
      clearInterval(statsInterval);
    };
  }, []);

  // 4. Inflation Logic (Gimmick)
  const [totalOffset] = useState(() => Math.floor(Math.random() * (450 - 300 + 1)) + 300);

  return (
    <div className="fixed bottom-6 right-6 z-[100] group">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col gap-2 transition-all hover:border-red-500/30">
        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">Live Activity</span>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/40 mb-1">Live Now</span>
            <span className="text-xl font-bold tracking-tighter text-white font-mono">{stats.live + 100}</span>
          </div>
          <div className="w-px bg-white/10 my-1"></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/40 mb-1">Total Visitors</span>
            <span className="text-xl font-bold tracking-tighter text-white font-mono">{(stats.total + totalOffset).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
