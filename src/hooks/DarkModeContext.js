import React, { useContext, useEffect, useState } from 'react'

const DarkModeContext = React.createContext()

// hook for this
export function useDarkMode() {
  return useContext(DarkModeContext)
}

// main provider
// eslint-disable-next-line react/prop-types
export default function DarkModeProvider({ children }) {
  const [lights, setLights] = useState(false)

  function toggleLights() {
    return setLights(!lights)
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]

    if (lights) {
      // add
      body.classList.add('dark')
    } else {
      // remove class from body element
      body.classList.remove('dark')
    }
  }, [lights])

  const modeState = {
    lights,
    toggleLights,
  }

  return (
    <DarkModeContext.Provider value={modeState}>
      {children}
    </DarkModeContext.Provider>
  )
}
