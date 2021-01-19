import Wrap from './wrapPageElement'
import smoothscroll from 'smoothscroll-polyfill'
export const wrapPageElement = Wrap

export const onClientEntry = () => {
  smoothscroll.polyfill()
}
