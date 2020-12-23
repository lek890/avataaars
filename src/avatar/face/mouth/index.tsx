import * as React from 'react'

import Concerned from './Concerned'
import Default from './Default'
import Disbelief from './Disbelief'
import Eating from './Eating'
import Grimace from './Grimace'
import Sad from './Sad'
import ScreamOpen from './ScreamOpen'
import Serious from './Serious'
import Smile from './Smile'
import Tongue from './Tongue'
import Twinkle from './Twinkle'
import Vomit from './Vomit'
import { MouthOption, Selector } from '../../../options'
import { SelectorNew } from '../../../options/SelectorNew'

export default class Mouth extends React.Component {
  render() {
    return (
      <SelectorNew defaultOption={Default} optionMeta={MouthOption}>
        <Concerned />
        <Default />
        <Disbelief />
        <Eating />
        <Grimace />
        <Sad />
        <ScreamOpen />
        <Serious />
        <Smile />
        <Tongue />
        <Twinkle />
        <Vomit />
      </SelectorNew>
    )
  }
}
