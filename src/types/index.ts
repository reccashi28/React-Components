type Languages = {
    name: string
}

export type Country = {
    flag: string
    name: string
    population: number
    languages: Languages[]
    region: string
    nativeName?: string
}