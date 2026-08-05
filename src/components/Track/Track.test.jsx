// src/components/Track/Track.test.jsx
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Track from './Track'

describe('Track Component', () => {
  it('renders a track with name, artist and album', () => {
    render(<Track />)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
      expect(screen.getByText('Teardrop, Massive Attack, Mezzanine')).toBeInTheDocument()
    })
  })
