// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Jammming web app', () => {
  it('renders the App component with title', () => {
    render(<App />)

    expect(screen.getByText('Jammming')).toBeInTheDocument()
  })
})
