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
import RelationshipDirection from './RelationshipDirection';
import RelationshipWriteable from './RelationshipWriteable';

/**
 * The GetActivityOnObjectResultEvents model module.
 * @module Pipeless/model/GetActivityOnObjectResultEvents
 * @version 1.0
 */
class GetActivityOnObjectResultEvents {
    /**
     * Constructs a new <code>GetActivityOnObjectResultEvents</code>.
     * @alias module:Pipeless/model/GetActivityOnObjectResultEvents
     * @param _object {module:Pipeless/model/ObjectReadable} 
     * @param relationship {module:Pipeless/model/RelationshipWriteable} 
     * @param direction {module:Pipeless/model/RelationshipDirection} 
     */
    constructor(_object, relationship, direction) { 
        
        GetActivityOnObjectResultEvents.initialize(this, _object, relationship, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _object, relationship, direction) { 
        obj['object'] = _object;
        obj['relationship'] = relationship;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>GetActivityOnObjectResultEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/GetActivityOnObjectResultEvents} obj Optional instance to populate.
     * @return {module:Pipeless/model/GetActivityOnObjectResultEvents} The populated <code>GetActivityOnObjectResultEvents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetActivityOnObjectResultEvents();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ObjectReadable.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = RelationshipWriteable.constructFromObject(data['relationship']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = RelationshipDirection.constructFromObject(data['direction']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Pipeless/model/ObjectReadable} object
 */
GetActivityOnObjectResultEvents.prototype['object'] = undefined;

/**
 * @member {module:Pipeless/model/RelationshipWriteable} relationship
 */
GetActivityOnObjectResultEvents.prototype['relationship'] = undefined;

/**
 * @member {module:Pipeless/model/RelationshipDirection} direction
 */
GetActivityOnObjectResultEvents.prototype['direction'] = undefined;






export default GetActivityOnObjectResultEvents;

