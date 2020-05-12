export const amountWithSpaces = (amount: number, withSign: boolean = false) => {
  let parsedAmount = Math.abs(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  if (withSign) {
    let sign = ''

    if (amount > 0) {
      sign = '+ '
    }

    if (amount < 0) {
      sign = '- '
    }

    parsedAmount = sign + parsedAmount
  }

  return parsedAmount
}
