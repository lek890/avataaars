import * as React from 'react'

import { OptionContextNew } from './OptionContextNew'

function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export const SelectorNew: React.FC<{
  defaultOption?: any
  optionMeta?: any
}> = ({ optionMeta, children }) => {
  const { options } = React.useContext(OptionContextNew)
  const value = options ? options[optionMeta.key] : ''

  let result: React.ReactNode | null = null

  value &&
    React.Children.forEach(children, (child) => {
      if (getComponentOptionValue((child as any).type) === value) {
        result = child
      }
    })

  return result
}
