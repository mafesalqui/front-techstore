export interface Product {
    id: string
    documentId: string
    name: string
    slug: string
    description: string
    price: number
    oldPrice?: number
    images: string[]
    categoryName: string
    categorySlug: string
    stock: number
    features: string[]
    isNew?: boolean
}

export interface CartItem extends Product {
    qty: number;
}

export interface Category {
    id: string
    name: string
    slug: string
    image: string
    bannerImage?: string
    description?: string
    featured?: boolean
}

export interface Order {
    id: string
    customer: string
    date: string
    status: "pending" | "completed"
    total: number
    items: {
        id: string
        name: string
        quantity: number
        price: number
    }[]
}