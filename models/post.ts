import { Order } from "../types"

/**
 * Represents the response object for a ProductHunt post.
 */
export interface ProductHuntPostResponse {
  data?: Data
}

/**
 * Represents the data object within the ProductHunt post response.
 */
export interface Data {
  posts?: Posts
}

/**
 * Represents the posts object within the ProductHunt post data.
 */
export interface Posts {
  edges?: Edge[]
}

/**
 * Represents an edge object within the posts data.
 */
export interface Edge {
  /**
   * The cursor value of the edge.
   * @type {string}
   * @memberof Edge
   */
  cursor?: string

  /**
   * The node object within the edge.
   * @type {Node}
   * @memberof Edge
   */
  node?: Node
}

/**
 * Represents a node object within the posts data.
 */
export interface Node {
  /**
   * The ID of the node.
   * @type {string}
   * @memberof Node
   */
  id?: string

  /**
   * The name of the node.
   * @type {string}
   * @memberof Node
   */
  name?: string

  /**
   * The tagline of the node.
   * @type {string}
   * @memberof Node
   */
  tagline?: string

  /**
   * The description of the node.
   * @type {string}
   * @memberof Node
   */
  description?: string

  /**
   * The URL of the node.
   * @type {string}
   * @memberof Node
   */
  url?: string

  /**
   * The slug of the node.
   * @type {string}
   * @memberof Node
   */
  slug?: string

  /**
   * The number of votes for the node.
   * @type {number}
   * @memberof Node
   */
  votesCount?: number

  /**
   * The thumbnail object of the node.
   * @type {Thumbnail}
   * @memberof Node
   */
  thumbnail?: Thumbnail

  /**
   * The website URL of the node.
   * @type {string}
   * @memberof Node
   */
  website?: string

  /**
   * The rating of the reviews for the node.
   * @type {number}
   * @memberof Node
   */
  reviewsRating?: number

  /**
   * The number of reviews for the node.
   * @type {number}
   * @memberof Node
   */
  reviewsCount?: number

  /**
   * The creation date of the node.
   * @type {Date}
   * @memberof Node
   */
  createdAt?: Date

  /**
   * The makers associated with the node.
   * @type {Maker[]}
   * @memberof Node
   */
  makers?: Maker[]

  /**
   * The product links associated with the node.
   * @type {Thumbnail[]}
   * @memberof Node
   */
  productLinks?: Thumbnail[]

  /**
   * The user object associated with the node.
   * @type {User}
   * @memberof Node
   */
  user?: User

  /**
   * The number of comments for the node.
   * @type {number}
   * @memberof Node
   */
  commentsCount?: number

  /**
   * The featured date of the node.
   * @type {Date}
   * @memberof Node
   */
  featuredAt?: Date

  /**
   * Indicates if the node is collected.
   * @type {boolean}
   * @memberof Node
   */
  isCollected?: boolean

  /**
   * Indicates if the node is voted.
   * @type {boolean}
   * @memberof Node
   */
  isVoted?: boolean

  /**
   * The ID of the user associated with the node.
   * @type {string}
   * @memberof Node
   */
  userId?: string
}

/**
 * Represents a maker object.
 */
export interface Maker {
  /**
   * The ID of the maker.
   * @type {string}
   * @memberof Maker
   */
  id?: string

  /**
   * The name of the maker.
   * @type {string}
   * @memberof Maker
   */
  name?: string
}

/**
 * Represents a thumbnail object.
 */
export interface Thumbnail {
  /**
   * The type of the thumbnail.
   * @type {string}
   * @memberof Thumbnail
   */
  type?: string

  /**
   * The URL of the thumbnail.
   * @type {string}
   * @memberof Thumbnail
   */
  url?: string

  /**
   * The video URL of the thumbnail.
   * @type {string}
   * @memberof Thumbnail
   */
  videoUrl?: string
}

/**
 * Represents a user object.
 */
export interface User {
  /**
   * The cover image URL of the user.
   * @type {(string | null)}
   * @memberof User
   */
  coverImage?: string | null

  /**
   * The creation date of the user.
   * @type {Date}
   * @memberof User
   */
  createdAt?: Date

  /**
   * The headline of the user.
   * @type {(string | null)}
   * @memberof User
   */
  headline?: string | null

  /**
   * Indicates if the user is being followed.
   * @type {boolean}
   * @memberof User
   */
  isFollowing?: boolean

  /**
   * Indicates if the user is a maker.
   * @type {boolean}
   * @memberof User
   */
  isMaker?: boolean

  /**
   * Indicates if the user is the viewer.
   * @type {boolean}
   * @memberof User
   */
  isViewer?: boolean

  /**
   * The profile image URL of the user.
   * @type {(string | null)}
   * @memberof User
   */
  profileImage?: string | null

  /**
   * The Twitter username of the user.
   * @type {(string | null)}
   * @memberof User
   */
  twitterUsername?: string | null

  /**
   * The URL of the user.
   * @type {string}
   * @memberof User
   */
  url?: string

  /**
   * The username of the user.
   * @type {string}
   * @memberof User
   */
  username?: string

  /**
   * The website URL of the user.
   * @type {null}
   * @memberof User
   */
  websiteUrl?: null

  /**
   * The ID of the user.
   * @type {string}
   * @memberof User
   */
  id?: string

  /**
   * The name of the user.
   * @type {string}
   * @memberof User
   */
  name?: string
}

/**
 * @export
 * @interface GetPostsRequestVariables
 */
export interface GetPostsRequestVariables {
  featured?: boolean
  postedBefore?: Date
  postedAfter?: Date
  topic?: string
  order?: Order
  after?: string
  before?: string
  first?: number
  twitterUrl?: string
  url?: string
}

/**
 *
 * @export
 * @interface GetPostsRequest
 */
export interface GetPostsRequest {
  query?: string
  variables?: GetPostsRequestVariables
}
