import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import { API_V, BASE_PATH, BaseAPI, RequestArgs } from './base'
import {
  DUMMY_BASE_URL,
  createRequestFunction,
  toPathString,
} from './common'
import { Configuration } from './configuration'
import globalAxios from 'axios'
import { GetPostsRequest, ProductHuntPostResponse } from './models/post'
import { postsQuery } from './queries/post'

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
