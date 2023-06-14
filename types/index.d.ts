export interface ProductHuntResponse {
  data: ProductHuntData
}

export interface ProductHuntData {
  posts: ProductHuntPosts
}

export interface ProductHuntPosts {
  edges: ProductHuntEdge[]
}

export interface ProductHuntEdge {
  cursor: string
  node: Node
}

export interface ProductHuntNode {
  id: string
  name: string
  tagline: string
  description: null | string
  url: string
  votesCount: number
  thumbnail: ProductHuntMedia
  website: string
  reviewsRating: number
  createdAt: Date
  productLinks: ProductHuntMedia[]
  user: any
}

export interface ProductHuntMedia {
  type: Type
  url: string
}

export enum Type {
  Image = 'image',
}

export type GrantType = 'client_credentials' | 'authorization_code' | 'refresh_token' | 'password'