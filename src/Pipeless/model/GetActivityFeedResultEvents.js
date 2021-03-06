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
import RelationshipReadable from './RelationshipReadable';

/**
 * The GetActivityFeedResultEvents model module.
 * @module Pipeless/model/GetActivityFeedResultEvents
 * @version 1.0
 */
class GetActivityFeedResultEvents {
    /**
     * Constructs a new <code>GetActivityFeedResultEvents</code>.
     * @alias module:Pipeless/model/GetActivityFeedResultEvents
     * @param actorObject {module:Pipeless/model/ObjectReadable} 
     * @param actionRelationship {module:Pipeless/model/RelationshipReadable} 
     * @param actionObject {module:Pipeless/model/ObjectReadable} 
     */
    constructor(actorObject, actionRelationship, actionObject) { 
        
        GetActivityFeedResultEvents.initialize(this, actorObject, actionRelationship, actionObject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, actorObject, actionRelationship, actionObject) { 
        obj['actor_object'] = actorObject;
        obj['action_relationship'] = actionRelationship;
        obj['action_object'] = actionObject;
    }

    /**
     * Constructs a <code>GetActivityFeedResultEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Pipeless/model/GetActivityFeedResultEvents} obj Optional instance to populate.
     * @return {module:Pipeless/model/GetActivityFeedResultEvents} The populated <code>GetActivityFeedResultEvents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetActivityFeedResultEvents();

            if (data.hasOwnProperty('actor_object')) {
                obj['actor_object'] = ObjectReadable.constructFromObject(data['actor_object']);
            }
            if (data.hasOwnProperty('action_relationship')) {
                obj['action_relationship'] = RelationshipReadable.constructFromObject(data['action_relationship']);
            }
            if (data.hasOwnProperty('action_object')) {
                obj['action_object'] = ObjectReadable.constructFromObject(data['action_object']);
            }
            if (data.hasOwnProperty('cursor')) {
                obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:Pipeless/model/ObjectReadable} actor_object
 */
GetActivityFeedResultEvents.prototype['actor_object'] = undefined;

/**
 * @member {module:Pipeless/model/RelationshipReadable} action_relationship
 */
GetActivityFeedResultEvents.prototype['action_relationship'] = undefined;

/**
 * @member {module:Pipeless/model/ObjectReadable} action_object
 */
GetActivityFeedResultEvents.prototype['action_object'] = undefined;

/**
 * @member {String} cursor
 */
GetActivityFeedResultEvents.prototype['cursor'] = undefined;






export default GetActivityFeedResultEvents;

