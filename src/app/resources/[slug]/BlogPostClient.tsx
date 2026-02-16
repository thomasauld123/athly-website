'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section } from '@/components/layout'
import { Badge } from '@/components/ui'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { mdxComponents } from '@/components/content/MDXComponents'
import type { BlogPost } from '@/lib/blog'
import { useMemo } from 'react'

interface BlogPostClientProps {
  post: BlogPost
}

function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('### ')) {
      const H3 = mdxComponents.h3
      elements.push(<H3 key={i}>{line.slice(4)}</H3>)
    } else if (line.startsWith('## ')) {
      const H2 = mdxComponents.h2
      elements.push(<H2 key={i}>{line.slice(3)}</H2>)
    } else if (line.startsWith('# ')) {
      const H1 = mdxComponents.h1
      elements.push(<H1 key={i}>{line.slice(2)}</H1>)
    } else if (line.startsWith('> ')) {
      const Bq = mdxComponents.blockquote
      elements.push(<Bq key={i}><p>{line.slice(2)}</p></Bq>)
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      const Ul = mdxComponents.ul
      const Li = mdxComponents.li
      elements.push(
        <Ul key={i}>
          {listItems.map((item, j) => (
            <Li key={j}>{renderInline(item)}</Li>
          ))}
        </Ul>
      )
      continue
    } else if (line.startsWith('---')) {
      const Hr = mdxComponents.hr
      elements.push(<Hr key={i} />)
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      const P = mdxComponents.p
      elements.push(<P key={i}>{renderInline(line)}</P>)
    }
    i++
  }

  return elements
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  const regex = /\*\*(.+?)\*\*|`(.+?)`/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1]) {
      const Strong = mdxComponents.strong
      parts.push(<Strong key={match.index}>{match[1]}</Strong>)
    } else if (match[2]) {
      const Code = mdxComponents.code
      parts.push(<Code key={match.index}>{match[2]}</Code>)
    }
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length === 1 ? parts[0] : parts
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const renderedContent = useMemo(() => renderMarkdown(post.content), [post.content])

  return (
    <>
      <Section padding="none" className="pt-24 pb-8 md:pt-32 md:pb-12" size="narrow">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={fadeUp}>
            <Link
              href="/resources"
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
            >
              &larr; Back to Resources
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
            <span>
              {new Date(post.date).toLocaleDateString('en-AU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </motion.div>
        </motion.div>
      </Section>

      <Section padding="tight" size="narrow" className="pb-16 md:pb-24">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-none"
        >
          {renderedContent}
        </motion.article>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 border-t border-[var(--color-border)] pt-8"
        >
          <Link
            href="/resources"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            &larr; Back to all posts
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
