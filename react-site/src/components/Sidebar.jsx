import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Professional Profile' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/certifications/table', label: 'Table View' },
  { to: '/technical-docs', label: 'Technical Documentation' },
  { to: '/resume', label: 'Resume' },
  { to: '/code-samples', label: 'Code Samples' },
]

export default function Sidebar() {
  return (
    <nav>
      <h3>Navigation</h3>
      <ul className="nav">
        {links.map(l => (
          <li key={l.to}>
            <NavLink to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>{l.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
