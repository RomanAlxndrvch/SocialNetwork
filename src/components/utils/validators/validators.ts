export const requiredFields = (value: string) => {
    if (value) return undefined

    return 'Field is required'
}


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Should be not longer then ${maxLength} symbols `

    return undefined
}