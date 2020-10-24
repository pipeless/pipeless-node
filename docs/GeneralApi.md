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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject': new Pipeless.InlineObject() // InlineObject | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject2': new Pipeless.InlineObject2() // InlineObject2 | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject9': new Pipeless.InlineObject9() // InlineObject9 | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject9** | [**InlineObject9**](InlineObject9.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject1': new Pipeless.InlineObject1() // InlineObject1 | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject4': new Pipeless.InlineObject4() // InlineObject4 | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject5': new Pipeless.InlineObject5() // InlineObject5 | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'inlineObject3': new Pipeless.InlineObject3() // InlineObject3 | 
};
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
 **appId** | **Number**|  | [default to 123]
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

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
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.GeneralApi();
let appId = 123; // Number | 
let opts = {
  'getRecentEventsConfig': new Pipeless.GetRecentEventsConfig() // GetRecentEventsConfig | 
};
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
 **appId** | **Number**|  | [default to 123]
 **getRecentEventsConfig** | [**GetRecentEventsConfig**](GetRecentEventsConfig.md)|  | [optional] 

### Return type

[**[GetRecentEventsResultItem]**](GetRecentEventsResultItem.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

