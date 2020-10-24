# pipeless

Pipeless - JavaScript client for the Pipeless API (https://docs.pipeless.io)


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install pipeless --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Pipeless = require('pipeless');

var defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
var App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = "Bearer YOUR_API_KEY"

var api = new Pipeless.ActivityApi()
var appId = 123; // {Number} 
var opts = {};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getActivityActionsFeed(appId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.pipeless.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Pipeless.ActivityApi* | [**getActivityActionsFeed**](docs/ActivityApi.md#getActivityActionsFeed) | **GET** /v1/apps/{app_id}/algos/activity/actions-feed | Get Activity Actions Feed
*Pipeless.ActivityApi* | [**getActivityFeed**](docs/ActivityApi.md#getActivityFeed) | **GET** /v1/apps/{app_id}/algos/activity/feed | Get Activity Feed
*Pipeless.ActivityApi* | [**getActivityOnObject**](docs/ActivityApi.md#getActivityOnObject) | **GET** /v1/apps/{app_id}/algos/activity/object | Get Activity on Object
*Pipeless.GeneralApi* | [**createEvent**](docs/GeneralApi.md#createEvent) | **POST** /v1/apps/{app_id}/events | Create Event
*Pipeless.GeneralApi* | [**createEventsBatch**](docs/GeneralApi.md#createEventsBatch) | **POST** /v1/apps/{app_id}/events/batch | Create Events Batch
*Pipeless.GeneralApi* | [**deleteAllObjectsByType**](docs/GeneralApi.md#deleteAllObjectsByType) | **DELETE** /v1/apps/{app_id}/objects/all | Delete All Objects by Type
*Pipeless.GeneralApi* | [**deleteEvent**](docs/GeneralApi.md#deleteEvent) | **DELETE** /v1/apps/{app_id}/events | Delete Event
*Pipeless.GeneralApi* | [**deleteObject**](docs/GeneralApi.md#deleteObject) | **DELETE** /v1/apps/{app_id}/objects | Delete Object
*Pipeless.GeneralApi* | [**editObject**](docs/GeneralApi.md#editObject) | **PATCH** /v1/apps/{app_id}/objects | Edit Object
*Pipeless.GeneralApi* | [**getObject**](docs/GeneralApi.md#getObject) | **GET** /v1/apps/{app_id}/objects | Get Object
*Pipeless.GeneralApi* | [**getRecentEvents**](docs/GeneralApi.md#getRecentEvents) | **GET** /v1/apps/{app_id}/recent-events | Get Recent Events
*Pipeless.RecommendationsApi* | [**getRecommendedContent**](docs/RecommendationsApi.md#getRecommendedContent) | **GET** /v1/apps/{app_id}/algos/recommendations/content | Get Recommended Content (for user)
*Pipeless.RecommendationsApi* | [**getRecommendedUsersToFollow**](docs/RecommendationsApi.md#getRecommendedUsersToFollow) | **GET** /v1/apps/{app_id}/algos/recommendations/users-to-follow | Get Recommended Users to Follow (for user)
*Pipeless.RecommendationsApi* | [**getRelatedContent**](docs/RecommendationsApi.md#getRelatedContent) | **GET** /v1/apps/{app_id}/algos/recommendations/related-content | Get Related Content
*Pipeless.RecommendationsApi* | [**getRelatedTags**](docs/RecommendationsApi.md#getRelatedTags) | **GET** /v1/apps/{app_id}/algos/recommendations/related-tags | Get Related Tags
*Pipeless.RecommendationsApi* | [**getRelatedUsers**](docs/RecommendationsApi.md#getRelatedUsers) | **GET** /v1/apps/{app_id}/algos/recommendations/related-users | Get Related Users


## Documentation for Models

 - [Pipeless.Errors](docs/Errors.md)
 - [Pipeless.GetActivityActionsFeedResult](docs/GetActivityActionsFeedResult.md)
 - [Pipeless.GetActivityActionsFeedResultActions](docs/GetActivityActionsFeedResultActions.md)
 - [Pipeless.GetActivityActionsFeedResultEvents](docs/GetActivityActionsFeedResultEvents.md)
 - [Pipeless.GetActivityFeedResult](docs/GetActivityFeedResult.md)
 - [Pipeless.GetActivityFeedResultEvents](docs/GetActivityFeedResultEvents.md)
 - [Pipeless.GetActivityOnObjectResult](docs/GetActivityOnObjectResult.md)
 - [Pipeless.GetActivityOnObjectResultEvents](docs/GetActivityOnObjectResultEvents.md)
 - [Pipeless.GetRecentEventsConfig](docs/GetRecentEventsConfig.md)
 - [Pipeless.GetRecentEventsResultItem](docs/GetRecentEventsResultItem.md)
 - [Pipeless.GetRecentEventsResultItemEvent](docs/GetRecentEventsResultItemEvent.md)
 - [Pipeless.ObjectLookup](docs/ObjectLookup.md)
 - [Pipeless.ObjectReadable](docs/ObjectReadable.md)
 - [Pipeless.ObjectType](docs/ObjectType.md)
 - [Pipeless.ObjectWildcardLookup](docs/ObjectWildcardLookup.md)
 - [Pipeless.ObjectWriteable](docs/ObjectWriteable.md)
 - [Pipeless.PageInfo](docs/PageInfo.md)
 - [Pipeless.RecommendationsResult](docs/RecommendationsResult.md)
 - [Pipeless.RecommendationsResultItems](docs/RecommendationsResultItems.md)
 - [Pipeless.RelationshipDirection](docs/RelationshipDirection.md)
 - [Pipeless.RelationshipReadable](docs/RelationshipReadable.md)
 - [Pipeless.RelationshipType](docs/RelationshipType.md)
 - [Pipeless.RelationshipWriteable](docs/RelationshipWriteable.md)


## Documentation for Authorization



### App_API_Key


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

