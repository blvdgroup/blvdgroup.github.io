import React from 'react'
import { connect } from 'react-redux'
import VisibilitySensor from 'react-visibility-sensor'

import * as actions from './actions'

import { right, section } from './styles.scss'

export const RightScroll = ({ color, setColor, scrambleLogo, unscrambleLogo, setFont }) => {
  return (
    <div className={right} style={{ backgroundColor: color }}>
      <div className={section} style={{ backgroundColor: color }}>
        <VisibilitySensor scrollDelay={0} intervalDelay={250} onChange={(v) => {
          if (v) {
            setColor('#000000')
            scrambleLogo()
          }
        }}>
          <div>
            <h3 style={{ marginBottom: '36pt' }}>
              <span style={{ fontFamily: 'raleway' }}>We </span>
              <span style={{ fontFamily: 'proxima-nova' }}>buil</span>
              <span style={{ fontFamily: 'museo-slab' }}>d thi</span>
              <span style={{ fontFamily: 'montserrat' }}>ngs.</span>
            </h3>
            <h3 style={{ fontFamily: 'raleway' }}>resist!</h3>
            <h3 style={{ fontFamily: 'proxima-nova' }}>hoot</h3>
            <h3 style={{ fontFamily: 'museo-slab' }}>serif</h3>
            <h3 style={{ fontFamily: 'montserrat' }}>traffic</h3>
          </div>
        </VisibilitySensor>
      </div>
      <div className={section} style={{ fontFamily: 'raleway', backgroundColor: color }}>
        <VisibilitySensor onChange={(v) => {
          if (v) {
            setColor('#7d0e0e')
            unscrambleLogo()
            setFont('raleway')
          }
        }}>
          <div>
            <h2>resist!</h2>
            <p>Peer to peer networking built for peaceful protest.</p>
            <p>Go to the site now.</p>
          </div>
        </VisibilitySensor>
      </div>
      <div className={section} style={{ fontFamily: 'proxima-nova', backgroundColor: color }}>
        <VisibilitySensor onChange={(v) => {
          if (v) {
            setColor('#217dfa')
            unscrambleLogo()
            setFont('proxima-nova')
          }
        }}>
          <div>
            <h2>hoot</h2>
            <p>Reimagining the college application process.</p>
            <p>Go to the site now.</p>
          </div>
        </VisibilitySensor>
      </div>
      <div className={section} style={{ fontFamily: 'museo-slab', backgroundColor: color }}>
        <VisibilitySensor onChange={(v) => {
          if (v) {
            setColor('#b60ff4')
            unscrambleLogo()
            setFont('museo-slab')
          }
        }}>
          <div>
            <h2>serif</h2>
            <p>The news of the hour, distilled to the extreme.</p>
            <p>Go to the site now.</p>
          </div>
        </VisibilitySensor>
      </div>
      <div className={section} style={{ fontFamily: 'montserrat', backgroundColor: color }}>
        <VisibilitySensor onChange={(v) => {
          if (v) {
            setColor('#edc54c')
            unscrambleLogo()
            setFont('montserrat')
          }
        }}>
          <div>
            <h2>traffic</h2>
            <p>An easy way to make beautiful, open web apps.</p>
            <p>Go to the site now.</p>
          </div>
        </VisibilitySensor>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    color: state.color.current
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setColor: (c) => dispatch(actions.setColor(c)),
    scrambleLogo: () => dispatch(actions.scrambleLogo()),
    unscrambleLogo: () => dispatch(actions.unscrambleLogo()),
    setFont: (f) => dispatch(actions.setFont(f))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightScroll)
