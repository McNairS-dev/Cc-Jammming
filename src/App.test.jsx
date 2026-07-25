// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import Hero from './components/Hero/Hero'

describe('Jammming web app and immediate children', () => {
  it('renders the App component with child components', () => {
    render(<App />)
    })

  it('renders Hero component with CTA', () => {
    render(<Hero />)
  })
})
