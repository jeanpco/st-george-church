import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return children
}

ClientOnly.propTypes = {
  children: PropTypes.any,
}

export default ClientOnly
