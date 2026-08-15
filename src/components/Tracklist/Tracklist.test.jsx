// src/components/Tracklist/Tracklist.test.jsx

import { render, screen } from '@testing-library/react'
import Tracklist from './Tracklist'

describe('Tracklist Component', () => {
  it('renders a list of tracks (user-visible)', () => {
    render(<Tracklist />)

    // ul should exist
    expect(screen.getByRole('list')).toBeInTheDocument()

    // items should exist and be user-visible
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)

    expect(screen.getByText('Teardrop, Massive Attack, Mezzanine')).toBeInTheDocument()
    expect(screen.getByText('Girlfriend Is Better, Talking Heads, Speaking in Tongues' )).toBeInTheDocument()
    expect(screen.getByText("Feet Don't Fail Me Now, JoyCrookes, Skin" )).toBeInTheDocument()
  })
})
