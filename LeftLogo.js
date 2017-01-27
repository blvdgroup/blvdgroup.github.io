import React from 'react'
import { connect } from 'react-redux'

const r = a => a[Math.floor(Math.random() * a.length)]
const mix = a => a.sort((a, b) => Math.random() - 0.5)
const padTo = (a, l) => a.length >= l ? a : [...a, ...(new Array(l - a.length)).fill(null).map(() => r(a))]

export const LeftLogo = ({ scrambled, loadedFonts, font, color }) => {
  const mixed = padTo(mix(loadedFonts), 4)
  console.log(mixed)
  return (
    <h1 style={{ fontFamily: !scrambled ? font : null, color }}>
      {scrambled ? <span>
        <span style={{ fontFamily: mixed[0] }}>b</span>
        <span style={{ fontFamily: mixed[1] }}>l</span>
        <span style={{ fontFamily: mixed[2] }}>v</span>
        <span style={{ fontFamily: mixed[3] }}>d</span>
      </span> : 'blvd'}
    </h1>
  )
}

function mapStateToProps (state) {
  return {
    scrambled: state.leftLogo.scrambled,
    loadedFonts: state.font.loaded,
    font: state.font.current,
    color: state.color.current
  }
}

export default connect(mapStateToProps)(LeftLogo)

// Note to self
// 7ebf1260a09c18c8f33287631a64d683
// 267fb256ed0dbf81f50254d3b64d68e7
