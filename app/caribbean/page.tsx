import Link from 'next/link'
import Nav from '@/components/Nav'

const ports = [
  { day: 'Day 1', name: 'Miami', note: 'Board. Pool deck open. Sailaway party at sunset.', sea: false },
  { day: 'Day 2', name: 'Sea Day', note: 'Open ocean. Ship activities, shows, pools. Take meds night before.', sea: true },
  { day: 'Day 3', name: 'San Juan PR', note: 'Old City, El Morro fort, incredible food.', sea: false },
  { day: 'Day 4', name: 'St. Thomas', note: "Magens Bay beach. Sea turtles. Duty-free shopping.", sea: false },
  { day: 'Day 5', name: 'St. Maarten', note: 'Two countries, one island. Beach clubs, rum.', sea: false },
  { day: 'Day 6', name: 'Sea Day', note: 'Heading home. Spa day. Specialty dining. Shows.', sea: true },
  { day: 'Day 7', name: 'Miami', note: 'Disembark. Drive home or fly out.', sea: false },
]

const logistics = [
  { fam: 'Senior Gulledges', from: 'Jupiter, FL', how: 'Drive', detail: '~1.5 hrs to Miami port. Zero flights. The easiest travel day of all three options for Papa and Omi.' },
  { fam: 'Knapps', from: 'New Hampshire', how: 'Fly', detail: 'BOS → MIA: ~3.5 hrs direct. Shortest flight of any destination option. Fly in the night before.' },
  { fam: 'Gulledge / Cook', from: 'Colorado', how: 'Fly', detail: 'DEN → MIA: ~4 hrs direct. Multiple daily flights. Could coordinate with Santos on same flight.' },
  { fam: 'Leisslers', from: 'Sarasota/Bradenton', how: 'Drive', detail: 'SRQ → Port Canaveral (~2.5 hrs) or Miami (~3.5 hrs). Jamie and Charlyssa: no flights at all.' },
  { fam: 'Santos', from: 'Colorado', how: 'Fly', detail: 'DEN → MIA, ~4 hrs. Same route as Gulledge/Cook. Joe + Nicole could literally be on the same flight as Alex + Angela.' },
  { fam: 'Lenhard', from: 'TBD', how: 'TBD', detail: 'Miami is one of the best-connected airports in the US — direct flights from virtually everywhere.' },
]

const excursions = [
  {
    color: 'border-yellow-400', label: 'Papa · Omi · Charlena · Nicole · Tiffany',
    title: 'Beach & Chill',
    items: ['Magens Bay, St. Thomas — top 10 beaches in the world', 'Orient Beach, St. Maarten — European beach club vibes', 'Rum tasting tour (St. Thomas or St. Maarten)', 'Catamaran sail to a snorkel spot — very low effort, high reward', 'Old San Juan food tour — walking, easy, delicious', 'Beach cabana rental + unlimited drinks — stay put and be happy'],
  },
  {
    color: 'border-cyan-400', label: 'Alex · Chris · Joe + Eli (13) · Theo (10)',
    title: 'Get In the Water',
    items: ['Snorkel Buck Island, St. Thomas — underwater trail with sea turtles', 'Kayak + mangrove tour, St. Maarten', 'Deep sea fishing charter out of St. Thomas', 'Zip-line tour, St. Thomas (yes, really)', 'Wakeboarding + watersports, Maho Beach St. Maarten', 'El Yunque rainforest hike, Puerto Rico'],
  },
  {
    color: 'border-pink-400', label: 'Angela · Charlena · Jamie · Charlyssa',
    title: 'Culture & Food',
    items: ['Old San Juan walking tour — 500-year-old city, pastel streets', 'El Morro and San Cristóbal forts, Puerto Rico', 'Philipsburg market + duty-free Front Street, St. Maarten', 'Local food tour: mofongo in San Juan, fresh fish in St. Maarten', 'Charlotte Amalie town tour + local craft market, St. Thomas', 'Sunset sail + open bar — St. Thomas does these exceptionally well'],
  },
  {
    color: 'border-green-400', label: 'Laura (11) · Lucy (9) · Eli (13) · Theo (10) · Charles (5)',
    title: "The Kids' List",
    items: ['Magens Bay — Charles can just dig in the sand all day', 'Snorkel with sea turtles, St. Thomas (Eli + Theo will lose it)', 'Ship water park + kids club on sea days', 'Watersports at Orient Beach (jet skis to paddleboats)', 'El Yunque rainforest waterfall hike — accessible + magical', 'Private beach with calm shallow water for the little ones'],
  },
]

export default function Caribbean() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative starfield min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{background:'radial-gradient(ellipse at bottom, #0B4F6C 0%, transparent 70%)'}} />
        <div className="relative z-10">
          <div className="font-mono text-xs text-pink-400 mb-3 tracking-widest animate-blink">● OPTION 3 OF 3 · CARIBBEAN CRUISE ●</div>
          <h1 className="wordart text-6xl sm:text-8xl leading-none mb-3">Caribbean</h1>
          <h1 className="wordart-blue text-5xl sm:text-7xl leading-none mb-6">by Sea</h1>
          <p className="font-mono text-pink-300 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            7-night Eastern Caribbean from Miami.<br/>
            St. Thomas, St. Maarten, San Juan.<br/>
            Florida families drive to the port.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Jan–March 2028', 'Departs Miami', '17 people', 'Warmest option'].map(t => (
              <span key={t} className="font-mono text-xs px-3 py-1 border border-pink-500/40 text-pink-300 bg-pink-950/40">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rainbow-hr" />

      {/* THE HONEST TAKE */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ THE HONEST TAKE ]</div>
          <h2 className="wordart text-4xl">Most Accessible.<br/>Most Familiar.</h2>
          <p className="font-mono text-white/40 text-xs mt-2">That's both good and worth knowing.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-black/50 border-l-4 border-green-500 p-5">
            <h3 className="font-display font-bold text-green-400 text-lg mb-3">✓ What works for this group</h3>
            <ul className="space-y-1.5 font-mono text-xs text-white/65 leading-relaxed">
              {['Florida families drive to the port — zero flights', 'Warmest weather — real escape from CO/NH winters', 'Shortest flights from NH and CO of any option', 'Most affordable cruise option overall', 'Kids of all ages are extremely well catered to', 'No passport required on closed-loop US sailings', 'Most cruise line choice at every price point', 'Cozumel, St. Thomas, Belize: genuinely great excursions'].map(t => (
                <li key={t} className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 border-l-4 border-red-500 p-5">
            <h3 className="font-display font-bold text-red-400 text-lg mb-3">✗ Know this going in</h3>
            <ul className="space-y-1.5 font-mono text-xs text-white/65 leading-relaxed">
              {['Day 2 open ocean = rougher than Alaska Inside Passage', 'Hurricane season Jun–Oct — only viable Nov–April', 'Major ports feel touristy + crowded vs Alaska', 'Less "wow" factor for the outdoor/adventure crew', 'Winter peak season = higher prices than Alaska shoulder', 'For Charlyssa: more open ocean motion than Alaska route', 'Caribbean is something you can do any time — Alaska feels special', 'Private island stops vary widely by cruise line'].map(t => (
                <li key={t} className="flex gap-2"><span className="text-red-500 shrink-0">✗</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TIMING */}
      <section className="bg-black/50 border-t border-b border-pink-900/40 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ WHEN TO GO ]</div>
            <h2 className="wordart-blue text-4xl">January–March 2028</h2>
            <p className="font-mono text-white/40 text-xs mt-2">Opposite calendar from Alaska. Winter/spring only.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { window: 'Nov–Dec', meta: 'Shoulder → holiday', text: 'Hurricane season ends November. Great early-Nov deals. December gets expensive fast around Christmas and New Year.', rec: false },
              { window: 'Jan–March', meta: 'Best window for us', text: '78–85°F. Sunny and dry. CO and NH families escape real winter. Moderate prices outside holiday windows. Caribbean prime time.', rec: true },
              { window: 'April–May', meta: 'Late season · Some deals', text: "Still beautiful. Post-spring-break prices drop. Avoid anything June–October — hurricane season starts June 1 and it's not a joke.", rec: false },
            ].map(t => (
              <div key={t.window} className={`p-5 ${t.rec ? 'neon-border-pink bg-pink-950/20' : 'border border-white/10 bg-black/30'}`}>
                {t.rec && <div className="font-mono text-xs text-pink-400 mb-2 animate-blink">★ RECOMMENDED ★</div>}
                <h3 className="font-display font-bold text-white text-2xl mb-1">{t.window}</h3>
                <div className="font-mono text-xs text-white/40 mb-3">{t.meta}</div>
                <p className="font-mono text-xs text-white/60 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-white/30 text-center mt-4">Note: Jan–March means a different travel window than Michigan (July) or Alaska (June). This could work as a standalone first gathering before a bigger summer reunion.</p>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ 7 NIGHTS — EASTERN CARIBBEAN ]</div>
          <h2 className="wordart-blue text-4xl">The Route</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {ports.map(p => (
            <div key={p.day} className={`text-center p-3 border ${p.sea ? 'border-pink-900/60 bg-pink-950/10' : 'border-pink-900/30 bg-black/40'}`}>
              <div className="font-mono text-xs text-pink-400/60 mb-1">{p.day}</div>
              <div className="font-display font-bold text-white text-sm leading-tight mb-1">{p.name}</div>
              <div className="font-mono text-xs text-white/40 leading-relaxed">{p.note}</div>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-white/30 text-center mt-4">Day 2 is open ocean — take scopolamine patch night before boarding. Days 3–5 are sheltered island waters.</p>
      </section>

      {/* LOGISTICS */}
      <section className="bg-black/50 border-t border-b border-pink-900/40 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ GETTING THERE ]</div>
            <h2 className="wordart text-4xl">For Some Families,<br/>This Is a Drive.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {logistics.map(f => (
              <div key={f.fam} className="neon-border-pink bg-black/60 p-4">
                <div className="font-display font-bold text-white text-sm mb-0.5">{f.fam}</div>
                <div className="font-mono text-xs text-pink-400 mb-1">{f.from}</div>
                <div className="font-mono text-xs text-yellow-300 font-bold mb-2">{f.how}</div>
                <p className="font-mono text-xs text-white/50 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-black/40 border border-pink-900/40 p-4 font-mono text-xs text-pink-300/70 text-center leading-6">
            Closed-loop sailings (departs + returns same US port) don't require passports for US citizens — birth cert + gov ID works.<br/>
            Passports still recommended in case of medical emergency. Check individual port requirements.
          </div>
        </div>
      </section>

      {/* EXCURSIONS */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ SHORE EXCURSIONS ]</div>
          <h2 className="wordart-rainbow text-4xl">Three Ports.<br/>Every Type of Person.</h2>
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
      </section>

      {/* BUDGET */}
      <section className="bg-black/60 border-t border-white/10 py-14">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-pink-400 tracking-widest mb-2">[ THE NUMBERS ]</div>
            <h2 className="wordart text-4xl">The Most Affordable Cruise</h2>
          </div>
          <table className="w-full font-mono text-xs">
            <tbody className="text-white/60">
              {[
                ['Interior cabin (7 nights)', '$700–$1,100 /pp', false],
                ['Ocean view cabin', '$900–$1,500 /pp', false],
                ['Balcony cabin (recommended)', '$1,100–$2,000 /pp', true],
                ['Flights — CO + NH families', '$250–$500 /pp', false],
                ['FL families: drive to port', '$50–$150 total', false],
                ['Shore excursions (3 port days)', '$150–$450 /pp', false],
                ['Gratuities + extras', '$130–$250 /pp', false],
                ['TOTAL (balcony + transport + excursions)', '~$1,700–$3,200 /pp', true],
              ].map(([item, amt, bold], i) => (
                <tr key={i} className={`border-b border-white/5 ${bold ? 'text-pink-300 font-bold' : ''}`}>
                  <td className="py-2 pr-4 leading-relaxed">{item}</td>
                  <td className="py-2 text-right whitespace-nowrap">{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono text-xs text-white/25 mt-4 italic">* Meals in main dining rooms + buffet included. Specialty restaurants, drinks, excursions extra. Kids often sail free or at steep discount — check with cruise line.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-white/10">
        <div className="font-mono text-xs text-pink-400 tracking-widest mb-4">[ READY? ]</div>
        <h2 className="wordart text-4xl mb-6">Cast Your Vote</h2>
        <Link href="/vote" className="retro-btn text-xl">🌴 VOTE CARIBBEAN 🌴</Link>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/michigan" className="font-mono text-xs text-white/40 hover:text-white/70 underline">← Michigan</Link>
          <Link href="/alaska" className="font-mono text-xs text-white/40 hover:text-white/70 underline">← Alaska</Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center">
        <div className="rainbow-hr mb-4" />
        <p className="font-mono text-xs text-white/20">Eastern Caribbean from Miami: Royal Caribbean · Norwegian · Celebrity · Carnival · Princess</p>
      </footer>
    </>
  )
}
