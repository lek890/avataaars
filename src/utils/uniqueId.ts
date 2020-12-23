import { v4 as uuidv4 } from 'uuid'
export const getUniqueId = (prefix = '') => {
  return `${prefix}${uuidv4()}`
}
