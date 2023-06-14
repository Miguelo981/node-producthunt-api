import { getApiKey } from './common'
import { GrantType } from './types'
import globalAxios from 'axios'

//const packageJson = require("./package.json");

export interface ConfigurationParameters {
  clientId?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  clientSecret?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  grantType?: GrantType
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  baseOptions?: any
  basePath?: string
}

export class Configuration {
  /**
   * Product Hunt app client id
   * @param name security name
   * @memberof Configuration
   */
  clientId?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  /**
   *
   * Product Hunt app client secret
   *
   * @type name security name
   * @memberof Configuration
   */
  clientSecret?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  /**
   * parameter for grant type
   *
   * @type {GrantType}
   * @memberof Configuration
   */
  grantType?: GrantType
  /**
   * parameter for grant type
   *
   * @type name security name
   * @memberof Configuration
   */
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  /**
   * base options for axios calls
   *
   * @type {any}
   * @memberof Configuration
   */
  baseOptions?: any
  /**
   * override base path
   *
   * @type {string}
   * @memberof Configuration
   */
  basePath?: string

  constructor(param: ConfigurationParameters = {}) {
    this.clientId = param.clientId
    this.clientSecret = param.clientSecret
    this.grantType = param.grantType
    this.apiKey = param.apiKey

    if (!this.baseOptions) {
      this.baseOptions = {}
    }

    this.baseOptions.headers = {
      'User-Agent': `ProductHunt/NodeJS/${/* packageJson.version */ '1.0.4'}`,
      //Authorization: `Bearer ${this.apiKey}`,
      ...this.baseOptions.headers,
    }

    globalAxios.interceptors.request.use(
      async req => {
        if (req.url.includes('oauth/token')) return req

        const { headers } = req

        if (headers['Authorization']) return req

        if (!this.apiKey) {
            const token = await getApiKey(this)

            this.apiKey = token
        }

        this.baseOptions.headers = {
            Authorization: `Bearer ${this.apiKey}`,
            ...this.baseOptions.headers,
        }
        
        req.headers['Authorization'] = `Bearer ${this.apiKey}`

        return req
      },
      err => {
        return Promise.reject(err)
      }
    )
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  public isJsonMime(mime: string): boolean {
    // eslint-disable-next-line no-control-regex, no-useless-escape
    const jsonMime: RegExp = new RegExp(
      '^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$',
      'i'
    )
    return (
      mime !== null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === 'application/json-patch+json')
    )
  }
}
