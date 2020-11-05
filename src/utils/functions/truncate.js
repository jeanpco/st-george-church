export const truncateBody = (str, max = 22) => {
  const array = str.trim().split(' ')
  const ellipsis = array.length > max ? ' [...]' : ''
  return array.slice(0, max).join(' ') + ellipsis
}

export const truncateHeader = (str, max = 3) => {
  const array = str.trim().split(' ')
  const ellipsis = array.length > max ? ' ...' : ''
  return array.splice(0, max).join(' ') + ellipsis
}
