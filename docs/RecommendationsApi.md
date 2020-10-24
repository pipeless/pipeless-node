# Pipeless.RecommendationsApi

All URIs are relative to *https://api.pipeless.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecommendedContent**](RecommendationsApi.md#getRecommendedContent) | **GET** /v1/apps/{app_id}/algos/recommendations/content | Get Recommended Content (for user)
[**getRecommendedUsersToFollow**](RecommendationsApi.md#getRecommendedUsersToFollow) | **GET** /v1/apps/{app_id}/algos/recommendations/users-to-follow | Get Recommended Users to Follow (for user)
[**getRelatedContent**](RecommendationsApi.md#getRelatedContent) | **GET** /v1/apps/{app_id}/algos/recommendations/related-content | Get Related Content
[**getRelatedTags**](RecommendationsApi.md#getRelatedTags) | **GET** /v1/apps/{app_id}/algos/recommendations/related-tags | Get Related Tags
[**getRelatedUsers**](RecommendationsApi.md#getRelatedUsers) | **GET** /v1/apps/{app_id}/algos/recommendations/related-users | Get Related Users



## getRecommendedContent

> RecommendationsResult getRecommendedContent(appId, opts)

Get Recommended Content (for user)

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.RecommendationsApi();
let appId = "'123'"; // String | 
let opts = {
  'inlineObject10': new Pipeless.InlineObject10() // InlineObject10 | 
};
apiInstance.getRecommendedContent(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [default to &#39;123&#39;]
 **inlineObject10** | [**InlineObject10**](InlineObject10.md)|  | [optional] 

### Return type

[**RecommendationsResult**](RecommendationsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRecommendedUsersToFollow

> RecommendationsResult getRecommendedUsersToFollow(appId, opts)

Get Recommended Users to Follow (for user)

For a given user (or any object type), get a list of recommended users for the target user to follow, based on their behavior/tastes.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.RecommendationsApi();
let appId = "'123'"; // String | 
let opts = {
  'inlineObject11': new Pipeless.InlineObject11() // InlineObject11 | 
};
apiInstance.getRecommendedUsersToFollow(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [default to &#39;123&#39;]
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

[**RecommendationsResult**](RecommendationsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRelatedContent

> RecommendationsResult getRelatedContent(appId, opts)

Get Related Content

Gets related content objects based on a specific piece of content of any type.

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.RecommendationsApi();
let appId = "'123'"; // String | 
let opts = {
  'inlineObject13': new Pipeless.InlineObject13() // InlineObject13 | 
};
apiInstance.getRelatedContent(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [default to &#39;123&#39;]
 **inlineObject13** | [**InlineObject13**](InlineObject13.md)|  | [optional] 

### Return type

[**RecommendationsResult**](RecommendationsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRelatedTags

> RecommendationsResult getRelatedTags(appId, opts)

Get Related Tags

Gets related tags for a given tag (or any other object type, ex. category).

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.RecommendationsApi();
let appId = "'123'"; // String | 
let opts = {
  'inlineObject12': new Pipeless.InlineObject12() // InlineObject12 | 
};
apiInstance.getRelatedTags(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [default to &#39;123&#39;]
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | [optional] 

### Return type

[**RecommendationsResult**](RecommendationsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRelatedUsers

> RecommendationsResult getRelatedUsers(appId, opts)

Get Related Users

Get related users based on a target user (or other type).

### Example

```javascript
import Pipeless from 'pipeless';
let defaultClient = Pipeless.ApiClient.instance;
// Configure API key authorization: App_API_Key
let App_API_Key = defaultClient.authentications['App_API_Key'];
App_API_Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//App_API_Key.apiKeyPrefix = 'Token';

let apiInstance = new Pipeless.RecommendationsApi();
let appId = "'123'"; // String | 
let opts = {
  'inlineObject14': new Pipeless.InlineObject14() // InlineObject14 | 
};
apiInstance.getRelatedUsers(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | [default to &#39;123&#39;]
 **inlineObject14** | [**InlineObject14**](InlineObject14.md)|  | [optional] 

### Return type

[**RecommendationsResult**](RecommendationsResult.md)

### Authorization

[App_API_Key](../README.md#App_API_Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

