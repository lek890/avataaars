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
  renderPieceOnly?: boolean
  pieceDescription?: any
}> = ({ optionMeta, children, renderPieceOnly = false, pieceDescription }) => {
  const { options } = React.useContext(OptionContextNew)
  const avatarCondition = options ? options[optionMeta.key] : ''
  const pieceOnlyCondition = pieceDescription
    ? pieceDescription[optionMeta['_key']]
    : ''
  const value = renderPieceOnly ? pieceOnlyCondition : avatarCondition

  let result: React.ReactNode | null = null
  //todo: default option
  value &&
    React.Children.forEach(children, (child) => {
      if (getComponentOptionValue((child as any).type) === value) {
        result = child
      }
    })

  return result
}
