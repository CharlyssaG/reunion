import Link from 'next/link'
import Nav from '@/components/Nav'

const families = [
  { name: 'Senior Gulledges', loc: 'Jupiter, FL', members: ['Charles (Papa)', 'Ava (Omi)'] },
  { name: 'Knapps',           loc: 'New Hampshire', members: ['Chris', 'Charlena', 'Laura (11)', 'Lucy (9)'] },
  { name: 'Gulledge / Cook',  loc: 'Colorado', members: ['Alex', 'Angela', 'Eli (13)', 'Theo (10)', 'Charles (5)'] },
  { name: 'Leisslers',        loc: 'Sarasota / Bradenton, FL', members: ['Jamie', 'Charlyssa'] },
  { name: 'Santos',           loc: 'Colorado', members: ['Joe', 'Nicole'] },
  { name: 'Lenhard',          loc: 'TBD', members: ['Tiffany'] },
]

const destinations = [
  {
    href: '/michigan',
    emoji: '🌊',
    name: 'Northern Michigan',
    sub: 'Sleeping Bear Resort · Lake Ann',
    color: 'neon-border-cyan',
    tag: 'LAND · JULY',
    tagColor: 'text-cyan-300',
    blurb: 'Private lakefront resort — we rent the whole place. Fire pits, kayaks, Traverse City wine trail, and 450 feet of pure Michigan shoreline.',
    pill: 'Most togetherness',
    pillColor: 'bg-cyan-900 text-cyan-300',
  },
  {
    href: '/roughcreek',
    emoji: '🤠',
    name: 'Rough Creek Lodge',
    sub: 'Glen Rose, Texas · 9,000 acres',
    color: 'neon-border-yellow',
    tag: 'LAND · SUMMER',
    tagColor: 'text-yellow-300',
    blurb: 'Five-star Texas ranch — gourmet dinner and breakfast included nightly, 80+ activities, sporting clays, spa, horseback riding, and the largest maze in Texas.',
    pill: 'Most activities',
    pillColor: 'bg-yellow-900 text-yellow-300',
  },
  {
    href: '/alaska',
    emoji: '🏔️',
    name: 'Alaska Cruise',
    sub: 'Inside Passage · Departs Vancouver',
    color: 'neon-border-pink',
    tag: 'CRUISE · JUNE',
    tagColor: 'text-pink-300',
    blurb: 'Glaciers, humpbacks, zip-lines, and Juneau crab feasts. The Inside Passage is calm water — best cruise for motion sensitivity. Everyone\'s own cabin.',
    pill: 'Most wow factor',
    pillColor: 'bg-pink-900 text-pink-300',
  },
  {
    href: '/caribbean',
    emoji: '🌴',
    name: 'Caribbean Cruise',
    sub: 'Eastern Caribbean · Departs Miami',
    color: 'neon-border-cyan',
    tag: 'CRUISE · JAN–MAR',
    tagColor: 'text-cyan-300',
    blurb: 'St. Thomas, St. Maarten, San Juan. Florida families drive to the port. CO and NH are 3–4 hours by air. Warmest option, easiest logistics.',
    pill: 'Easiest to get to',
    pillColor: 'bg-cyan-900 text-cyan-300',
  },
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden starfield scanlines">

        {/* spinning stars decoration */}
        <div className="absolute top-8 left-8 text-4xl opacity-60 animate-spin-slow select-none">✦</div>
        <div className="absolute top-16 right-12 text-2xl opacity-40 animate-spin-slow select-none" style={{animationDelay:'-3s'}}>✦</div>
        <div className="absolute bottom-24 left-16 text-3xl opacity-50 animate-spin-slow select-none" style={{animationDelay:'-1.5s'}}>✦</div>
        <div className="absolute bottom-12 right-8 text-5xl opacity-30 animate-spin-slow select-none" style={{animationDelay:'-5s'}}>✦</div>

        {/* blinking under construction badge */}
        <div className="mb-6 font-mono text-xs text-yellow-300 flex items-center gap-2">
          <span className="animate-blink">●</span>
          OFFICIAL REUNION PLANNING SITE · EST. JUNE 2026
          <span className="animate-blink" style={{animationDelay:'0.5s'}}>●</span>
        </div>

        {/* WordArt title */}
        <h1 className="wordart text-6xl sm:text-8xl md:text-9xl leading-none mb-2 select-none">
          REUNION
        </h1>
        <h2 className="wordart-blue text-5xl sm:text-7xl md:text-8xl leading-none mb-6 select-none">
          2028
        </h2>

        {/* surnames marquee */}
        <div className="w-full max-w-2xl mb-8 overflow-hidden border border-yellow-300/30 bg-black/40 py-2"
             style={{boxShadow:'0 0 12px rgba(255,255,0,0.2)'}}>
          <div className="marquee-wrap">
            <span className="marquee-inner font-mono text-yellow-300 text-sm tracking-widest">
              ✦ &nbsp; GULLEDGE &nbsp; · &nbsp; KNAPP &nbsp; · &nbsp; LEISSLER &nbsp; · &nbsp; SANTOS &nbsp; · &nbsp; LENHARD &nbsp; · &nbsp; GULLEDGE/COOK &nbsp; ✦ &nbsp; GULLEDGE &nbsp; · &nbsp; KNAPP &nbsp; · &nbsp; LEISSLER &nbsp; · &nbsp; SANTOS &nbsp; · &nbsp; LENHARD &nbsp; · &nbsp; GULLEDGE/COOK &nbsp; ✦
            </span>
          </div>
        </div>

        {/* stat pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {[
            ['17', 'people'],
            ['6', 'families'],
            ['4', 'destinations'],
            ['1', 'vote'],
          ].map(([n, l]) => (
            <div key={l} className="bg-black/60 border border-white/20 px-4 py-2 text-center">
              <div className="font-mono text-2xl font-bold neon-cyan">{n}</div>
              <div className="font-mono text-xs text-white/60 uppercase tracking-widest">{l}</div>
            </div>
          ))}
        </div>

        <Link href="/vote"
          className="retro-btn text-lg animate-float inline-block">
          CAST YOUR VOTE →
        </Link>

        <p className="mt-4 font-mono text-xs text-white/40">scroll down to meet the crew</p>
      </section>

      {/* ── RAINBOW DIVIDER ───────────────────────── */}
      <div className="rainbow-hr" />

      {/* ── MARQUEE STRIP ─────────────────────────── */}
      <div className="bg-black py-2 overflow-hidden border-y border-pink-500/30">
        <div className="marquee-wrap">
          <span className="marquee-inner font-mono text-xs text-pink-400 tracking-widest" style={{animationDuration:'12s', animationDirection:'reverse'}}>
            🌊 NORTHERN MICHIGAN &nbsp;·&nbsp; 🏔️ ALASKA CRUISE &nbsp;·&nbsp; 🌴 CARIBBEAN CRUISE &nbsp;·&nbsp; 🗳️ YOUR VOTE MATTERS &nbsp;·&nbsp; ✈️ TRAVEL 2028 &nbsp;·&nbsp; 🎉 BEST REUNION EVER &nbsp;·&nbsp;
            🌊 NORTHERN MICHIGAN &nbsp;·&nbsp; 🏔️ ALASKA CRUISE &nbsp;·&nbsp; 🌴 CARIBBEAN CRUISE &nbsp;·&nbsp; 🗳️ YOUR VOTE MATTERS &nbsp;·&nbsp; ✈️ TRAVEL 2028 &nbsp;·&nbsp; 🎉 BEST REUNION EVER &nbsp;·&nbsp;
          </span>
        </div>
      </div>

      {/* ── FAMILY ROSTER ─────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="font-mono text-xs text-green-400 mb-2 tracking-widest">[ WHO IS COMING ]</div>
          <h2 className="wordart-rainbow text-4xl sm:text-5xl">The Crew</h2>
          <p className="font-mono text-white/50 text-sm mt-2">17 people · 4 states · 1 big trip</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {families.map((f) => (
            <div key={f.name}
                 className="win95 p-0 text-center select-none">
              <div className="win95-title">
                <span>{f.name}</span>
                <span className="flex gap-0.5"><span className="win95-btn">_</span><span className="win95-btn">□</span><span className="win95-btn">✕</span></span>
              </div>
              <div className="p-2">
                <div className="font-mono text-xs text-blue-700 mb-1">{f.loc}</div>
                <div className="win95-inset text-left">
                  {f.members.map(m => (
                    <div key={m} className="font-mono text-xs leading-5">
                      {m.match(/\(\d+\)/) ? <span className="text-gray-500 italic">{m}</span> : m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rainbow-hr" />

      {/* ── DESTINATIONS ──────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="font-mono text-xs text-pink-400 mb-2 tracking-widest">[ CHOOSE YOUR ADVENTURE ]</div>
          <h2 className="wordart text-4xl sm:text-5xl">The Options</h2>
          <p className="font-mono text-white/50 text-sm mt-2">Click each destination to see the full breakdown</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {destinations.map(d => (
            <Link key={d.href} href={d.href}
                  className={`dest-card block bg-black/60 ${d.color} p-5 group`}>
              <div className={`font-mono text-xs mb-2 ${d.tagColor} tracking-widest`}>{d.tag}</div>
              <div className="text-4xl mb-2">{d.emoji}</div>
              <h3 className="font-display font-bold text-xl text-white mb-0.5">{d.name}</h3>
              <p className="font-mono text-xs text-white/50 mb-3">{d.sub}</p>
              <p className="font-body text-sm text-white/75 leading-relaxed mb-4">{d.blurb}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono px-2 py-0.5 ${d.pillColor}`}>{d.pill}</span>
                <span className={`font-mono text-xs ${d.tagColor} group-hover:underline`}>read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── VOTE CTA ──────────────────────────────── */}
      <section className="py-16 text-center border-t border-white/10">
        <div className="font-mono text-xs text-green-400 mb-4 tracking-widest animate-blink">
          ● YOUR OPINION REQUIRED ●
        </div>
        <h2 className="wordart-blue text-4xl sm:text-5xl mb-4">Cast Your Vote</h2>
        <p className="font-mono text-white/60 text-sm mb-8 max-w-md mx-auto">
          Read the options, pick your destination, leave a note for the group.<br/>
          Voting closes when Charlyssa says so.
        </p>
        <Link href="/vote" className="retro-btn text-xl">
          🗳️ VOTE NOW 🗳️
        </Link>
      </section>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer className="border-t border-yellow-300/20 py-8 text-center">
        <div className="rainbow-hr mb-6" />
        <p className="font-mono text-xs text-white/30 mb-1">
          Made with ✦ by Charlyssa · Leissler Family · 2026
        </p>
        <p className="font-mono text-xs text-white/20">
          Best viewed in Netscape Navigator 4.0 · 800×600 resolution · 256 colors
        </p>
        <div className="mt-4 flex justify-center gap-4">
          {['🌊','🏔️','🌴'].map(e => (
            <span key={e} className="text-2xl animate-float" style={{animationDelay: `${Math.random()*2}s`}}>{e}</span>
          ))}
        </div>
      </footer>
    </>
  )
}
