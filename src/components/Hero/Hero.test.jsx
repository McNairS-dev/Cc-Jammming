// src/components/Hero.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders the Hero component with welcome message', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to the Wonderful World of Jammming')).toBeInTheDocument()
  })

  it('renders Hero component with CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Enter a song, album, or artist name and press "Search" to start your jamm!')).toBeInTheDocument()
  })
})
