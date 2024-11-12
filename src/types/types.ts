export type CardsType = {
    _id: string
    name: string
    images: string
    category?: string
    description: string
    reviews: number
    rating: number
  }

  export type ExcursionCardType = {
    _id: string
    name: string
    price: string
    images: string[]
    category: string
    description: string
    'full descriptions': string
    duration: string
    group: string
    reviews: string[]
    rating: number
    location: string
    'important information': string[]
    program: string[]
  }

  export type EstateCardType ={

    name: string,


    images: string[],
    description: string,
    price: number,
    area: number,
    bathroom: number,
    beds: number,
    rating: number,
    location:string,
   





  }