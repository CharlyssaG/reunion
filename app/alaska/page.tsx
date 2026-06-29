import Link from 'next/link'
import Nav from '@/components/Nav'

const ports = [
  { day: 'Day 1', name: 'Vancouver', note: 'Board the ship. Sail under Lions Gate Bridge.', sea: false },
  { day: 'Day 2', name: 'Inside Passage', note: 'Calm scenic cruising. Whales from deck.', sea: true },
  { day: 'Day 3', name: 'Ketchikan', note: 'Totem poles · zip-line · kayaking · salmon.', sea: false },
  { day: 'Day 4', name: 'Juneau', note: 'Mendenhall Glacier · whale watching · crab.', sea: false },
  { day: 'Day 5', name: 'Skagway', note: 'Gold Rush history · White Pass railway.', sea: false },
  { day: 'Day 6', name: 'Glacier Bay', note: 'National Park. Watch glaciers calve. 🧊', sea: true },
  { day: 'Day 7', name: 'Victoria', note: 'Evening port · gardens · high tea.', sea: false },
]

const flights = [
  { fam: 'Senior Gulledges', from: 'Jupiter, FL', route: 'PBI/MIA → YVR', note: 'One connection. Plan a Vancouver overnight — beautiful city to arrive early.' },
  { fam: 'Knapps', from: 'New Hampshire', route: 'BOS → YVR (~6 hrs)', note: 'Direct on Air Canada. Arrive the day before with the kids — strongest recommendation.' },
  { fam: 'Gulledge / Cook', from: 'Colorado', route: 'DEN → YVR (~3 hrs)', note: 'Easiest connection. Could coordinate with Santos on the same flight.' },
  { fam: 'Leisslers', from: 'Sarasota/Bradenton', route: 'SRQ/TPA → YVR via SEA', note: 'One connection. Jamie and Charlyssa: overnight in Vancouver highly recommended.' },
  { fam: 'Santos', from: 'Colorado', route: 'DEN → YVR (~3 hrs)', note: 'Same easy route as Gulledge/Cook. Joe and Nicole could share a flight with them.' },
  { fam: 'Lenhard', from: 'TBD', route: 'TBD → YVR', note: 'Vancouver is well-connected from most US cities — one connection or less.' },
]

const excursions = [
  {
    color: 'border-yellow-400', label: 'Alex · Chris · Joe + Eli (13) · Theo (10)',
    title: 'Go Get It',
    items: ['Hike Mendenhall Glacier with crampons (Juneau)', "World's longest zip-line at Icy Strait Point", 'Kayaking through Ketchikan rainforest waterways', 'White Pass & Yukon Route scenic railway (Skagway)', 'ATV backcountry tour', 'Bear-watching floatplane over Southeast Alaska'],
  },
  {
    color: 'border-cyan-400', label: 'Charlena · Angela · Tiffany + anyone curious',
    title: 'Culture & History',
    items: ['Totem pole parks + Tlingit cultural tours (Ketchikan)', 'Gold Rush history walk, Skagway', "Victoria: Butchart Gardens evening tour", 'Alaska Native heritage performance', 'Salmon hatchery tour with local guide', 'Juneau food tour: Dungeness crab + king salmon'],
  },
  {
    color: 'border-pink-400', label: 'Papa · Omi · Jamie · Charlyssa · Nicole',
    title: 'Scenic & Slow',
    items: ['Whale watching boat tour — every port, all great', 'Glacier Bay: watch glaciers calve into the sea', 'Juneau crab and seafood feast (guided sit-down)', 'High tea at the Empress Hotel, Victoria', 'Spa day on the ship while everyone goes ashore', 'Skagway waterfront stroll — 6 blocks, maximum charm'],
  },
  {
    color: 'border-green-400', label: 'Laura (11) · Lucy (9) · Eli (13) · Theo (10) · Charles (5)',
    title: "The Kids' List",
    items: ["Zip-line at Icy Strait — they'll never stop talking about it", 'Glacier hiking with crampons (Eli + Theo)', 'Kayak + wildlife tour: seals, otters, bald eagles', 'Teen club, pool deck, climbing wall on the ship', 'ATV tour through Alaska backcountry', 'Whale watching — humpbacks breaching is unhinged'],
  },
]

export default function Alaska() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative starfield min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{background:'radial-gradient(ellipse at bottom, #1A3A4A 0%, transparent 70%)'}} />
        <div className="relative z-10">
          <div className="font-mono text-xs text-yellow-400 mb-3 tracking-widest animate-blink">● OPTION 2 OF 3 · ALASKA CRUISE ●</div>
          <h1 className="wordart text-6xl sm:text-8xl leading-none mb-3">Alaska</h1>
          <h1 className="wordart-blue text-5xl sm:text-7xl leading-none mb-6">by Sea</h1>
          <p className="font-mono text-yellow-300 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            7-night Inside Passage cruise from Vancouver.<br/>
            Glaciers, humpbacks, zip-lines, and some of the<br/>
            calmest water of any cruise route on earth.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['June 2028', 'Vancouver → Inside Passage', '17 people', 'Each family books own cabin'].map(t => (
              <span key={t} className="font-mono text-xs px-3 py-1 border border-yellow-500/40 text-yellow-300 bg-yellow-950/40">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rainbow-hr" />

      {/* MOTION SICKNESS — important enough to be near the top */}
      <section className="bg-black/70 border-b border-yellow-400/30 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="win95">
            <div className="win95-title">
              <span>⚠️ important_for_charlyssa.txt</span>
              <div className="flex gap-0.5"><span className="win95-btn">_</span><span className="win95-btn">□</span><span className="win95-btn">✕</span></div>
            </div>
            <div className="p-4">
              <div className="win95-inset">
                <p className="font-mono text-sm font-bold text-black mb-2">Motion sickness: this is actually the right cruise.</p>
                <p className="font-mono text-xs text-gray-700 leading-6 mb-3">
                  Alaska's Inside Passage is one of the calmest cruise routes in the world — ships travel through channels sheltered by land on both sides. Holland America literally markets it as "smooth-as-glass sailing." One frequent cruiser called it "dead calm."
                </p>
                <p className="font-mono text-xs font-bold text-black mb-1">The critical rule: VANCOUVER not Seattle.</p>
                <p className="font-mono text-xs text-gray-700 leading-6 mb-3">
                  Seattle sailings spend 2 full days crossing open Pacific before entering the Inside Passage. Vancouver sailings enter calm water immediately. This is non-negotiable if you get motion sick.
                </p>
                <div className="grid grid-cols-2 gap-1 mt-2">
                  {['Midship + lower deck cabin', 'Balcony cabin = horizon view = no nausea', 'Scopolamine patch (ask your doctor)', 'Sea-Bands on wrists (cheap + effective)', 'Free motion sickness tabs at guest services', 'Green apples + ginger ale (ship crew tip)', 'Never book an interior cabin', 'Skip alcohol the first night'].map(t => (
                    <div key={t} className="font-mono text-xs text-gray-600 flex gap-1"><span className="text-green-600">✓</span>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMING */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ WHEN TO GO ]</div>
          <h2 className="wordart text-4xl">June 2028</h2>
          <p className="font-mono text-white/40 text-xs mt-2">Not peak season. Not cold. The sweet spot.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { month: 'May', meta: 'Shoulder · Low prices', text: 'Driest month (25% rain). Snow-capped mountains. Mid-50s°F. Fewer crowds. Some excursions not fully running.', rec: false },
            { month: 'June', meta: 'Sweet spot for our group', text: '60–65°F. Up to 20 hours of daylight. Orcas, puffins, humpbacks all active. Below peak prices. Kids out of school.', rec: true },
            { month: 'July', meta: 'Peak · Highest prices', text: 'Warmest temps. Peak wildlife. But: more rain, busiest ports, most expensive. Book very early if this is the pick.', rec: false },
          ].map(t => (
            <div key={t.month} className={`p-5 ${t.rec ? 'neon-border-yellow bg-yellow-950/20' : 'border border-white/10 bg-black/30'}`}>
              {t.rec && <div className="font-mono text-xs text-yellow-400 mb-2 animate-blink">★ RECOMMENDED ★</div>}
              <h3 className="font-display font-bold text-white text-2xl mb-1">{t.month}</h3>
              <div className="font-mono text-xs text-white/40 mb-3">{t.meta}</div>
              <p className="font-mono text-xs text-white/60 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ITINERARY */}
      <section className="bg-black/50 border-t border-b border-yellow-900/40 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ 7 NIGHTS ]</div>
            <h2 className="wordart-blue text-4xl">The Route</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ports.map(p => (
              <div key={p.day} className={`text-center p-3 border ${p.sea ? 'border-cyan-900/60 bg-cyan-950/20' : 'border-yellow-900/40 bg-black/40'}`}>
                <div className="font-mono text-xs text-yellow-400/60 mb-1">{p.day}</div>
                <div className="font-display font-bold text-white text-sm leading-tight mb-1">{p.name}</div>
                <div className="font-mono text-xs text-white/40 leading-relaxed">{p.note}</div>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-white/30 text-center mt-4">Days 2 + 6 are Inside Passage scenic cruising — protected water both days. ✓ Motion sickness safe.</p>
        </div>
      </section>

      {/* FLIGHTS */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">[ GETTING THERE ]</div>
          <h2 className="wordart-blue text-4xl">Four Cities. One Ship.</h2>
          <p className="font-mono text-white/40 text-xs mt-2">Everyone flies to Vancouver independently. No coordination needed.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {flights.map(f => (
            <div key={f.fam} className="neon-border-cyan bg-black/60 p-4">
              <div className="font-display font-bold text-white text-sm mb-0.5">{f.fam}</div>
              <div className="font-mono text-xs text-cyan-400 mb-1">{f.from}</div>
              <div className="font-mono text-xs text-yellow-300 mb-2">{f.route}</div>
              <p className="font-mono text-xs text-white/50 leading-relaxed">{f.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 neon-border-yellow bg-black/60 p-4 font-mono text-xs text-yellow-300/80 text-center leading-6">
          ⚠️ All 17 people need passports for Vancouver. Plan accordingly. Recommend arriving the night before — Vancouver is an incredible city.
        </div>
      </section>

      {/* EXCURSIONS */}
      <section className="bg-black/50 border-t border-white/10 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ SHORE EXCURSIONS ]</div>
            <h2 className="wordart-rainbow text-4xl">Everyone Gets Their Thing</h2>
            <p className="font-mono text-white/40 text-xs mt-2">Each family books independently. The ship keeps the schedule.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {excursions.map(e => (
              <div key={e.title} className={`bg-black/50 border-l-4 ${e.color} p-5`}>
                <div className="font-mono text-xs text-white/35 mb-1 italic">{e.label}</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{e.title}</h3>
                <ul className="space-y-1">
                  {e.items.map(i => (
                    <li key={i} className="font-mono text-xs text-white/65 flex gap-2">
                      <span className="text-white/25 shrink-0">→</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-black/60 border-t border-white/10 py-14">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-yellow-400 tracking-widest mb-2">[ THE NUMBERS ]</div>
            <h2 className="wordart text-4xl">What It Costs</h2>
            <p className="font-mono text-white/40 text-xs mt-2">Each family pays their own way. No shared pot.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { type: 'Interior cabin', price: '$900–$1,400 /pp', note: 'No window. Not for Charlyssa.', rec: false },
              { type: 'Ocean view cabin', price: '$1,100–$1,800 /pp', note: 'Window, no balcony. Midship = good.', rec: false },
              { type: 'Balcony cabin', price: '$1,400–$2,400 /pp', note: 'Horizon view. Best for motion sickness.', rec: true },
            ].map(c => (
              <div key={c.type} className={`p-4 ${c.rec ? 'neon-border-yellow bg-yellow-950/20' : 'border border-white/10 bg-black/30'}`}>
                {c.rec && <div className="font-mono text-xs text-yellow-400 mb-1">★ RECOMMENDED</div>}
                <div className="font-mono text-sm font-bold text-white mb-1">{c.type}</div>
                <div className="neon-yellow font-mono text-lg font-bold mb-1">{c.price}</div>
                <p className="font-mono text-xs text-white/40">{c.note}</p>
              </div>
            ))}
          </div>
          <table className="w-full font-mono text-xs">
            <tbody className="text-white/60">
              {[
                ['Flights to Vancouver (round-trip)', '$350–$800 /pp'],
                ['Shore excursions (optional, 1–2 per port)', '$200–$600 /pp'],
                ['Gratuities (~$18–20/day)', '$126–$140 /pp'],
                ['Drink package (optional)', '$70–$110 /day'],
                ['TOTAL (balcony + flights + 2 excursions)', '~$2,200–$4,100 /pp'],
              ].map(([item, amt], i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 4 ? 'text-yellow-300 font-bold' : ''}`}>
                  <td className="py-2 pr-4 leading-relaxed">{item}</td>
                  <td className="py-2 text-right whitespace-nowrap">{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono text-xs text-white/25 mt-4 italic">* All meals in main dining rooms are included in the cruise fare. Specialty restaurants, drinks, and shore excursions are extra.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-white/10">
        <h2 className="wordart text-4xl mb-6">Cast Your Vote</h2>
        <Link href="/vote" className="retro-btn text-xl">🏔️ VOTE ALASKA 🏔️</Link>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/michigan" className="font-mono text-xs text-white/40 hover:text-white/70 underline">← Michigan</Link>
          <Link href="/caribbean" className="font-mono text-xs text-white/40 hover:text-white/70 underline">Caribbean →</Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center">
        <div className="rainbow-hr mb-4" />
        <p className="font-mono text-xs text-white/20">Alaska cruise lines from Vancouver: Holland America · Princess · Celebrity · Norwegian · Royal Caribbean</p>
      </footer>
    </>
  )
}
