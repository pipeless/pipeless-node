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
import RelationshipCountsResultStats from './RelationshipCountsResultStats';

/**
 * The RelationshipCountsResult model module.
 * @module Pipeless/model/RelationshipCountsResult
 * @version 1.0
 */
class RelationshipCountsResult {
    /**
     * Constructs a new <code>RelationshipCountsResult</code>.
     * @alias module:Pipeless/model/RelationshipCountsResult
     * @param stats {Array.<module:Pipeless/model/RelationshipCountsResultStats>} 
     */
    constructor(stats) { 
        
        RelationshipCountsResult.initialize(this, stats);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, stats) { 
        obj['stats'] = stats;
    }

    /**
     * Constructs a <code>RelationshipCountsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/RelationshipCountsResult} obj Optional instance to populate.
     * @return {module:Pipeless/model/RelationshipCountsResult} The populated <code>RelationshipCountsResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipCountsResult();

            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiClient.convertToType(data['stats'], [RelationshipCountsResultStats]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Pipeless/model/RelationshipCountsResultStats>} stats
 */
RelationshipCountsResult.prototype['stats'] = undefined;






export default RelationshipCountsResult;

