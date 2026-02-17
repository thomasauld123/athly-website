export interface WaitlistEntry {
  sport: string
  team: string
  athlete: string
  goal: string
  email: string
  createdAt: string
}

const STORAGE_KEY = 'athly_waitlist'

export function appendWaitlistEntry(entry: WaitlistEntry): void {
  const existing = getWaitlistEntries()
  existing.push(entry)
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  }
}

export function getWaitlistEntries(): WaitlistEntry[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
