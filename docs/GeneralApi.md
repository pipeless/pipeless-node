# Pipeless.GeneralApi

All URIs are relative to *https://api.pipeless.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEvent**](GeneralApi.md#createEvent) | **POST** /v1/apps/{app_id}/events | Create Event
[**createEventsBatch**](GeneralApi.md#createEventsBatch) | **POST** /v1/apps/{app_id}/events/batch | Create Events Batch
[**deleteAllObjectsByType**](GeneralApi.md#deleteAllObjectsByType) | **DELETE** /v1/apps/{app_id}/objects/all | Delete All Objects by Type
[**deleteEvent**](GeneralApi.md#deleteEvent) | **DELETE** /v1/apps/{app_id}/events | Delete Event
[**deleteObject**](GeneralApi.md#deleteObject) | **DELETE** /v1/apps/{app_id}/objects | Delete Object
[**editObject**](GeneralApi.md#editObject) | **PATCH** /v1/apps/{app_id}/objects | Edit Object
[**getObject**](GeneralApi.md#getObject) | **GET** /v1/apps/{app_id}/objects | Get Object
[**getRecentEvents**](GeneralApi.md#getRecentEvents) | **GET** /v1/apps/{app_id}/recent-events | Get Recent Events
[**getRelationshipCounts**](GeneralApi.md#getRelationshipCounts) | **GET** /v1/apps/{app_id}/relationship-counts | Get Relationship Counts
[**getRelationshipExists**](GeneralApi.md#getRelationshipExists) | **GET** /v1/apps/{app_id}/relationship-exists | Get Relationship Exists



## createEvent

> Object createEvent(appId, opts)

Create Event

Create a single event. 

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.createEvent(appId, opts, (error, data, response) => {
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

**Object**

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEventsBatch

> Object createEventsBatch(appId, opts)

Create Events Batch

Create up to 10 events in one API call.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.createEventsBatch(appId, opts, (error, data, response) => {
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

**Object**

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAllObjectsByType

> Object deleteAllObjectsByType(appId, opts)

Delete All Objects by Type

Delete all objects (and associated events) of a specific object type.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.deleteAllObjectsByType(appId, opts, (error, data, response) => {
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

**Object**

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEvent

> Object deleteEvent(appId, opts)

Delete Event

Delete one or more events.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.deleteEvent(appId, opts, (error, data, response) => {
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

**Object**

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteObject

> Object deleteObject(appId, opts)

Delete Object

Delete a single object and all the relationships/events it&#39;s connected to.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.deleteObject(appId, opts, (error, data, response) => {
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

**Object**

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editObject

> ObjectReadable editObject(appId, opts)

Edit Object

Edit the properties of an existing object.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.editObject(appId, opts, (error, data, response) => {
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

[**ObjectReadable**](ObjectReadable.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getObject

> ObjectReadable getObject(appId, opts)

Get Object

Get basic info on a single object.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.getObject(appId, opts, (error, data, response) => {
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

[**ObjectReadable**](ObjectReadable.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRecentEvents

> [GetRecentEventsResultItem] getRecentEvents(appId, opts)

Get Recent Events

Get recent events that have been sent to the specified app.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {};
apiInstance.getRecentEvents(appId, opts, (error, data, response) => {
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
 **getRecentEventsConfig** | [**GetRecentEventsConfig**](GetRecentEventsConfig.md)|  | [optional] 

### Return type

[**[GetRecentEventsResultItem]**](GetRecentEventsResultItem.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRelationshipCounts

> RelationshipCountsResult getRelationshipCounts(appId, opts)

Get Relationship Counts

Get the counts of 1 or 2 relationships from/to a given object.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = "'123'"; // String | 
let opts = {};
apiInstance.getRelationshipCounts(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [your app id]
 **opts** | **Object** |  | [optional]

### Return type

[**RelationshipCountsResult**](RelationshipCountsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRelationshipExists

> RelationshipExistsResult getRelationshipExists(appId, opts)

Get Relationship Exists

Determines if a given relationship of a specific type exists from the specified object to the specified end object.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'Bearer YOUR_API_KEY';

let apiInstance = new Pipeless.GeneralApi();
let appId = "'123'"; // String | 
let opts = {};
apiInstance.getRelationshipExists(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [your app id]
 **opts** | **Object** |  | [optional]

### Return type

[**RelationshipExistsResult**](RelationshipExistsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

