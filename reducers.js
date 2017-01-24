export function leftLogo (state = { scrambled: true }, { type, payload }) {
  switch (type) {
    case 'UNSCRAMBLE_LOGO': return { ...state, scrambled: false }
    case 'SCRAMBLE_LOGO': return { ...state, scrambled: true }
    default: return state
  }
}

export function font (state = { loaded: [], current: '' }, { type, payload }) {
  switch (type) {
    case 'FINISH_FONT_LOAD': return { ...state, loaded: [ ...state.loaded, payload ] }
    case 'SET_FONT': return { ...state, current: payload }
    default: return state
  }
}

export function color (state = { current: '#000000', invert: false }, { type, payload }) {
  switch (type) {
    case 'SET_COLOR': return { ...state, current: payload }
    case 'SET_INVERTED': return { ...state, invert: true }
    case 'SET_UNINVERTED': return { ...state, invert: false }
    default: return state
  }
}
