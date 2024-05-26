export const maxLength = (str, size = 100, prefix = "...") => {
  if (str) {
    if (str.length < size) return str
    return str.slice(0, size) + prefix
  }
}
