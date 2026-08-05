// src/App.test.jsx

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders a button with the corrrect text', () => {
    render(<Button />)
    
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Search for...')).toBeInTheDocument()

    })
  })
