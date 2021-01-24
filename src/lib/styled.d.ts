import 'styled-components'

export type Theme = {
  springwood: string
  tundora: string
  grannysmith: string
  white: string
  gray: string
  como: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    springwood: string
    tundora: string
    grannysmith: string
    white: string
    gray: string
    como: string
  }
}
