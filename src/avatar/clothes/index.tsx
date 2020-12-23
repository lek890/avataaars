import * as React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import { ClotheOption, Selector } from '../../options'
import { PieceProps } from '../piece'

export default class Clothes extends React.Component<PieceProps> {
  render() {
    return (
      <Selector
        optionMeta={ClotheOption}
        defaultOption={BlazerShirt}
        {...this.props}>
        <BlazerShirt />
        <BlazerSweater />
        <CollarSweater />
        <GraphicShirt />
        <Hoodie />
        <Overall />
        <ShirtCrewNeck />
        <ShirtScoopNeck />
        <ShirtVNeck />
      </Selector>
    )
  }
}
