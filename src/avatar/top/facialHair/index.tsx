import * as React from 'react'

import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairOption, Selector } from '../../../options'
import { PieceProps } from '../../piece'

export default class FacialHair extends React.Component<PieceProps> {
  render() {
    return (
      <Selector
        optionMeta={FacialHairOption}
        defaultOption={Blank}
        {...this.props}>
        <Blank />
        <BeardMedium />
        <BeardLight />
        <BeardMajestic />
        <MoustacheFancy />
        <MoustacheMagnum />
      </Selector>
    )
  }
}
