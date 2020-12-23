import * as React from 'react'
interface OptionContextProps {
  options: any
}

export const OptionContext = React.createContext({} as OptionContextProps)

export const OptionContextProvider: React.FC<OptionContextProps> = ({
  children,
  options,
}) => {
  return (
    <OptionContext.Provider
      value={{
        options: options,
      }}>
      {children}
    </OptionContext.Provider>
  )
}

export default OptionContext
