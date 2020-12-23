import * as React from 'react'
import Option from './Option'
import { allOptions } from './index'

interface OptionContextProps {
  allOptions: Option[]
}

export const OptionContextNew = React.createContext({} as OptionContextProps)

export const OptionContextProvider: React.FC = ({ children }) => (
  <OptionContextNew.Provider
    value={{
      allOptions,
    }}>
    {children}
  </OptionContextNew.Provider>
)
