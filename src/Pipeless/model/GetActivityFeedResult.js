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
import GetActivityFeedResultEvents from './GetActivityFeedResultEvents';
import PageInfo from './PageInfo';

/**
 * The GetActivityFeedResult model module.
 * @module Pipeless/model/GetActivityFeedResult
 * @version 1.0
 */
class GetActivityFeedResult {
    /**
     * Constructs a new <code>GetActivityFeedResult</code>.
     * @alias module:Pipeless/model/GetActivityFeedResult
     * @param events {Array.<module:Pipeless/model/GetActivityFeedResultEvents>} 
     * @param pageInfo {module:Pipeless/model/PageInfo} 
     */
    constructor(events, pageInfo) { 
        
        GetActivityFeedResult.initialize(this, events, pageInfo);
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
     * Constructs a <code>GetActivityFeedResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/GetActivityFeedResult} obj Optional instance to populate.
     * @return {module:Pipeless/model/GetActivityFeedResult} The populated <code>GetActivityFeedResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetActivityFeedResult();

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [GetActivityFeedResultEvents]);
            }
            if (data.hasOwnProperty('page_info')) {
                obj['page_info'] = PageInfo.constructFromObject(data['page_info']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Pipeless/model/GetActivityFeedResultEvents>} events
 */
GetActivityFeedResult.prototype['events'] = undefined;

/**
 * @member {module:Pipeless/model/PageInfo} page_info
 */
GetActivityFeedResult.prototype['page_info'] = undefined;






export default GetActivityFeedResult;

