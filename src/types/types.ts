export type CardsType = {
  _id: string
  name: string
  images: string
  category?: string
  description: string
  reviews: object
  rating: number
  location: string

  price?: string
  'full descriptions'?: string
  duration?: string
  group?: string
  'important information'?: string[]
  program?: string[]

  highlights?: string[]
  website?: string
}

export type ExcursionCardType = {
  _id: string
  name: string
  images: string[]
  category: string
  description: string
  reviews: string[]
  rating: number

  price: string
  'full descriptions': string
  duration: string
  group: string

  location: string
  'important information': string[]
  program: string[]
}

export type EstateCardType = {
  name: string

  images: string[]
  description: string
  price: number
  area: number
  bathroom: number
  beds: number
  rating: number
  location: string
}
