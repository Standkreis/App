export const formatDate = (date: string) => {
  const language = 'de'
  let dateEn = date.slice(0, 10)

  if (language === 'de') {
    return dateEn.split('-').reverse().join('.')
  }

  return dateEn
}
