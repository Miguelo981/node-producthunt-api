import { GrantType } from "./types"

const packageJson = require("./package.json");

export interface ConfigurationParameters {
    clientId?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    clientSecret?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    grantType?: GrantType
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    baseOptions?: any;
    basePath?: string;
}

export class Configuration {
    /**
     * Product Hunt app client id
     * @param name security name
     * @memberof Configuration
     */
    clientId?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * 
     * Product Hunt app client secret
     * 
     * @type name security name
     * @memberof Configuration
     */
    clientSecret?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
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
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;

    constructor(param: ConfigurationParameters = {}) {
        this.clientId = param.clientId
        this.clientSecret = param.clientSecret
        this.grantType = param.grantType
        this.apiKey = param.apiKey

        if (!this.baseOptions) {
            this.baseOptions = {};
        }

        this.baseOptions.headers = {
            'User-Agent': `ProductHunt/NodeJS/${packageJson.version}`,
            'Authorization': `Bearer ${this.apiKey}`,
            ...this.baseOptions.headers,
        }
    }
}