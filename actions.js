export const loadFont = (family) => ({
  type: 'FINISH_FONT_LOAD',
  payload: family
})

export const setFont = (family) => ({
  type: 'SET_FONT',
  payload: family
})

export const unscrambleLogo = () => ({
  type: 'UNSCRAMBLE_LOGO'
})

export const scrambleLogo = () => ({
  type: 'SCRAMBLE_LOGO'
})

export const setColor = (color) => ({
  type: 'SET_COLOR',
  payload: color
})

export const setInverted = () => ({
  type: 'SET_INVERTED'
})

export const setUninverted = () => ({
  type: 'SET_UNINVERTED'
})
