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
import ObjectReadable from './ObjectReadable';

/**
 * The RecommendationsContentResultItems model module.
 * @module Pipeless/model/RecommendationsContentResultItems
 * @version 1.0
 */
class RecommendationsContentResultItems {
    /**
     * Constructs a new <code>RecommendationsContentResultItems</code>.
     * @alias module:Pipeless/model/RecommendationsContentResultItems
     * @param _object {module:Pipeless/model/ObjectReadable} 
     */
    constructor(_object) { 
        
        RecommendationsContentResultItems.initialize(this, _object);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _object) { 
        obj['object'] = _object;
    }

    /**
     * Constructs a <code>RecommendationsContentResultItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/RecommendationsContentResultItems} obj Optional instance to populate.
     * @return {module:Pipeless/model/RecommendationsContentResultItems} The populated <code>RecommendationsContentResultItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecommendationsContentResultItems();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ObjectReadable.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('authors')) {
                obj['authors'] = ApiClient.convertToType(data['authors'], [ObjectReadable]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Pipeless/model/ObjectReadable} object
 */
RecommendationsContentResultItems.prototype['object'] = undefined;

/**
 * @member {Array.<module:Pipeless/model/ObjectReadable>} authors
 */
RecommendationsContentResultItems.prototype['authors'] = undefined;






export default RecommendationsContentResultItems;

