import Image from 'next/image';
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import bgImage from './1000311396.webp';
import heroDesktop from './herodesktop.webp';
import logo from './logo.png';
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src={logo}
              alt="Nuneshan Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-2xl md:text-3xl font-bold tracking-tighter text-red-600 drop-shadow-md">
            Nuneshan
          </div>
        </Link>
        <div className="flex gap-8 text-sm md:text-base font-medium" style={{ fontFamily: 'var(--font-anek-malayalam)' }}>
          <Link href="/" className="hover:text-red-500 transition-colors drop-shadow-md">
            ഹോം
          </Link>
          <Link href="/lies" className="hover:text-red-500 transition-colors drop-shadow-md">
            നുണകൾ
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <div className="md:hidden relative h-full w-full">
            <Image
              src={bgImage}
              alt="Nuneshan Background Mobile"
              fill
              className="object-cover object-center brightness-[0.4] contrast-[1.2]"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Desktop Background */}
          <div className="hidden md:block relative h-full w-full">
            <Image
              src={heroDesktop}
              alt="Nuneshan Background Desktop"
              fill
              className="object-cover object-center brightness-[0.4] contrast-[1.2]"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 px-4 text-center max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-16">
          <div className="relative w-96 h-48 md:w-[512px] md:h-[256px] lg:w-[640px] lg:h-[320px] mb-4 drop-shadow-[0_0_40px_rgba(220,38,38,0.8)]">
            <Image
              src={logo}
              alt="Nuneshan Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight text-white drop-shadow-2xl" 
            style={{ fontFamily: 'var(--font-anek-malayalam)' }}
          >
            സത്യം ചെരുപ്പ് ഇടുമ്പോൾ നുണേശൻ ലോകം കറങ്ങും
          </h1>
          
          {/* Counter Element - Retro-Neon Digital Odometer */}
          <div className="mt-12 relative flex flex-col items-center justify-center p-3 md:p-4 rounded-[14px] bg-[#111] border-2 border-[#FF8C00] shadow-[inset_0_2px_8px_rgba(0,0,0,0.9),0_0_15px_rgba(255,140,0,0.5)]">
            {/* Inner metallic rim */}
            <div className="absolute inset-0.5 rounded-[11px] border border-gray-600/40 pointer-events-none"></div>
            
            {/* Industrial accents (screws) */}
            <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-gray-500 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
            <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-gray-500 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
            <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-gray-500 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
            <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-gray-500 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>

            {/* Ventilation slits (left & right) */}
            <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
              <div className="w-[3px] h-2 bg-black rounded-sm shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
              <div className="w-[3px] h-2 bg-black rounded-sm shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
              <div className="w-[3px] h-2 bg-black rounded-sm shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
            </div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
              <div className="w-[3px] h-2 bg-black rounded-sm shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
              <div className="w-[3px] h-2 bg-black rounded-sm shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
              <div className="w-[3px] h-2 bg-black rounded-sm shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
            </div>

            {/* Label */}
            <span className="text-[10px] md:text-xs text-[#FF8C00]/80 mb-2 font-sans uppercase tracking-widest z-10" style={{ fontFamily: 'var(--font-anek-malayalam)' }}>
              ഇതു വരെ പറഞ്ഞ കള്ളങ്ങൾ
            </span>

            {/* Digit Bays */}
            <div className="flex gap-[3px] bg-black p-1 rounded-md border border-gray-800 shadow-[inset_0_2px_5px_rgba(0,0,0,1)] z-10">
              {['0', '0', '3', '8'].map((digit, i) => (
                <div key={i} className="flex">
                  <div className="relative w-6 h-12 md:w-8 md:h-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded flex items-center justify-center overflow-hidden border border-gray-800/80 shadow-[inset_0_0_8px_rgba(0,0,0,1)]">
                    <span className={`absolute text-[#331100] text-2xl md:text-4xl opacity-40 select-none ${orbitron.className}`}>8</span>
                    <span className={`relative text-red-600 text-2xl md:text-4xl drop-shadow-[0_0_8px_rgba(220,38,38,0.9)] z-10 ${orbitron.className}`}>{digit}</span>
                  </div>
                  {i < 3 && (
                    <div className="w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent ml-[3px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Great Lies Section */}
      <section id="lies" className="relative z-20 bg-black py-24 px-6 md:px-12 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-anek-malayalam)' }}
          >
            മഹത്തായ നുണകൾ
          </h2>
          
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 gap-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none">
            {/* Video 1 */}
            <div className="flex-none w-[280px] md:w-[320px] lg:w-full aspect-[9/16] rounded-[2rem] overflow-hidden snap-center border border-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/APyREigs9LQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 2 */}
            <div className="flex-none w-[280px] md:w-[320px] lg:w-full aspect-[9/16] rounded-[2rem] overflow-hidden snap-center border border-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/4uY-vkIXg50" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 3 */}
            <div className="flex-none w-[280px] md:w-[320px] lg:w-full aspect-[9/16] rounded-[2rem] overflow-hidden snap-center border border-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gH6EQ7GkYqU" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Watch More Button */}
          <div className="mt-8 text-center">
            <Link 
              href="/lies" 
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-anek-malayalam)' }}
            >
              കൂടുതൽ നുണകൾ കാണുക (Watch Reels)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
