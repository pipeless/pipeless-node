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
import GetActivityOnObjectResultEvents from './GetActivityOnObjectResultEvents';
import PageInfo from './PageInfo';

/**
 * The GetActivityOnObjectResult model module.
 * @module Pipeless/model/GetActivityOnObjectResult
 * @version 1.0
 */
class GetActivityOnObjectResult {
    /**
     * Constructs a new <code>GetActivityOnObjectResult</code>.
     * @alias module:Pipeless/model/GetActivityOnObjectResult
     * @param events {Array.<module:Pipeless/model/GetActivityOnObjectResultEvents>} 
     * @param pageInfo {module:Pipeless/model/PageInfo} 
     */
    constructor(events, pageInfo) { 
        
        GetActivityOnObjectResult.initialize(this, events, pageInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, events, pageInfo) { 
        obj['events'] = events;
        obj['page_info'] = pageInfo;
    }

    /**
     * Constructs a <code>GetActivityOnObjectResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/GetActivityOnObjectResult} obj Optional instance to populate.
     * @return {module:Pipeless/model/GetActivityOnObjectResult} The populated <code>GetActivityOnObjectResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetActivityOnObjectResult();

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [GetActivityOnObjectResultEvents]);
            }
            if (data.hasOwnProperty('page_info')) {
                obj['page_info'] = PageInfo.constructFromObject(data['page_info']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Pipeless/model/GetActivityOnObjectResultEvents>} events
 */
GetActivityOnObjectResult.prototype['events'] = undefined;

/**
 * @member {module:Pipeless/model/PageInfo} page_info
 */
GetActivityOnObjectResult.prototype['page_info'] = undefined;






export default GetActivityOnObjectResult;

