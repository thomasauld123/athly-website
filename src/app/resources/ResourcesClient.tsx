'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section } from '@/components/layout'
import { Badge, Card, SectionHeader } from '@/components/ui'
import { fadeUp, staggerContainer } from '@/lib/motion'
import type { BlogPost } from '@/lib/blog'

interface ResourcesClientProps {
  posts: BlogPost[]
  tags: string[]
}

export function ResourcesClient({ posts, tags }: ResourcesClientProps) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search === '' ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase())
      const matchesTag = !activeTag || post.tags.includes(activeTag)
      return matchesSearch && matchesTag
    })
  }, [posts, search, activeTag])

  return (
    <>
      <Section padding="none" className="pt-24 pb-8 md:pt-32 md:pb-12">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">Resources</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            Thinking in public.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-[var(--color-muted)]">
            Strategy, product, and market analysis. Written by operators, not marketers.
          </motion.p>
        </motion.div>
      </Section>

      <Section padding="tight">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                !activeTag
                  ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                  : 'bg-[var(--color-surface-raised)] text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                    : 'bg-[var(--color-surface-raised)] text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="6" cy="6" r="4.5" />
              <path d="M9.5 9.5L13 13" />
            </svg>
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-9 pr-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)] placeholder:text-[var(--color-muted-foreground)] md:w-64"
            />
          </div>
        </motion.div>
      </Section>

      <Section padding="tight" className="pb-16 md:pb-24">
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-[var(--color-muted)]"
          >
            <p>No posts match your search.</p>
          </motion.div>
        ) : (
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Card key={post.slug} href={`/resources/${post.slug}`}>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-[var(--color-muted)]">{post.summary}</p>
                <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                  <span>{new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
              </Card>
            ))}
          </motion.div>
        )}
      </Section>
    </>
  )
}
