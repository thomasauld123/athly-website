import { getAllPosts, getAllTags } from '@/lib/blog'
import { ResourcesClient } from './ResourcesClient'

export const metadata = {
  title: 'Resources',
  description: 'Strategy, product, and market analysis from the Athly team. Written by operators, not marketers.',
}

export default function ResourcesPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return <ResourcesClient posts={posts} tags={tags} />
}
