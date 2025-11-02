import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import matter from 'gray-matter'

// Import markdown files as raw strings via Vite glob
const pages = import.meta.glob('../content/**/*.md', { as: 'raw', eager: true })

const slugToPath = {
  index: '../content/index.md',
  profile: '../content/profile.md',
  certifications: '../content/certifications.md',
  'certifications-table': '../content/certifications-table.md',
  'technical-docs': '../content/technical-docs.md',
  resume: '../content/resume.md',
  'code-samples': '../content/code-samples.md',
}

export default function MarkdownPage({ slug }) {
  const raw = pages[slugToPath[slug]] || '# Not found\nThis page is not available.'
  const { content } = useMemo(() => matter(raw), [raw])

  return (
    <article className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </article>
  )
}
