'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',            label: '🏠 Home' },
  { href: '/michigan',    label: '🌊 Michigan' },
  { href: '/roughcreek',  label: '🤠 Texas' },
  { href: '/alaska',      label: '🏔️ Alaska' },
  { href: '/caribbean',   label: '🌴 Caribbean' },
  { href: '/vote',        label: '🗳️ Vote!' },
]

export default function Nav() {
  const path = usePathname()
  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-yellow-300"
         style={{ boxShadow: '0 2px 12px rgba(255,255,0,0.3)' }}>
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-2 h-12 overflow-x-auto">
        <span className="text-yellow-300 font-mono text-xs font-bold whitespace-nowrap shrink-0 hidden sm:block">
          ★ REUNION 2028 ★
        </span>
        <div className="flex gap-1 mx-auto sm:mx-0">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-2 py-1 text-xs font-mono whitespace-nowrap transition-all
                ${path === l.href
                  ? 'bg-yellow-300 text-black font-bold'
                  : 'text-yellow-300 hover:bg-yellow-300 hover:text-black border border-yellow-300/40 hover:border-yellow-300'
                }`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
