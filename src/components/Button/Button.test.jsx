// src/App.test.jsx

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders a Search button with the corrrect text', () => {
    render(<Button buttonText={'Search for...'} />)
    
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Search for...')).toBeInTheDocument()

    })

  it('renders a Save button with the corrrect text', () => {
    render(<Button  buttonText={'Save to Spotify'} />)
    
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Save to Spotify')).toBeInTheDocument()

    })
  })
