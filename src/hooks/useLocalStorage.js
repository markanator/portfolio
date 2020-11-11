// import { useState } from 'react'

// export const useLocalStorage = (key, initialValue) => {
//   // console.log(module)
//   // set up state property
//   const [storedValue, setStoredValue] = useState(() => {
//     const item =
//       typeof window !== 'undefined' && window.localStorage.getItem(key)
//     // if localstorage data use that, itherwuse use initvals
//     return item ? JSON.parse(item) : initialValue
//   })

//   const setValue = value => {
//     setStoredValue(value)
//     // update localstorage
//     window.localStorage.setItem(key, JSON.stringify(value))
//   }

//   return [storedValue, setValue]
// }
