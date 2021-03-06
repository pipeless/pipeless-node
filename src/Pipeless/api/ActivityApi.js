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


import ApiClient from "../ApiClient";
import Errors from '../model/Errors';
import GetActivityActionsFeedResult from '../model/GetActivityActionsFeedResult';
import GetActivityFeedResult from '../model/GetActivityFeedResult';
import GetActivityOnObjectResult from '../model/GetActivityOnObjectResult';

/**
* Activity service.
* @module Pipeless/api/ActivityApi
* @version 1.0
*/
export default class ActivityApi {

    /**
    * Constructs a new ActivityApi. 
    * @alias module:Pipeless/api/ActivityApi
    * @class
    * @param {module:Pipeless/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Pipeless/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getActivityActionsFeed operation.
     * @callback module:Pipeless/api/ActivityApi~getActivityActionsFeedCallback
     * @param {String} error Error message, if any.
     * @param {module:Pipeless/model/GetActivityActionsFeedResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Actions Feed
     * Fetch the activity feed for a user (or any other object type). This activity feed format will return acted upon entities as the main result. Ex. one item per post, article, product, etc. Each single item has associated actions. Ex. product a product
     * @param {Number} appId 
     * @param {Object} opts Optional parameters
     * @param {module:Pipeless/api/ActivityApi~getActivityActionsFeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Pipeless/model/GetActivityActionsFeedResult}
     */
    getActivityActionsFeed(appId, opts, callback) {
      opts = opts || {};
      let postBody = opts;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getActivityActionsFeed");
      }

      let pathParams = {
        'app_id': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['App_API_Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetActivityActionsFeedResult;
      return this.apiClient.callApi(
        '/v1/apps/{app_id}/algos/activity/actions-feed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivityFeed operation.
     * @callback module:Pipeless/api/ActivityApi~getActivityFeedCallback
     * @param {String} error Error message, if any.
     * @param {module:Pipeless/model/GetActivityFeedResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Feed
     * Fetch the activity feed for a user (or any other object type). This activity feed format will return events in sequential descending order - there will be one activity item for each found action.
     * @param {Number} appId 
     * @param {Object} opts Optional parameters
     * @param {module:Pipeless/api/ActivityApi~getActivityFeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Pipeless/model/GetActivityFeedResult}
     */
    getActivityFeed(appId, opts, callback) {
      opts = opts || {};
      let postBody = opts;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getActivityFeed");
      }

      let pathParams = {
        'app_id': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['App_API_Key'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = GetActivityFeedResult;
      return this.apiClient.callApi(
        '/v1/apps/{app_id}/algos/activity/feed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivityOnObject operation.
     * @callback module:Pipeless/api/ActivityApi~getActivityOnObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:Pipeless/model/GetActivityOnObjectResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity on Object
     * Get activity that has taken place on a target object.
     * @param {Number} appId 
     * @param {Object} opts Optional parameters
     * @param {module:Pipeless/api/ActivityApi~getActivityOnObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Pipeless/model/GetActivityOnObjectResult}
     */
    getActivityOnObject(appId, opts, callback) {
      opts = opts || {};
      let postBody = opts;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getActivityOnObject");
      }

      let pathParams = {
        'app_id': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['App_API_Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetActivityOnObjectResult;
      return this.apiClient.callApi(
        '/v1/apps/{app_id}/algos/activity/object', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
