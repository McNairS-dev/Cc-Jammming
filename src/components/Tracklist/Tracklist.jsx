// src/components/Tracklist/Tracklist.jsx

import Track from '../Track/Track'
function Tracklist( props ) {
  return (
    <>
      <ul>
        <Track trackData='Teardrop, Massive Attack, Mezzanine' />
        <Track trackData='Girlfriend Is Better, Talking Heads, Speaking in Tongues' />
        <Track trackData="Feet Don't Fail Me Now, JoyCrookes, Skin" />
      </ul>
    </>
  )}

export default Tracklist
