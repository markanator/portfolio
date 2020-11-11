import { useEffect } from 'react'

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

// usage: useScript('https://use.typekit.net/foobar.js')
export default useScript
