import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime: string
  content: string
}

const contentDir = path.join(process.cwd(), 'content', 'resources')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return []

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(contentDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      summary: data.summary || '',
      tags: data.tags || [],
      readingTime: stats.text,
      content,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    summary: data.summary || '',
    tags: data.tags || [],
    readingTime: stats.text,
    content,
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}
