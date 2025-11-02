import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import MarkdownPage from './components/MarkdownPage.jsx'
import PdfViewer from './components/PdfViewer.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MarkdownPage slug="index" />} />
        <Route path="/profile" element={<MarkdownPage slug="profile" />} />
        <Route path="/certifications" element={<MarkdownPage slug="certifications" />} />
        <Route path="/certifications/table" element={<MarkdownPage slug="certifications-table" />} />
        <Route path="/technical-docs" element={<MarkdownPage slug="technical-docs" />} />
        <Route path="/resume" element={<MarkdownPage slug="resume" />} />
        <Route path="/code-samples" element={<MarkdownPage slug="code-samples" />} />
        <Route path="/pdf" element={<PdfViewer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
