import { useState, useCallback } from "react"

const useEvent = (initialValue = null) => {
  const [value, setValue] = useState(initialValue)
  const handler = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return [value, handler]
}

export default useEvent
