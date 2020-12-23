import * as React from 'react'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin from './Skin'
import { AvatarStyle } from '.'

export interface PieceComponentProps {
  pieceSize?: string
  pieceType?: string
  avatarStyle: AvatarStyle
  style?: React.CSSProperties
  viewBox?: string
}

export interface PieceProps {
  renderPieceOnly?: boolean
  pieceDescription?: any
}

export default class PieceComponent extends React.Component<PieceComponentProps> {
  render() {
    const pieceProps = { renderPieceOnly: true, pieceDescription: this.props }
    return (
      <svg
        style={this.props.style}
        width={`${this.props.pieceSize}px`}
        height={`${this.props.pieceSize}px`}
        viewBox={this.props.viewBox || '0 0 264 280'}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        {this.props.pieceType === 'top' && <Top {...pieceProps} />}
        {this.props.pieceType === 'clothe' && <Clothe {...pieceProps} />}
        {this.props.pieceType === 'graphics' && (
          <Graphics maskID="1234" {...pieceProps} />
        )}
        {(this.props.pieceType === 'accessories' ||
          this.props.pieceType === 'accesories') && (
          <Accessories {...pieceProps} />
        )}
        {this.props.pieceType === 'facialHair' && (
          <FacialHair {...pieceProps} />
        )}
        {this.props.pieceType === 'eyes' && <Eyes {...pieceProps} />}
        {this.props.pieceType === 'eyebrows' && <Eyebrows {...pieceProps} />}
        {this.props.pieceType === 'mouth' && <Mouth {...pieceProps} />}
        {this.props.pieceType === 'nose' && <Nose {...pieceProps} />}
        {this.props.pieceType === 'skin' && (
          <Skin maskID="5678" {...pieceProps} />
        )}
      </svg>
    )
  }
}
