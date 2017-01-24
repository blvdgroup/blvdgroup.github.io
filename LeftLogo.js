import React from 'react'
import { connect } from 'react-redux'

const r = a => a[Math.floor(Math.random() * a.length)]

export const LeftLogo = ({ scrambled, loadedFonts, font, color }) => {
  return (
    <h1 style={{ fontFamily: !scrambled ? font : null, color }}>
      {scrambled ? <span>
        <span style={{ fontFamily: r(loadedFonts)}}>b</span>
        <span style={{ fontFamily: r(loadedFonts)}}>l</span>
        <span style={{ fontFamily: r(loadedFonts)}}>v</span>
        <span style={{ fontFamily: r(loadedFonts)}}>d</span>
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
