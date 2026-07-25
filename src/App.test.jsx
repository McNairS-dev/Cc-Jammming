// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import SearchResults from './components/SearchResults/SearchResults'
import PlaylistForm from './components/PlaylistForm/PlaylistForm'
import Playlist from './components/Playlist/Playlist'

describe('Jammming web app and immediate children', () => {
  it('renders the App component with child components', () => {
    render(<App />)
    })

  it('renders Hero component with CTA', () => {
    render(<Hero />)
  })
  
  it('renders SearchForm component', () => {
    render(<SearchForm />)
  })
  
  it('renders SearchResults component', () => {
    render(<SearchResults />)
  })
  
  it('renders PlaylistForm component', () => {
    render(<PlaylistForm />)
  })
  
  it('renders Playlist component', () => {
    render(<Playlist />)
  })
})
