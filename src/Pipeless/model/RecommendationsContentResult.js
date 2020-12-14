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
import RecommendationsContentResultItems from './RecommendationsContentResultItems';

/**
 * The RecommendationsContentResult model module.
 * @module Pipeless/model/RecommendationsContentResult
 * @version 1.0
 */
class RecommendationsContentResult {
    /**
     * Constructs a new <code>RecommendationsContentResult</code>.
     * @alias module:Pipeless/model/RecommendationsContentResult
     * @param items {Array.<module:Pipeless/model/RecommendationsContentResultItems>} 
     */
    constructor(items) { 
        
        RecommendationsContentResult.initialize(this, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items) { 
        obj['items'] = items;
    }

    /**
     * Constructs a <code>RecommendationsContentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/RecommendationsContentResult} obj Optional instance to populate.
     * @return {module:Pipeless/model/RecommendationsContentResult} The populated <code>RecommendationsContentResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecommendationsContentResult();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [RecommendationsContentResultItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Pipeless/model/RecommendationsContentResultItems>} items
 */
RecommendationsContentResult.prototype['items'] = undefined;






export default RecommendationsContentResult;
