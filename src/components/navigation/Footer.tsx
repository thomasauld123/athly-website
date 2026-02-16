import Link from 'next/link'
import { Container } from '@/components/layout'

const footerLinks = {
  Product: [
    { label: 'For Investors', href: '/for-investors' },
    { label: 'For Managers', href: '/for-managers' },
    { label: 'For Athletes', href: '/for-athletes' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Resources', href: '/resources' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-tight"
            >
              Athly
            </Link>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-muted)]">
              AI-powered platforms that let athletes convert authority into compounding revenue.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                {category}
              </p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] py-8 text-xs text-[var(--color-muted)] md:flex-row">
          <p>&copy; {new Date().getFullYear()} Athly. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-[var(--color-foreground)]">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[var(--color-foreground)]">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
