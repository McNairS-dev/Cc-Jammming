// src/components/Playlist/Playlist.test.jsx

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Playlist from './Playlist'

/*
 * Playlist
The contract...

*	receives as data from its caller
*		an array of track data objects with:
*			track
*			artist
*			album
*	passes the data to a Tracklist component
*/

describe('Playlist Component', () => {
  it('renders a Playlist of tracks', () => {
    render(<Playlist />)

    // ul should exist
    expect(screen.getByRole('list')).toBeInTheDocument()

    // items should exist and be user-visible
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)

    expect(screen.getByText('Strange Brew, Cream, Disraeli Gears')).toBeInTheDocument()
    expect(screen.getByText('The Wind Cries Mary, Jimi Hendrix Experience, Are You Experienced' )).toBeInTheDocument()
    expect(screen.getByText("Franklin's Tower, Greatful Dead, Blues for Allah" )).toBeInTheDocument()
    
  })
})
