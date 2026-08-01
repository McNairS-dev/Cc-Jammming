// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Jammming web app', () => {
  it('renders the App component with title', () => {
    render(<App />)

    expect(screen.getByText('Jammming')).toBeInTheDocument()
  })
  
   it('renders the App component with Hero component', () => {
    render(<App />)

    expect(screen.getByText('Welcome to the Wonderful World of Jammming')).toBeInTheDocument()
    expect(screen.getByText('Enter a song, album, or artist name and press "Search" to start your jamm!')).toBeInTheDocument()
  })
  
  it('renders the App component with SearchBar Component', () => {
    render(<App/>)
    
    expect(screen.getByText('Search for... (required):')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
  
    
  it('renders the App component with Playlist Form Component', () => {
    render(<App/>)
    
    expect(screen.getByText('Playlist Name... (required):')).toBeInTheDocument()
    expect(screen.getByText('Playlist Description... (optional):')).toBeInTheDocument()
    expect(screen.getByText('Save to Spotify')).toBeInTheDocument()
  })
})
