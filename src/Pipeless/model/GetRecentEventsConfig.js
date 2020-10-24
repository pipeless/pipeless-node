/**
 * Pipeless
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetRecentEventsConfig model module.
 * @module Pipeless/model/GetRecentEventsConfig
 * @version 1.0
 */
class GetRecentEventsConfig {
    /**
     * Constructs a new <code>GetRecentEventsConfig</code>.
     * @alias module:Pipeless/model/GetRecentEventsConfig
     */
    constructor() { 
        
        GetRecentEventsConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecentEventsConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/GetRecentEventsConfig} obj Optional instance to populate.
     * @return {module:Pipeless/model/GetRecentEventsConfig} The populated <code>GetRecentEventsConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecentEventsConfig();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} limit
 * @default 10
 */
GetRecentEventsConfig.prototype['limit'] = 10;






export default GetRecentEventsConfig;
