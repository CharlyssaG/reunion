import Link from 'next/link'
import Nav from '@/components/Nav'

const specs = [
  ['9,000', 'acres'],
  ['51', 'lodge rooms'],
  ['4', 'cabins'],
  ['5', 'guest homes'],
  ['80+', 'activities'],
  ['2 hrs', 'from DFW'],
]

const lodging = [
  {
    name: 'The Lodge',
    beds: '51 rooms',
    desc: 'Five-star rooms and suites, each with a private balcony overlooking Mallard Lake. Zagat award-winning three-course dinner and signature breakfast included in your rate.',
    who: 'Senior Gulledges + anyone who wants hotel-style luxury',
  },
  {
    name: 'The Cabins',
    beds: '4 cabins',
    desc: '780 sq ft of rustic charm, tucked in a wooded setting half a mile from the main lodge. Each cabin has its own Texas theme, rocking chairs, and valley views.',
    who: 'Knapps · Leisslers · Santos · Lenhard',
  },
  {
    name: 'Guest Homes',
    beds: '5 homes',
    desc: 'Private residences near the main lodge — multiple bedrooms, fully furnished kitchens, full privacy. Ideal for larger family units who want their own front door.',
    who: 'Gulledge / Cook family (5 people) + overflow',
  },
]

const activities = [
  {
    color: 'border-yellow-400',
    label: 'For Alex, Chris, Joe + Eli (13) + Theo (10)',
    title: 'Go Full Texas',
    items: [
      'Sporting Clays — NSCA-approved 10-station course, guide included',
      'Guided bass fishing on Mallard Lake (80 acres, stocked)',
      'Horseback riding — 60 or 90 min guided trail rides across 9,000 acres',
      '650-foot zip line over Mallard Lake',
      '40-foot climbing wall + 41-foot high ropes course',
      'Guided quail, chukar, or pheasant hunt with skilled dogs',
      'Can-Am side-by-side through the ranch (enchanted forest, river, peaks)',
      'Long-range rifle shooting — sniper rig + optics available',
    ],
  },
  {
    color: 'border-pink-400',
    label: 'For Charlyssa, Jamie, Angela, Nicole, Charlena, Tiffany',
    title: 'The Good Stuff',
    items: [
      'Full-service spa — hot stone massage, facials, manicures, Margarita Pedicure',
      "Adult-only pool with cabana service, hot tub, and lounge",
      'Zagat award-winning gourmet dinner every night (included in rate)',
      'Live music Saturday nights in the Great Room or Lakeside Terrace',
      'Catch-and-release fishing off the dock — low effort, high reward',
      'Nature trail hike through enchanted forest to Gunn Mountain summit',
      'Pickleball complex (covered)',
      'Fossil hunt on the property — real fossils, ID book provided',
    ],
  },
  {
    color: 'border-green-400',
    label: 'For Papa, Omi + anyone who wants to exhale',
    title: 'Pure Texas Ease',
    items: [
      'Balcony overlooking Mallard Lake — coffee, sunrise, done',
      'Hayride across the ranch at sunset',
      "S'mores at the fire pit every night",
      'Gunn Mountain summit stairs — 137 steps, panoramic Hill Country views',
      'Shuffleboard, cornhole, horseshoes behind the main lodge',
      '18-hole mini golf course',
      'Golf driving range (6 covered bays)',
      'Sit in the Great Room with floor-to-ceiling windows and just be in Texas',
    ],
  },
  {
    color: 'border-cyan-400',
    label: 'For Laura (11), Lucy (9), Eli (13), Theo (10), Charles (5)',
    title: "The Kids' Ranch",
    items: [
      "Kids Ranch — foosball, air hockey, ping pong, video games (reservation req'd)",
      'Fossil digging with identification book (Charles will love this)',
      'Kids UTV dirt track — 5 laps designed for all ages',
      'Family pool with lazy river and trampolines',
      'Petting corral — meet Gracey the miniature goat and her babies',
      'Largest maze in Texas (entire family gets lost together)',
      'Zip line and 40-foot climbing wall for the older kids',
      'Tomahawk throwing, archery, paintball target shooting',
    ],
  },
]

const nearby = [
  { name: 'Dinosaur Valley State Park', dist: '20 min', note: 'Real dinosaur tracks in the riverbed. Charles is going to absolutely lose it.' },
  { name: 'Fossil Rim Wildlife Center', dist: '20 min', note: 'Drive-through safari with giraffes, rhinos, and cheetahs. Genuinely surreal.' },
  { name: 'Squaw Valley Golf', dist: '20 min', note: 'Two 18-hole championship courses, Golf Digest rated 4.5 stars.' },
  { name: 'Glen Rose town square', dist: '15 min', note: 'Antique shops, local restaurants, historic courthouse. Easy afternoon out.' },
]

const flights = [
  { fam: 'Senior Gulledges', from: 'Jupiter, FL', route: 'PBI/MIA → DFW (~3 hrs)', note: 'Direct flights on American. Easy. Or rent a car from DFW — it\'s a 90-min drive to the lodge.' },
  { fam: 'Knapps', from: 'New Hampshire', route: 'BOS → DFW (~4 hrs)', note: 'Direct on American or Delta. One of the shorter flights NH can get to any of these three destinations.' },
  { fam: 'Gulledge / Cook', from: 'Colorado', route: 'DEN → DFW (~2.5 hrs)', note: 'Shortest flight of any destination. American, United, Frontier all fly this. Could share a rental car with Santos.' },
  { fam: 'Leisslers', from: 'Sarasota/Bradenton', route: 'SRQ/TPA → DFW (~3 hrs)', note: 'Direct or one stop. Reasonable. Jamie and Charlyssa: lodge is 90 min from DFW by car.' },
  { fam: 'Santos', from: 'Colorado', route: 'DEN → DFW (~2.5 hrs)', note: 'Same easy route as Gulledge/Cook. Joe and Nicole could coordinate the same flight as Alex and Angela.' },
  { fam: 'Lenhard', from: 'TBD', route: 'TBD → DFW', note: 'DFW is one of the best-connected airports in the US — direct flights from virtually everywhere.' },
]

export default function RoughCreek() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative starfield min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at bottom, #4A2D1B 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <div className="font-mono text-xs text-yellow-400 mb-3 tracking-widest animate-blink">● OPTION 2 OF 4 · LAND-BASED ●</div>
          <h1 className="wordart text-5xl sm:text-7xl leading-none mb-2">Rough Creek</h1>
          <h1 className="wordart-blue text-5xl sm:text-7xl leading-none mb-6">Lodge</h1>
          <p className="font-mono text-yellow-300 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            9,000 acres of Texas Hill Country. 80+ activities.<br/>
            Gourmet dining included every night. Glen Rose, Texas.<br/>
            Two hours from DFW.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Summer 2028', 'Glen Rose, TX', 'Rough Creek Lodge', 'All-inclusive dining'].map(t => (
              <span key={t} className="font-mono text-xs px-3 py-1 border border-yellow-500/40 text-yellow-300 bg-yellow-950/40">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rainbow-hr" />

      {/* SPECS */}
      <section className="bg-black/60 py-8 border-b border-yellow-500/20">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 sm:grid-cols-6 gap-1">
          {specs.map(([n, l]) => (
            <div key={l} className="text-center border border-yellow-900 bg-black/40 py-3 px-2">
              <div className="font-mono text-xl font-bold neon-yellow">{n}</div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="win95 max-w-2xl mx-auto">
          <div className="win95-title">
            <span>rough_creek_lodge.exe — Why This Works</span>
            <div className="flex gap-0.5"><span className="win95-btn">_</span><span className="win95-btn">□</span><span className="win95-btn">✕</span></div>
          </div>
          <div className="p-4">
            <div className="win95-inset font-mono text-sm leading-7 text-black">
              <p>Michigan is the lake escape. Rough Creek is the Texas ranch experience — and for a family spread across Florida, Colorado, and New Hampshire, Texas sits in the geographic middle and DFW has the best flight connections of any destination on this list.</p>
              <br />
              <p>The rate at Rough Creek includes dinner and breakfast every day. That means no coordinating restaurants, no splitting checks, no "who's cooking tonight." You show up, you eat incredibly well, and you spend the rest of the time on 9,000 acres doing whatever you want.</p>
              <br />
              <p><strong>For the adventure crew:</strong> sporting clays, horseback riding, guided hunts, zip line, rock climbing, can-am side-by-sides — this is the most activity-dense option on the list.</p>
              <br />
              <p><strong>For everyone else:</strong> spa, adult pool, gourmet dining, lake views, live music, and a rocking chair on a cabin porch overlooking the Brazos River valley.</p>
              <br />
              <p><strong>Children 12 and under eat free</strong> with adult meal purchase. That changes the family math significantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LODGING */}
      <section className="border-t border-yellow-900/40 bg-black/30 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ WHERE WE SLEEP ]</div>
            <h2 className="wordart text-4xl">The Property</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {lodging.map(l => (
              <div key={l.name} className="neon-border-yellow bg-black/60 p-5">
                <div className="font-mono text-2xl font-bold neon-yellow mb-0.5">{l.beds}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{l.name}</h3>
                <p className="font-mono text-xs text-white/60 leading-relaxed mb-3">{l.desc}</p>
                <div className="border-t border-yellow-900/60 pt-2 font-mono text-xs text-yellow-400">{l.who}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-black/40 border border-yellow-900/40 p-4 font-mono text-xs text-yellow-300/70 text-center leading-6">
            Rate includes: Zagat award-winning 3-course dinner nightly · signature breakfast daily · all complimentary on-site activities · Wi-Fi · fitness center · pools
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ 80+ ACTIVITIES ]</div>
          <h2 className="wordart-rainbow text-4xl">Something for Everyone</h2>
          <p className="font-mono text-white/40 text-xs mt-2">Nothing mandatory. Everything available. Most are included in the nightly rate.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {activities.map(a => (
            <div key={a.title} className={`bg-black/50 border-l-4 ${a.color} p-5`}>
              <div className="font-mono text-xs text-white/35 mb-1 italic">{a.label}</div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{a.title}</h3>
              <ul className="space-y-1">
                {a.items.map(i => (
                  <li key={i} className="font-mono text-xs text-white/70 flex gap-2">
                    <span className="text-white/30 shrink-0">→</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-white/30 text-center mt-4 italic">
          Premium add-ons (additional fee): guided hunts · sporting clays · horseback rides · side-by-sides · spa treatments · bowling · paintball · Kids Ranch
        </p>
      </section>

      {/* NEARBY */}
      <section className="bg-black/50 border-t border-b border-white/10 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">[ OFF-PROPERTY ]</div>
            <h2 className="wordart-blue text-4xl">While You're There</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {nearby.map(n => (
              <div key={n.name} className="neon-border-cyan bg-black/60 p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-white text-base">{n.name}</h3>
                  <span className="font-mono text-xs text-cyan-400 whitespace-nowrap shrink-0">{n.dist}</span>
                </div>
                <p className="font-mono text-xs text-white/55 leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLIGHTS */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ GETTING THERE ]</div>
          <h2 className="wordart text-4xl">DFW is the Hub.</h2>
          <p className="font-mono text-white/40 text-xs mt-2">Fly into Dallas–Fort Worth, rent a car, drive 90 minutes. Done.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {flights.map(f => (
            <div key={f.fam} className="neon-border-yellow bg-black/60 p-4">
              <div className="font-display font-bold text-white text-sm mb-0.5">{f.fam}</div>
              <div className="font-mono text-xs text-yellow-400 mb-1">{f.from}</div>
              <div className="font-mono text-xs text-cyan-300 font-bold mb-2">{f.route}</div>
              <p className="font-mono text-xs text-white/50 leading-relaxed">{f.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 neon-border-yellow bg-black/60 p-4 font-mono text-xs text-yellow-300/70 text-center leading-6">
          DFW is American Airlines' largest hub — direct flights from every city on our list. Rent 2–3 cars from DFW and caravan to the lodge together. Colorado families have the shortest flight of any destination option.
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-black/60 border-t border-white/10 py-14">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ THE NUMBERS ]</div>
            <h2 className="wordart text-4xl">What It Costs</h2>
            <p className="font-mono text-white/40 text-xs mt-2">All-inclusive nightly rate. Dinner and breakfast always included.</p>
          </div>
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="border-b border-yellow-400/40">
                <th className="text-left py-2 text-yellow-300 font-normal tracking-widest text-xs">ITEM</th>
                <th className="text-right py-2 text-yellow-300 font-normal tracking-widest text-xs">EST.</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              {[
                ['Nightly rate — lodge rooms (per person, double occ.)', '~$300–$500 /person/night'],
                ['Cabin suites (per person, estimated)', '~$250–$450 /person/night'],
                ['Children 12 and under', 'Eat free with adult meal purchase'],
                ['7-night stay per person (adult)', '~$1,750–$3,500 total'],
                ['Flights to DFW (round-trip)', '~$200–$600 /person'],
                ['Car rental from DFW (split across group)', '~$50–$100 /person total'],
                ['Premium activities (sporting clays, horses, spa)', 'À la carte — per activity'],
                ['Total estimated per adult', '~$2,000–$4,200 /person'],
              ].map(([item, amt], i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 7 ? 'text-yellow-300 font-bold' : ''}`}>
                  <td className="py-2 pr-4 text-xs leading-relaxed">{item}</td>
                  <td className="py-2 text-right whitespace-nowrap text-xs">{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono text-xs text-white/25 mt-4 italic">
            * Dinner and breakfast are included in the nightly rate — budget significantly less for food than other options. Contact Rough Creek directly for group rates: (254) 965-3700.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-white/10">
        <div className="font-mono text-xs text-yellow-400 tracking-widest mb-4">[ READY? ]</div>
        <h2 className="wordart text-4xl mb-6">Cast Your Vote</h2>
        <Link href="/vote" className="retro-btn text-xl">🤠 VOTE ROUGH CREEK 🤠</Link>
        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <Link href="/michigan" className="font-mono text-xs text-white/40 hover:text-white/70 underline">← Michigan</Link>
          <Link href="/alaska" className="font-mono text-xs text-white/40 hover:text-white/70 underline">Alaska →</Link>
          <Link href="/caribbean" className="font-mono text-xs text-white/40 hover:text-white/70 underline">Caribbean →</Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center">
        <div className="rainbow-hr mb-4" />
        <p className="font-mono text-xs text-white/20">Rough Creek Lodge · Glen Rose, TX · (254) 965-3700 · roughcreek.com</p>
      </footer>
    </>
  )
}
