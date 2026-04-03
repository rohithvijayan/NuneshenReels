'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Share2, ChevronDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../logo.png';

// Sample data using the provided YouTube Shorts IDs + a few duplicates to allow scrolling to 5+
const REELS = [
  { id: 'sDPNFViuZmg', title: 'ചൂടാവാത്ത സതീശൻ #nuneshan' },
  { id: 'fF6he8F9fWI', title: 'തൃശ്ശൂർ ഡീൽ നുണ!!' },
  { id: 'qHA3_pq8Oi8', title: 'നുണയും നേരും തുടരും' },
  { id: 'lyGr79MbjnE', title: 'കേരളം തകർത്ത നുണ' },
  { id: '_tLGPvWHP3o', title: 'എന്റേം ചേട്ടന്റേം ശബ്ദം ഒരുപോലെ ഇരിക്കുന്നു' },
  { id: 'OP83YDAUuUs', title: 'നുണേശനെ വിശ്വസിച്ചാൽ ഇതാണ് അനുഭവം. Anchor : AI' },
  { id: 'PS_GTbwP4m4', title: 'നുണസരവാദി !!' },
  { id: '9twOcTa7-G8', title: 'ഒരു സ്മൂത്തായ നുണ!!' },
  { id: 'sQhyG9DR_jg', title: 'നുണേശന്റെ നുണ പൊളിച്ച് കെ സുധാകരൻ' },
  { id: 'APyREigs9LQ', title: '24 മണിക്കൂറിനുള്ളിൽ പൊളിഞ്ഞ നുണേശന്റെ രണ്ടു നുണകൾ !! #നുണേശൻ3.0' },
  { id: 'spb86u4eVpo', title: 'ഹൈക്കോടതി നുണേശനെ വീണ്ടും പൊളിക്കുന്നു!! #നുണേശൻ3.0' },
  { id: '4uY-vkIXg50', title: 'ഒരു മിഠായി നുണ!!  #നുണേശൻ3.0' },
  { id: 'rmSo5xdjBV4', title: 'നുണേശന്റെ ലൈവ് തേയൽ!! #നുണേശൻ3.0' },
  { id: 'gH6EQ7GkYqU', title: 'ഒറ്റശ്വാസത്തിൽ രണ്ട് നുണ!! #നുണേശൻ3.0' },
  { id: 'G0ojOL9LWSg', title: 'തുരങ്കം കയറിയ നുണ #നുണേശൻ3.0' },
  { id: 'SeqT7iXIuOo', title: 'ആരോഗ്യമില്ലാത്ത നുണ!! #നുണേശൻ3.0' },
  { id: 'GpsxTpxcUiU', title: 'ഒരു സോളാർ നുണ!!#നുണേശൻ3.0' },
  { id: 'bs0AhMyzXdA', title: 'ഒരു ഹൈസ്പീഡ് നുണ!! #നുണേശൻ 3.0' },
  { id: '0qGtPmcXfpM', title: 'നുണ വീണ്ടും ടൗൺഷിപ്പ് കയറിയപ്പോൾ!! #നുണേശൻ3.0' },
  { id: 'qGjS3tAM8BY', title: 'ഒരു CongRSS നുണ #നുണേശൻ3.0' },
  { id: 'DJF8lnXQeFg', title: 'കോടതി തന്നെ നുണയനെ എയറിലാക്കിയപ്പോൾ #നുണേശൻ3.0' },
  { id: 'og1q8-8nVj0', title: 'തൊട്ടാൽ ഷോക്കടിക്കുന്ന നുണ!! #നുണേശൻ3.0' },
  { id: '9t0_blwp6YY', title: 'ഫ്യൂസ് അടിച്ചു പോയ നുണ!! #നുണേശൻ3.0' },
  { id: 'JDW5C0qDhCg', title: 'ജിമ്മിൽ കയറിയ നുണ #നുണേശൻ3.0' },
  { id: 'phVz8jPvQpA', title: 'ടൗൺഷിപ്പ് കയറിയ നുണ!!' },
  { id: '-ggOMYxzjmg', title: 'എയറിൽ പോയ നുണ!!' },
  { id: 'HB8iYDU3jDk', title: 'ഒരു സപ്ലൈക്കോ നുണ  #നുണേശൻ3.0' },
  { id: '3N-qZqci4Rk', title: 'ഒരു ലൈഫ് നുണ!! #നുണേശൻ3.0' },
  { id: 'Jtum_dzt0oQ', title: 'ഗെയിലിൽ പൊട്ടിയ നുണ!! #നുണേശൻ3.0' },
  { id: 'DJ7h8st4l0E', title: 'നവകേരള നുണയൻ!!  #നുണേശൻ3.0' },
  { id: 'ySDFjgl2oMk', title: 'ഒരു പെൻഷൻ നുണ!! #നുണേശൻ3.0' },
  { id: '-qOPxak8pvw', title: 'ഒരു സാമ്പത്തിക കാര്യ നുണ!! #നുണേശൻ3.0' },
  { id: 'QisC9RXTeRA', title: 'സതീശന്റെ നുണകൾക്ക് വിശ്രമമില്ല!!  #nuneshan3.0' },
  { id: 'VMnaLbqQrp8', title: 'ഇരുണ്ട കാലത്തെ നുണ  #nuneshan3.0' },
  { id: '4B28kF7EXjs', title: 'ഒരു ഹൈവേ നുണ #nuneshan3.0' },
  { id: '1cSosFojCxc', title: 'നുണകൾ തുറന്നു കാട്ടുന്നത് തുടരും #nuneshan3.0' },
  { id: 'NGMxji_dzyE', title: 'കൊടുത്ത നിവേദനത്തിന് ഉടനടി കീറിക്കളഞ്ഞു പരിഹാരം. അതാണ് സതീശന്റെ എമ്പതി നുണേശൻ 3.0' },
  { id: 'CjOwDg0CcsE', title: 'സതീശന്റെ അച്ചടി ഭാഷയിലുള്ള നുണ കാണാം നുണേശൻ 3.0 #nuneshan3.0' },
  { id: '8AxJTpCvT-E', title: 'കേരളം വിട്ട നുണ!! നുണേശൻ 3.0 #nuneshan3.0' },
  { id: 'BLnGYqED5lk', title: 'മരിച്ചു പോയ പാണക്കാട് തങ്ങളുടെ പേരിലും നുണ നുണേശൻ 3.0 #nuneshan3.0' },
  { id: '2bbma-ijhsY', title: 'സതീശന്റെ നുണ ടെക്നോ പാർക്ക്‌ സന്ദർശിക്കുന്നു നുണേശൻ 3.0 #nuneshan3.0' },
  { id: '8xjlckd9kWY', title: 'പമ്പ കയറിയ നുണ നുണേശൻ 3.0 #nuneshan3.0' },
  { id: 'Q78h5RSovxw', title: 'കേരളത്തിന്റെ സാമ്പത്തിക സ്ഥിതിയെ പറ്റിയുള്ള നുണ നുണേശൻ 3.0 #nuneshan3.0' },
  { id: 'vhIyCV3BRhE', title: 'സതീശന്റെ പരിണാമങ്ങൾ #നുണേശൻ 3.0 #nuneshan3.0' },
  { id: 'Rk-7Oq8GUA4', title: 'നുണേശൻ മറന്നു പോയതാണ് 🤣നുണേശൻ 3.0   #nuneshan3.0' },
];

export default function LiesReelsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{ id: string, title: string } | null>(null);
  const [watchedSet, setWatchedSet] = useState<Set<number>>(new Set([0]));
  const [popupMessage, setPopupMessage] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect which reel is currently in view (Mobile only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the reel is visible for faster response
    );

    const elements = document.querySelectorAll('.reel-container');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Engagement Popup Logic
  useEffect(() => {
    setWatchedSet((prev) => {
      if (prev.has(activeIndex)) return prev;

      const newSet = new Set(prev).add(activeIndex);
      const count = newSet.size;

      // Trigger popup at specific milestones
      if ([3, 5, 10, 15, 20].includes(count)) {
        setPopupMessage(`നുണേശന്റെ ${count} നുണകൾ കണ്ടു, നിങ്ങൾ ഒരു സംഭവം തന്നെ!`);
        // Hide popup after 4 seconds
        setTimeout(() => setPopupMessage(''), 4000);
      }
      return newSet;
    });
  }, [activeIndex]);

  return (
    <div className="bg-[#0f0f0f] h-[100dvh] lg:h-screen w-full overflow-hidden relative text-white" style={{ fontFamily: 'var(--font-anek-malayalam)' }}>
      {/* SEO H1 */}
      <h1 className="sr-only">സതീശന്റെ പെരുംനുണകൾ - Nuneshan Reels</h1>

      {/* Mobile Back Button */}
      <Link href="/" className="lg:hidden absolute top-6 left-4 z-50 p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-colors">
        <ArrowLeft className="w-6 h-6 text-white" />
      </Link>

      {/* Desktop Header (YouTube Style) */}
      <header className="hidden lg:flex h-16 items-center px-6 border-b border-zinc-800/50 bg-[#0f0f0f] w-full z-50">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity h-full py-1">
          <ArrowLeft className="w-6 h-6 text-white" />
          <div className="flex items-center gap-2 h-full">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={logo}
                alt="Nuneshan Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white tracking-wider">Nuneshan</span>
          </div>
        </Link>
        <div className="mx-auto flex-1 max-w-2xl px-8">
          <div className="w-full bg-[#121212] border border-[#303030] rounded-full px-6 py-2.5 flex items-center text-zinc-400 focus-within:border-blue-500 focus-within:ml-[-1px] transition-colors">
            <span className="text-sm">Search lies...</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-red-800 flex items-center justify-center font-bold text-sm">N</div>
      </header>

      {/* Mobile Reels Container */}
      <div
        ref={containerRef}
        className="lg:hidden h-full w-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      >
        {REELS.map((reel, index) => (
          <Reel
            key={`${reel.id}-${index}`}
            reel={reel}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>

      {/* Desktop YouTube Grid Layout */}
      <div className="hidden lg:grid grid-cols-3 gap-6 w-full max-w-[1800px] mx-auto p-6 h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar">
        {REELS.map((reel, idx) => (
          <div
            key={`desktop-grid-${reel.id}-${idx}`}
            className="flex flex-col gap-3 cursor-pointer group"
            onClick={() => setSelectedVideo(reel)}
          >
            <div className="w-full aspect-video bg-zinc-800 rounded-xl overflow-hidden relative">
              <Thumbnail
                src={`https://img.youtube.com/vi/${reel.id}/hqdefault.jpg`}
                alt={reel.title}
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-xs px-1.5 py-0.5 rounded font-mono text-white">0:59</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center font-bold text-sm mt-0.5">N</div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold line-clamp-2 text-[#f1f1f1] group-hover:text-white" title={reel.title}>{reel.title}</h3>
                <p className="text-sm text-[#aaaaaa] mt-1 hover:text-white transition-colors">@nuneshan_exposed</p>
                <p className="text-sm text-[#aaaaaa]">{((reel.id.charCodeAt(0) + reel.id.length) % 500 + 50).toFixed(0)}K views • {((reel.id.charCodeAt(1) + reel.id.length) % 10 + 1).toFixed(0)} days ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden lg:flex fixed inset-0 z-[100] items-center justify-center bg-black/90 p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&mute=0&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full"
                style={{ border: 'none' }}
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Engagement Popup */}
      <AnimatePresence>
        {popupMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-yellow-500 text-black p-4 rounded-2xl shadow-[0_0_40px_rgba(234,179,8,0.6)] z-50 border-2 border-yellow-300 text-center font-extrabold text-lg md:text-xl"
          >
            🎉 {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Thumbnail({ src, alt, className, priority = false }: { src: string, alt: string, className?: string, priority?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-shimmer" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}

function Reel({ reel, index, activeIndex }: { reel: { id: string, title: string }, index: number, activeIndex: number }) {
  const isActive = activeIndex === index;
  const isNear = Math.abs(activeIndex - index) <= 1;

  // Simple deterministic "stats" based on video ID
  const views = ((reel.id.charCodeAt(0) + reel.id.length) % 500 + 50).toFixed(0);
  const likes = ((reel.id.charCodeAt(1) + reel.id.length) % 50 + 5).toFixed(1);

  const handleShare = async () => {
    const shareData = {
      title: 'Nuneshan Reels',
      text: reel.title,
      url: `https://www.youtube.com/shorts/${reel.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${reel.title}\n\nWatch here: https://www.youtube.com/shorts/${reel.id}`)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div data-index={index} className="reel-container h-[100dvh] w-full snap-start relative flex items-center justify-center bg-black">
      {/* Video Player Container */}
      <div className="relative w-full h-full max-w-md mx-auto bg-zinc-900">
        <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
          {isActive ? (
            <iframe
              src={`https://www.youtube.com/embed/${reel.id}?autoplay=1&mute=0&loop=1&playlist=${reel.id}&controls=0&modestbranding=1&playsinline=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-[120%] -mt-[10%]"
              style={{ border: 'none' }}
              loading="lazy"
            />
          ) : isNear ? (
            <Thumbnail
              src={`https://img.youtube.com/vi/${reel.id}/hqdefault.jpg`}
              alt={reel.title}
              className="w-full h-full opacity-50"
            />
          ) : (
            <div className="w-full h-full animate-shimmer" />
          )}
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end pb-12 px-4 bg-gradient-to-t from-black/90 via-black/20 to-transparent">

          <div className="flex justify-between items-end w-full">
            {/* Caption / Title */}
            <div className="flex-1 pr-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2 leading-tight">
                {reel.title}
              </h2>
              <p className="text-base text-red-400 font-bold drop-shadow-md">@nuneshan_exposed</p>
            </div>

            {/* Side Interaction Buttons */}
            <div className="flex flex-col items-center gap-6 pointer-events-auto pb-4">
              <button className="flex flex-col items-center gap-1 group">
                <div className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-red-600/80 transition-colors shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold drop-shadow-md">{likes}K</span>
              </button>

              <button
                onClick={handleShare}
                className="flex flex-col items-center gap-1 group"
              >
                <div className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white/30 transition-colors shadow-lg">
                  <Share2 className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold drop-shadow-md">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Animation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-80 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="w-8 h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
