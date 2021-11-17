// string should be in format of dd/mm/yyyy
export const stringToDate = (dateAsString: string) => {
    const [day, month, year] = dateAsString.split('/')
    const date = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)))
    return date
}

export const dateToString = (dateAsDate: Date) => {
    const ye = new Intl.DateTimeFormat([], {year: 'numeric'}).format(dateAsDate)
    const mo = new Intl.DateTimeFormat([], {month: '2-digit'}).format(dateAsDate)
    const da = new Intl.DateTimeFormat([], {day: '2-digit'}).format(dateAsDate)
    return `${da}/${mo}/${ye}`
}