'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import { supabase } from '@/lib/supabase'

type Vote = { id: number; name: string; destination: string; comment: string | null; created_at: string }

const DESTINATIONS = [
  { value: 'michigan',   label: '🌊 Northern Michigan',   sub: 'Sleeping Bear Resort · July 2028' },
  { value: 'alaska',     label: '🏔️ Alaska Cruise',        sub: 'Inside Passage · June 2028' },
  { value: 'caribbean',  label: '🌴 Caribbean Cruise',     sub: 'Eastern Caribbean · Jan–Mar 2028' },
]

const NAMES = [
  'Charles (Papa)', 'Ava (Omi)',
  'Chris (Knapp)', 'Charlena (Knapp)', 'Laura (Knapp)', 'Lucy (Knapp)',
  'Alex (Gulledge/Cook)', 'Angela (Gulledge/Cook)', 'Eli (Gulledge/Cook)', 'Theo (Gulledge/Cook)', 'Charles (Gulledge/Cook)',
  'Jamie (Leissler)', 'Charlyssa (Leissler)',
  'Joe (Santos)', 'Nicole (Santos)',
  'Tiffany (Lenhard)',
  'Other',
]

const COLOR_MAP: Record<string, string> = {
  michigan:  'text-cyan-300',
  alaska:    'text-yellow-300',
  caribbean: 'text-pink-300',
}

export default function Vote() {
  const [name, setName]       = useState('')
  const [dest, setDest]       = useState('')
  const [comment, setComment] = useState('')
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [votes, setVotes]     = useState<Vote[]>([])
  const [loadingVotes, setLoadingVotes] = useState(true)

  async function fetchVotes() {
    const { data } = await supabase
      .from('reunion_votes')
      .select('*')
      .order('created_at', { ascending: true })
    if (data) setVotes(data)
    setLoadingVotes(false)
  }

  useEffect(() => { fetchVotes() }, [])

  const tally = DESTINATIONS.map(d => ({
    ...d,
    count: votes.filter(v => v.destination === d.value).length,
  }))
  const maxVotes = Math.max(...tally.map(t => t.count), 1)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !dest) return
    setStatus('loading')
    const { error } = await supabase
      .from('reunion_votes')
      .insert([{ name, destination: dest, comment: comment || null }])
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      fetchVotes()
    }
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="starfield text-center px-4 py-16 border-b border-yellow-300/20">
        <div className="font-mono text-xs text-yellow-300 mb-3 tracking-widest animate-blink">● YOUR VOTE IS REQUIRED ●</div>
        <h1 className="wordart text-6xl sm:text-7xl leading-none mb-3">VOTE</h1>
        <h2 className="wordart-blue text-4xl sm:text-5xl leading-none mb-4">2028</h2>
        <p className="font-mono text-white/50 text-sm max-w-md mx-auto">
          Read the options. Pick your destination. Leave a note.<br/>
          All 17 of us need to weigh in before Charlyssa books anything.
        </p>
      </section>

      <div className="rainbow-hr" />

      <div className="max-w-4xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div>
          <div className="font-mono text-xs text-pink-400 tracking-widest mb-4">[ CAST YOUR VOTE ]</div>

          {status === 'success' ? (
            <div className="neon-border-cyan bg-black/60 p-8 text-center">
              <div className="text-5xl mb-4 animate-float">🎉</div>
              <h3 className="wordart-rainbow text-3xl mb-3">VOTE CAST!</h3>
              <p className="font-mono text-sm text-white/60 mb-6 leading-relaxed">
                Your vote has been recorded. Tell everyone else to get in here and vote too.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-mono text-xs text-cyan-400 underline hover:text-cyan-200">
                vote again (if you want)
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="font-mono text-xs text-white/50 tracking-widest block mb-2">WHO ARE YOU?</label>
                <select
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="retro-select">
                  <option value="">select your name...</option>
                  {NAMES.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div>
                <label className="font-mono text-xs text-white/50 tracking-widest block mb-2">WHERE DO YOU WANT TO GO?</label>
                <div className="space-y-2">
                  {DESTINATIONS.map(d => (
                    <label
                      key={d.value}
                      className={`flex items-start gap-3 p-3 cursor-pointer border transition-all
                        ${dest === d.value
                          ? 'border-pink-400 bg-pink-950/30 neon-border-pink'
                          : 'border-white/10 bg-black/30 hover:border-white/30'}`}>
                      <input
                        type="radio"
                        name="destination"
                        value={d.value}
                        checked={dest === d.value}
                        onChange={e => setDest(e.target.value)}
                        className="mt-0.5 accent-pink-500"
                      />
                      <div>
                        <div className="font-display font-bold text-white text-sm">{d.label}</div>
                        <div className="font-mono text-xs text-white/40">{d.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-white/50 tracking-widest block mb-2">
                  ANYTHING TO SAY? <span className="text-white/25">(optional)</span>
                </label>
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Reasons, concerns, demands, bribes..."
                  className="retro-textarea"
                  rows={3}
                />
              </div>

              {status === 'error' && (
                <p className="font-mono text-xs text-red-400 neon-border-pink bg-black/40 p-3">
                  ⚠️ Something went wrong. Try again or yell at Charlyssa.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !name || !dest}
                className="retro-btn w-full text-lg disabled:opacity-40 disabled:cursor-not-allowed">
                {status === 'loading' ? '⏳ submitting...' : '🗳️ SUBMIT VOTE'}
              </button>
            </form>
          )}
        </div>

        {/* LIVE RESULTS */}
        <div>
          <div className="font-mono text-xs text-green-400 tracking-widest mb-4">
            [ LIVE RESULTS — {votes.length} vote{votes.length !== 1 ? 's' : ''} so far ]
          </div>

          {/* Tally bars */}
          <div className="space-y-4 mb-8">
            {tally.map(t => (
              <div key={t.value}>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className={COLOR_MAP[t.value]}>{t.label}</span>
                  <span className="text-white/50">{t.count} vote{t.count !== 1 ? 's' : ''}</span>
                </div>
                <div className="h-4 bg-black/50 border border-white/10 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-700 ${
                      t.value === 'michigan'  ? 'bg-cyan-500' :
                      t.value === 'alaska'    ? 'bg-yellow-400' :
                                                'bg-pink-500'}`}
                    style={{ width: `${(t.count / maxVotes) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Individual votes */}
          <div className="font-mono text-xs text-white/30 tracking-widest mb-3">[ WHO VOTED ]</div>
          {loadingVotes ? (
            <p className="font-mono text-xs text-white/30 animate-blink">loading votes...</p>
          ) : votes.length === 0 ? (
            <div className="win95 max-w-xs">
              <div className="win95-title"><span>votes.txt</span></div>
              <div className="p-3 win95-inset font-mono text-xs text-gray-600">No votes yet. Be the first!</div>
            </div>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {votes.map(v => (
                <div key={v.id} className="border border-white/8 bg-black/40 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-white">{v.name}</span>
                    <span className={`font-mono text-xs ${COLOR_MAP[v.destination]}`}>
                      {DESTINATIONS.find(d => d.value === v.destination)?.label.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  {v.comment && (
                    <p className="font-mono text-xs text-white/40 italic leading-relaxed">"{v.comment}"</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center">
        <div className="rainbow-hr mb-6" />
        <p className="font-mono text-xs text-white/20 mb-2">Votes stored securely · Results visible to everyone · Charlyssa makes the final call</p>
        <p className="font-mono text-xs text-white/15">Built with ✦ for the 2028 reunion · Leissler Family</p>
      </footer>
    </>
  )
}
