import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="relative py-12">
      <Container>
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[color:var(--text-dim)]">
            &copy; {new Date().getFullYear()} Athly. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@athly.com" className="text-xs text-[color:var(--text-dim)] hover:text-white/60 transition-colors">
              hello@athly.com
            </a>
            <span className="text-xs text-[color:var(--text-dim)] hover:text-white/60 transition-colors cursor-default">
              Privacy
            </span>
            <span className="text-xs text-[color:var(--text-dim)] hover:text-white/60 transition-colors cursor-default">
              Terms
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
