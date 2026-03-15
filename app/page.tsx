import Image from 'next/image';
import Link from 'next/link';
import bgImage from './1000311396.webp';
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="text-2xl font-bold tracking-tighter text-red-600 drop-shadow-md">
          Nuneshan
        </div>
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* We use a placeholder image with red/dark tones matching the palette. 
              You can replace this src with the actual uploaded image path if you host it. */}
          <Image
            src={bgImage}
            alt="Nuneshan Background"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Black overlay with 60% opacity as requested */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Spotlight effect matching the red/orange lighting in the image */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.4),transparent_60%)] z-10"></div>
          {/* Additional subtle gradient to blend with the dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 px-4 text-center max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-16">
          {/* Branding */}
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-red-600 tracking-wider mb-4 drop-shadow-[0_0_25px_rgba(220,38,38,0.8)]"
            style={{ fontFamily: 'var(--font-anek-malayalam)' }}
          >
            നുണേശൻ
          </h2>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight text-white drop-shadow-2xl" 
            style={{ fontFamily: 'var(--font-anek-malayalam)' }}
          >
            സത്യം ചെരുപ്പ് ഇടുമ്പോൾ നുണേശൻ ലോകം കറങ്ങും
          </h1>
          
          {/* Counter Element */}
          <div className="mt-12 inline-flex flex-col items-center justify-center p-8 rounded-[2rem] bg-black/50 backdrop-blur-md border border-red-900/50 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
            <span className="text-lg md:text-xl text-red-200 mb-2 font-medium tracking-wide" style={{ fontFamily: 'var(--font-anek-malayalam)' }}>
              ഇത് വരെ പറഞ്ഞ കള്ളങ്ങൾ
            </span>
            <span className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tracking-tighter leading-none">
              35
            </span>
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
          <div className="flex overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 gap-8 snap-x snap-mandatory hide-scrollbar">
            {/* Video 1 */}
            <div className="flex-none w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden snap-center border border-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 relative">
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
            <div className="flex-none w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden snap-center border border-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 relative">
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
            <div className="flex-none w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden snap-center border border-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 relative">
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
