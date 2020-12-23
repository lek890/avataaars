import * as PropTypes from 'prop-types'
import * as React from 'react'

import Option from './Option'
import { OptionContextNew } from './OptionContextNew'

export const SelectorNew: React.FC<{
  defaultOption?: any
  optionMeta?: any
}> = ({ children }) => {
  const { allOptions } = React.useContext(OptionContextNew)
  console.log(
    '🚀 ~ file: SelectorNew.tsx ~ line 10 ~ SelectorNew ~ allOptions',
    allOptions
  )
  // const value = this.optionContext.getValue(option.key)!

  //     React.Children.forEach(children, (child) => {
  //       if (getComponentOptionValue((child as any).type) === value) {
  //         result = child
  //       }
  //     })

  return <div>{children} </div>
}

function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  defaultOption: React.ComponentClass | string
}

// export default class Selector extends React.Component<Props> {
//   static contextTypes = {
//     optionContext: PropTypes.instanceOf(OptionContext),
//   }

//   private get optionContext(): OptionContext {
//     return this.context.optionContext
//   }

//   componentWillMount() {
//     const { option, defaultOption } = this.props
//     const { optionContext } = this
//     const defaultValue =
//       typeof defaultOption === 'string'
//         ? defaultOption
//         : getComponentOptionValue(defaultOption)
//     optionContext.addStateChangeListener(this.optionContextUpdate)
//     optionContext.optionEnter(option.key)
//     const optionState = optionContext.getOptionState(option.key)
//     this.updateOptionValues()
//     if (optionState) {
//       optionContext.setDefaultValue(option.key, defaultValue)
//     }
//   }

//   componentWillUpdate(nextProps: Props & { children?: React.ReactNode }) {
//     this.updateOptionValues(nextProps)
//   }

//   componentWillUnmount() {
//     this.optionContext.removeStateChangeListener(this.optionContextUpdate)
//     this.optionContext.optionExit(this.props.option.key)
//   }

//   render() {
//     let result: React.ReactNode | null = null
//     const { option, children } = this.props
//     const value = this.optionContext.getValue(option.key)!
//     console.log(
//       '🚀 ~ file: Selector.tsx ~ line 58 ~ Selector ~ render ~ value',
//       value
//     )
//     React.Children.forEach(children, (child) => {
//       if (getComponentOptionValue((child as any).type) === value) {
//         result = child
//       }
//     })
//     return result
//   }

//   private optionContextUpdate = () => {
//     this.forceUpdate()
//   }

//   private updateOptionValues(
//     nextProps?: Props & { children?: React.ReactNode }
//   ) {
//     if (nextProps && this.props.children === nextProps.children) {
//       return
//     }
//     const { option, children } = this.props
//     const values = React.Children.map(
//       children,
//       // TODO: also validate and throw error if we don't see optionValue
//       (child) => getComponentOptionValue((child as any).type)
//     )
//     if (values && new Set(values).size !== values.length) {
//       throw new Error('Duplicate values')
//     }
//     this.optionContext.setOptions(option.key, values || [])
//   }
// }
