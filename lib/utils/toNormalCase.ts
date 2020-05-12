export const toNormalCase = (str: string) => {
  if (str.length < 2) {
    return str.toUpperCase()
  }
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`
}
