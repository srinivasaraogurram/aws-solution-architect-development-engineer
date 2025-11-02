import React from 'react'
import Sidebar from './Sidebar.jsx'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar"><Sidebar /></aside>
      <main className="main">{children}</main>
    </div>
  )
}
