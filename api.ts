import globalAxios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import { API_V, BASE_PATH, BaseAPI, RequestArgs } from './base'
import {
  DUMMY_BASE_URL,
  createRequestFunction,
  toPathString,
} from './common'
import { Configuration } from './configuration'
import { postsQuery } from './queries/post'
import type { Order } from "./types"

/**
 * Represents the response object for a ProductHunt post.
 */
export interface ProductHuntPostResponse {
  data?: PostData
}

/**
 * Represents the data object within the ProductHunt post response.
 */
export interface PostData {
  posts?: Posts
}

/**
 * Represents the posts object within the ProductHunt post data.
 */
export interface Posts {
  edges?: PostEdge[]
}

/**
 * Represents an edge object within the posts data.
 */
export interface PostEdge {
  /**
   * The cursor value of the edge.
   * @type {string}
   * @memberof PostEdge
   */
  cursor?: string

  /**
   * The node object within the edge.
   * @type {PostNode}
   * @memberof PostEdge
   */
  node?: PostNode
}

/**
 * Represents a node object within the posts data.
 */
export interface PostNode {
  /**
   * The ID of the node.
   * @type {string}
   * @memberof PostNode
   */
  id?: string

  /**
   * The name of the node.
   * @type {string}
   * @memberof PostNode
   */
  name?: string

  /**
   * The tagline of the node.
   * @type {string}
   * @memberof PostNode
   */
  tagline?: string

  /**
   * The description of the node.
   * @type {string}
   * @memberof PostNode
   */
  description?: string

  /**
   * The URL of the node.
   * @type {string}
   * @memberof PostNode
   */
  url?: string

  /**
   * The slug of the node.
   * @type {string}
   * @memberof PostNode
   */
  slug?: string

  /**
   * The number of votes for the node.
   * @type {number}
   * @memberof PostNode
   */
  votesCount?: number

  /**
   * The thumbnail object of the node.
   * @type {Thumbnail}
   * @memberof PostNode
   */
  thumbnail?: Thumbnail

  /**
   * The website URL of the node.
   * @type {string}
   * @memberof PostNode
   */
  website?: string

  /**
   * The rating of the reviews for the node.
   * @type {number}
   * @memberof PostNode
   */
  reviewsRating?: number

  /**
   * The number of reviews for the node.
   * @type {number}
   * @memberof PostNode
   */
  reviewsCount?: number

  /**
   * The creation date of the node.
   * @type {Date}
   * @memberof PostNode
   */
  createdAt?: Date

  /**
   * The makers associated with the node.
   * @type {Maker[]}
   * @memberof PostNode
   */
  makers?: Maker[]

  /**
   * The product links associated with the node.
   * @type {Thumbnail[]}
   * @memberof PostNode
   */
  productLinks?: Thumbnail[]

  /**
   * The user object associated with the node.
   * @type {User}
   * @memberof PostNode
   */
  user?: User

  /**
   * The number of comments for the node.
   * @type {number}
   * @memberof PostNode
   */
  commentsCount?: number

  /**
   * The featured date of the node.
   * @type {Date}
   * @memberof PostNode
   */
  featuredAt?: Date

  /**
   * Indicates if the node is collected.
   * @type {boolean}
   * @memberof PostNode
   */
  isCollected?: boolean

  /**
   * Indicates if the node is voted.
   * @type {boolean}
   * @memberof PostNode
   */
  isVoted?: boolean

  /**
   * The ID of the user associated with the node.
   * @type {string}
   * @memberof PostNode
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



/**
 * ProductHuntAPI - object-oriented interface
 * @export
 * @class ProductHuntAPI
 * @extends {BaseAPI}
 */
export class ProductHuntAPI extends BaseAPI {
  /**
   *
   * @summary Creates a completion for the provided prompt and parameters.
   * @param {GetPostsRequest} getPostsRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public getPosts(
    getPostsRequest?: GetPostsRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .getPosts(getPostsRequest, options)
      .then(request => request(this.axios, this.basePath))
  }
}

/**
 * ProductHuntAPI - axios parameter creator
 * @export
 */
export const ProductHuntAPIAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Creates a model response for the given chat conversation.
     * @param {GetPostsRequest} getPostsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPosts: async (
      getPostsRequest?: GetPostsRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'getPostsRequest' is not null or undefined
      //assertParamExists('getPosts', 'getPostsRequest', getPostsRequest)
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getPostsRequest?.query ?? postsQuery,
        variables: { ...getPostsRequest?.variables },
      }

      //setVariables(data, getPostsRequest.variables)

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      /* localVarRequestOptions.data = serializeDataIfNeeded(
        getPostsRequest,
        localVarRequestOptions,
        configuration
      ) */
      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ProductHuntAPI - functional programming interface
 * @export
 */
export const ProductHuntAPIFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    ProductHuntAPIAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Creates a completion for the provided prompt and parameters.
     * @param {CreateCompletionRequest} createCompletionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPosts(
      getPostsRequest?: GetPostsRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntPostResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPosts(
        getPostsRequest,
        options
      )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
  }
}
