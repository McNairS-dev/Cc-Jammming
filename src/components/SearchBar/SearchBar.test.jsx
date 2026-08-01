// src/components/SearchBar.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SearchBar from './SearchBar'

describe('Search Bar', () => {
  it('renders the search bar with instructions', () => {
    render(<SearchBar />)
      
    expect(screen.getByText('Search for... (required):')).toBeInTheDocument()
 
    expect(screen.getByText('Search')).toBeInTheDocument() 
    })
  
  
})
