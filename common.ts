import { Configuration } from "./configuration";

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, configuration?: Configuration) {
    if (configuration && configuration.apiKey) {
        /* const apiKey = typeof configuration.apiKey === 'function'
            ? await configuration.apiKey()
            : await configuration.apiKey; */
        const apiKey = await configuration.apiKey;
        object["Authorization"] = `Bearer ${apiKey}`;
    }
}