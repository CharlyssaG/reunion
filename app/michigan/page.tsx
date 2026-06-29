import Link from 'next/link'
import Nav from '@/components/Nav'

const lodging = [
  { name: 'The Lodge', beds: '5 BR', desc: 'Custom log home. Wrap-around porch, jacuzzi, lake views. The flagship unit.', who: 'Senior Gulledges + couple' },
  { name: "Bear's Den", beds: '6 BR', desc: 'Remodeled farmhouse. Big kitchen for group cooking nights. Family hub.', who: 'Gulledge/Cook crew + more' },
  { name: 'The Cabins', beds: '6 × 2 BR', desc: 'Private lakefront cabins. Your own front door, your own space.', who: 'Knapps · Leisslers · Santos · Tiffany' },
]

const activities = [
  {
    color: 'border-cyan-500',
    label: 'For Alex, Chris, Joe + Eli (13) + Theo (10)',
    title: 'Get Outside',
    items: [
      'Hike Sleeping Bear Dunes National Lakeshore',
      'Kayak or fish on private Herendeen Lake',
      'Bike the TART Trail to Suttons Bay (30mi RT)',
      'Crystal River canoe — calm enough for Charles (5)',
      'Empire Bluff Trail — Lake Michigan panorama',
      "Eli's pick: zip-line or ATV tour near Traverse City",
    ],
  },
  {
    color: 'border-yellow-400',
    label: 'For Charlyssa, Jamie, Nicole + whoever',
    title: 'Wine, Food & TC',
    items: [
      'Old Mission Peninsula winery trail — 50+ wineries',
      'Brys Estate, Chateau Chantal, Black Star Farms',
      'Farm Club — farm-to-table lunch, patio, perfection',
      'Front Street downtown TC — shops, galleries, dinner',
      'Village at Grand Traverse Commons',
      'Fishtown historic village in Leland',
    ],
  },
  {
    color: 'border-pink-400',
    label: 'For Laura (11), Lucy (9), Eli, Theo, Charles (5)',
    title: 'Kids Rule',
    items: [
      'Water trampoline + kayaks at the resort (free, all day)',
      'National Cherry Festival — first week of July',
      'King Orchards U-pick cherries, raspberries, peaches',
      'Little Fleet food truck mecca downtown TC',
      'Sleeping Bear Dunes — they WILL run down them',
      'Playground + beach for Charles',
    ],
  },
  {
    color: 'border-green-400',
    label: 'For Papa, Omi, Charlena, Tiffany + anyone',
    title: 'Do Nothing (Perfectly)',
    items: [
      'Lodge deck + lake view + a good book',
      "S'mores at the fire pit every single night",
      'Pierce Stocking Scenic Drive — no hiking required',
      'Petoskey stone hunting on Lake Michigan beaches',
      'Sunset over Herendeen Lake from your cabin porch',
      'Genuinely just nap. The lake will still be there.',
    ],
  },
]

const specs = [
  ['17', 'bedrooms'],
  ['56', 'max guests'],
  ['450ft', 'shoreline'],
  ['40ac', 'private lake'],
  ['15mi', 'traverse city'],
  ['15mi', 'dunes'],
]

export default function Michigan() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative starfield min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{background:'radial-gradient(ellipse at bottom, #1B4965 0%, transparent 70%)'}} />
        <div className="relative z-10">
          <div className="font-mono text-xs text-cyan-400 mb-3 tracking-widest animate-blink">● OPTION 1 OF 3 · LAND-BASED ●</div>
          <h1 className="wordart-blue text-6xl sm:text-8xl leading-none mb-3">Northern</h1>
          <h1 className="wordart text-6xl sm:text-8xl leading-none mb-6">Michigan</h1>
          <p className="font-mono text-cyan-300 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            A private lakefront resort in Lake Ann — fully rented for our family.<br/>
            17 people. One gorgeous property. Zero Florida humidity.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['July 2028', 'Lake Ann MI', 'Sleeping Bear Resort', 'Private buyout'].map(t => (
              <span key={t} className="font-mono text-xs px-3 py-1 border border-cyan-500/40 text-cyan-300 bg-cyan-950/40">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rainbow-hr" />

      {/* SPECS */}
      <section className="bg-black/60 py-8 border-b border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 sm:grid-cols-6 gap-1">
          {specs.map(([n, l]) => (
            <div key={l} className="text-center border border-cyan-900 bg-black/40 py-3 px-2">
              <div className="font-mono text-xl font-bold neon-cyan">{n}</div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="win95 max-w-2xl mx-auto">
          <div className="win95-title">
            <span>sleeping_bear_resort.exe — Why This Works</span>
            <div className="flex gap-0.5"><span className="win95-btn">_</span><span className="win95-btn">□</span><span className="win95-btn">✕</span></div>
          </div>
          <div className="p-4">
            <div className="win95-inset font-mono text-sm leading-7 text-black">
              <p>The cheapskates want value. The Leisslers want nice things. This option is the only one where BOTH are true.</p>
              <br/>
              <p>Splitting a private resort 17 ways = cheaper per person than individual motel rooms. The math literally works in everyone's favor — and you get a full lakefront property instead of a Days Inn.</p>
              <br/>
              <p>The resort has a log lodge, a farmhouse, and 6 private lakefront cabins — so every family unit has their own space while being 30 seconds from each other.</p>
              <br/>
              <p><strong>One required event:</strong> arrival night dinner around the fire pit.<br/>Everything else is opt-in. Do your own thing, reconvene when you want to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LODGING */}
      <section className="border-t border-cyan-900/40 bg-black/30 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">[ WHERE WE SLEEP ]</div>
            <h2 className="wordart-blue text-4xl">The Property</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {lodging.map(l => (
              <div key={l.name} className="neon-border-cyan bg-black/60 p-5">
                <div className="font-mono text-2xl font-bold neon-cyan mb-0.5">{l.beds}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{l.name}</h3>
                <p className="font-mono text-xs text-white/60 leading-relaxed mb-3">{l.desc}</p>
                <div className="border-t border-cyan-900/60 pt-2 font-mono text-xs text-cyan-400">{l.who}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-black/40 border border-cyan-900/40 p-4 font-mono text-xs text-cyan-300/70 text-center leading-6">
            All units include: kayaks · paddleboards · fishing boats · canoes · water trampoline · fire pits + free firewood · BBQ grills · playground · fully equipped kitchens · Wi-Fi
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ SOMETHING FOR EVERYONE ]</div>
          <h2 className="wordart-rainbow text-4xl">The Activities</h2>
          <p className="font-mono text-white/40 text-xs mt-2">Nothing mandatory. Everything available.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {activities.map(a => (
            <div key={a.title} className={`bg-black/50 border-l-4 ${a.color} p-5`}>
              <div className="font-mono text-xs text-white/40 mb-1 italic">{a.label}</div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{a.title}</h3>
              <ul className="space-y-1">
                {a.items.map(i => (
                  <li key={i} className="font-mono text-xs text-white/70 flex gap-2">
                    <span className="text-white/30 shrink-0">→</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-black/60 border-t border-white/10 py-14">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ THE NUMBERS ]</div>
            <h2 className="wordart text-4xl">What It Costs</h2>
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
                ['Resort — full property, 1 week (Saturday to Saturday)', '~$7,000–$10,000 total'],
                ['Groceries + group meals (breakfast/dinner in)', '~$800–$1,200 total'],
                ['Group activities (Cherry Festival is FREE)', '~$300–$600 total'],
                ['Travel to Michigan (each family covers own)', 'per family'],
                ['Per person, split 17 ways', '~$500–$700 / person'],
              ].map(([item, amt], i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 4 ? 'text-cyan-300 font-bold' : ''}`}>
                  <td className="py-2 pr-4 text-xs leading-relaxed">{item}</td>
                  <td className="py-2 text-right whitespace-nowrap text-xs">{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono text-xs text-white/30 mt-4 italic">* A motel room in a tourist area runs $150–200/night × 7 nights = $1,050–$1,400 for two people. The resort wins on cost AND experience. Nobody compromises.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-white/10">
        <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4">[ READY? ]</div>
        <h2 className="wordart-blue text-4xl mb-6">Cast Your Vote</h2>
        <Link href="/vote" className="retro-btn text-xl">🌊 VOTE MICHIGAN 🌊</Link>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/alaska" className="font-mono text-xs text-white/40 hover:text-white/70 underline">or check out Alaska →</Link>
          <Link href="/caribbean" className="font-mono text-xs text-white/40 hover:text-white/70 underline">or the Caribbean →</Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center">
        <div className="rainbow-hr mb-4" />
        <p className="font-mono text-xs text-white/20">Sleeping Bear Resort · Lake Ann, MI · (231) 642-7000 · Ask for Stephanie</p>
      </footer>
    </>
  )
}
