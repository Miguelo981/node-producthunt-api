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
import globalAxios from 'axios';

export const BASE_PATH = "https://api.producthunt.com".replace(/\/+$/, "");
export const API_V = "/v2"

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