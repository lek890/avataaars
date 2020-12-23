import * as React from 'react'
import Option from './Option'
import { allOptions } from './index'

interface OptionContextProps {
  setOptions: (options: any) => void
  options: any
}

export const OptionContextNew = React.createContext({} as OptionContextProps)

export const OptionContextProvider: React.FC = ({ children }) => {
  const [options, setOptions] = React.useState({})

  return (
    <OptionContextNew.Provider
      value={{
        setOptions,
        options,
      }}>
      {children}
    </OptionContextNew.Provider>
  )
}
