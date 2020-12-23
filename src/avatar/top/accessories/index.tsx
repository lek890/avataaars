import * as React from 'react'

import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { SelectorNew } from '../../../options/SelectorNew'
import { AccessoriesOption } from '../../../options'

export default class Accessories extends React.Component {
  render() {
    return (
      <SelectorNew optionMeta={AccessoriesOption} defaultOption={Blank}>
        <Blank />
        <Kurt />
        <Prescription01 />
        <Prescription02 />
        <Round />
        <Sunglasses />
        <Wayfarers />
      </SelectorNew>
    )
  }
}
