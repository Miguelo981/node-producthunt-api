/* tslint:disable */
/* eslint-disable */
/**
 * ProductHunt API
 *
 * The version of the ProductHunt document: 1.0.0
 * 
 *
 * Do not edit the class manually.
 */


import type { Configuration, ConfigurationParameters } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://api.producthunt.com/v2".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;

            if (!configuration.apiKey) {
                this.setBearerAuth()
            }
        }
    }

    private async setBearerAuth() {
        if (this.configuration) {
            const token = await getApiKey(this.configuration)

            this.configuration.apiKey = token
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

async function getApiKey({ clientId, clientSecret, grantType }: ConfigurationParameters): Promise<string> {
    const res = await axios.post<{ access_token: string }>(`${BASE_PATH}/oauth/token`, 
        {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: grantType,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    
      const { access_token } = res.data
    
      return access_token
}
