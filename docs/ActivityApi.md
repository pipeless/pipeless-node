# Pipeless.ActivityApi

All URIs are relative to *https://api.pipeless.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivityActionsFeed**](ActivityApi.md#getActivityActionsFeed) | **GET** /v1/apps/{app_id}/algos/activity/actions-feed | Get Activity Actions Feed
[**getActivityFeed**](ActivityApi.md#getActivityFeed) | **GET** /v1/apps/{app_id}/algos/activity/feed | Get Activity Feed
[**getActivityOnObject**](ActivityApi.md#getActivityOnObject) | **GET** /v1/apps/{app_id}/algos/activity/object | Get Activity on Object



## getActivityActionsFeed

> GetActivityActionsFeedResult getActivityActionsFeed(appId, opts)

Get Activity Actions Feed

Fetch the activity feed for a user (or any other object type). This activity feed format will return acted upon entities as the main result. Ex. one item per post, article, product, etc. Each single item has associated actions. Ex. product a product

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.ActivityApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.getActivityActionsFeed(appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**|  | [your app id]
 **opts** | **Object** |  | [optional]

### Return type

[**GetActivityActionsFeedResult**](GetActivityActionsFeedResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getActivityFeed

> GetActivityFeedResult getActivityFeed(appId, opts)

Get Activity Feed

Fetch the activity feed for a user (or any other object type). This activity feed format will return events in sequential descending order - there will be one activity item for each found action.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.ActivityApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.getActivityFeed(appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**|  | [your app id]
 **opts** | **Object** |  | [optional]

### Return type

[**GetActivityFeedResult**](GetActivityFeedResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## getActivityOnObject

> GetActivityOnObjectResult getActivityOnObject(appId, opts)

Get Activity on Object

Get activity that has taken place on a target object.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.ActivityApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.getActivityOnObject(appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**|  | [your app id]
 **opts** | **Object** |  | [optional]

### Return type

[**GetActivityOnObjectResult**](GetActivityOnObjectResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

