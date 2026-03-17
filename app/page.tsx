import Image from 'next/image';
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import bgImage from './1000311396.webp';
import heroDesktop from './herodesktop.webp';
import logo from './logo.png';
import RealTimeVisitorStats from '@/components/RealTimeVisitorStats';
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
          <div className="text-2xl md:text-3xl font-bold tracking-tighter text-white drop-shadow-md">
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight text-white drop-shadow-2xl text-balance"
            style={{ fontFamily: 'var(--font-anek-malayalam)' }}
          >
            സത്യം ചെരുപ്പിടുമ്പോഴേക്കും നുണേശൻ ലോകം ചുറ്റിയിട്ടുണ്ടാവും…
          </h1>

        </div>
      </main>

      {/* Great Lies Section */}
      <section id="lies" className="relative z-20 bg-black py-24 px-6 md:px-12 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-anek-malayalam)' }}
          >
            പെരുംനുണകൾ
          </h2>
          <p className="text-center text-white mb-16 drop-shadow-lg" style={{ fontFamily: 'var(--font-anek-malayalam)' }}>നമ്മുടെ പ്രതിപക്ഷ നേതാവ് കല്ലുവച്ച നുണകൾ ആവർത്തിക്കുക എന്നത് ഒരു രാഷ്ട്രീയതന്ത്രമായി സ്വീകരിച്ചിരിക്കുകയാണ്. ഈ നുണപറച്ചിൽ കേരളത്തിന്റെ ജനാധിപത്യ പരിസരസത്തെ മുൻപെങ്ങുമില്ലാത്ത വിധം മലിനപ്പെടുത്തുണ്ട്. ഒരു രാഷ്ട്രീയ നേതാവും പിന്തുടരാൻ പാടില്ലാത്ത വഴിയാണിത്. പ്രതിപക്ഷനേതാവിന്റെ നീചമായ നുണയുടെ രാഷ്ട്രീയവഴികളെ തുറന്നു കാട്ടാനുള്ള ശ്രമമാണ് ഈ പേജ്.

          </p>
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
              കൂടുതൽ നുണകൾ കാണുക
            </Link>
          </div>
        </div>
      </section>
      <RealTimeVisitorStats />
    </div>
  );
}
