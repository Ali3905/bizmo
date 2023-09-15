import React, { createContext, useState } from 'react'

export const ComponentContext = createContext()

const ComponentState = (props) => {
    const [component, setComponent] = useState(null)

    const updateComponent = (componentName) => {
        setComponent(componentName)
    }

  return (
    <ComponentContext.Provider value={{component, updateComponent}}>
        {props.children}
    </ComponentContext.Provider>
  )
}

export default ComponentState
