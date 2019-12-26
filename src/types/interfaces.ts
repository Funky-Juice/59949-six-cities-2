export enum Type {
    APARTMENT = `apartment`,
    ROOM = `room`,
    HOUSE = `house`,
    HOTEL = `hotel`
}

export interface Offer {
    id: number
    type: Type
    price: number
    title: string
    preview_image: string
    images: string[]
    goods: string[]
    rating: number
    bedrooms: number
    max_adults: number
    is_premium: boolean
    is_favorite: boolean
    description: string
    city: City
    host: Host
    location: {
        latitude: number
        longitude: number
    }
}

export interface City {
    name: string
    location: Location
}

export interface Location {
    latitude: number
    longitude: number
    zoom: number
}

export interface Host {
    name: string
    status: string
    is_pro: boolean
    avatar_url: string
}

export interface User {
    id: number
    email: string
    name: string
    avatar_url: string
    is_pro: boolean
}

export interface Review {
    id: number
    date: string
    rating: number
    comment: string
    user: User
}
