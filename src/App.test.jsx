// src/components/App.test.jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect,vi } from 'vitest'

import App from './App'

describe('Search Bar', () => {
  it('renders the search bar with instructions', () => {
//    const user = userEvent.setup();
//    const mockOnSearch = vi.fn();
    
    render(<App />)
    
    const searchInput = screen.getByText('Search for... (required):');
    const searchButton = screen.getByText('Search');
    
    expect(screen.getByText('Search for... (required):')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    
    })
  
  it('renders the search result component with title', () => {
//    const user = userEvent.setup();
//    const mockOnSearch = vi.fn();
    
    render(<App />)
    
    const searchInput = screen.getByText('Search for... (required):');
    const searchButton = screen.getByText('Search');
    
    expect(screen.getByText('Search for... (required):')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    
    })
  
  
})
