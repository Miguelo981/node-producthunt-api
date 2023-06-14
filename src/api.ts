import { BaseAPI } from "./base"
import { ProductHuntResponse } from "./types"

/**
 * ProductHuntAPI - object-oriented interface
 * @export
 * @class ProductHuntAPI
 * @extends {BaseAPI}
 */
export class ProductHuntAPI extends BaseAPI {

    public getPosts(): ProductHuntResponse {
        return { name: 'dsdsd' } as any
    }
}