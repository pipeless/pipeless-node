# Pipeless.ObjectWriteable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of your object. The id can be a string (up to 40 characters) containing any number, alpha character, spaces, or the following special characters: @-!#%^&amp;()/+&#x3D;;:&#39;\&quot;?&lt;&gt;\\][{}., | 
**type** | [**ObjectType**](ObjectType.md) |  | 
**createdOn** | **Date** | An optional DateTime string in the format YYYY-MM-DDTHH:MM:SS in whatever timezone you use. If not set, and the object needs to be created, this value will be set to the current UTC time. | [optional] 
**modifiedOn** | **Date** | An optional DateTime string in the format YYYY-MM-DDTHH:MM:SS in whatever timezone you use. If not set, the value will be set to the same value as created_on. | [optional] 


