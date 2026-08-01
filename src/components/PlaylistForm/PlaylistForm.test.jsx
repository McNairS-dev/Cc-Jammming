// src/components/Playlist.test.jsx
import { render, screen } from '@testing-library/react'
import {describe, it, expect } from 'vitest'
import PlaylistForm from './PlaylistForm'

describe('PlaylistForm with playlist name and details fields', () => {
  it('renders the PlaylistForm component with name and description input fields and submit button', () => {
    render(<PlaylistForm />)
    
    expect(screen.getByText('Playlist Name... (required):')).toBeInTheDocument()
    expect(screen.getByText('Playlist Description... (optional):')).toBeInTheDocument()
    expect(screen.getByText('Save to Spotify')).toBeInTheDocument()
    })
  
  })
