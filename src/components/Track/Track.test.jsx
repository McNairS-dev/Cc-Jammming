// src/components/Track/Track.test.jsx

import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Track from './Track'

describe('Track Component', () => {
  it('renders a track with name, artist and album', () => {
    render(<Track trackData='Teardrop, Massive Attack, Mezzanine'/>)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
      expect(screen.getByText('Teardrop, Massive Attack, Mezzanine')).toBeInTheDocument()
    })

  it('renders a track with name, artist and album', () => {
    render(<Track trackData='Girlfriend Is Better, Talking Heads, Speaking in Tongues'/>)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
      expect(screen.getByText('Girlfriend Is Better, Talking Heads, Speaking in Tongues')).toBeInTheDocument()
    })

  it('renders a track with name, artist and album', () => {
    render(<Track trackData="Feet Don't Fail Me Now, JoyCrookes, Skin"/>)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
      expect(screen.getByText("Feet Don't Fail Me Now, JoyCrookes, Skin")).toBeInTheDocument()
    })
  })
