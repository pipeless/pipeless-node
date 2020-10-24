# Pipeless.InlineObject11

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | [**ObjectLookup**](ObjectLookup.md) |  | 
**followedRelationshipType** | **String** | The relationship type in your data that is used to represent a user (or other type) following someone else. If this value is not provided, it will default to \&quot;followed\&quot;. | [optional] [default to &#39;followed&#39;]
**contentCreatedRelationshipType** | **String** | A relationship type that represents a user creating content in your data. If no value is provided, this will default to \&quot;posted\&quot;. | [optional] [default to &#39;posted&#39;]
**positiveRelationshipType** | **String** | The positive indicator a user can take on the content type that users can create. This should be the action a user can take that you consider most important to indicating that an object appeals to their tastes. If value is not provided, it will default to \&quot;liked\&quot;. | [optional] [default to &#39;liked&#39;]
**contentTaggedRelationshipType** | **String** | Set this relationship to the relationship you use to set tags on the content that is created by users. If a value is not provided, \&quot;taggedWith\&quot; will be used by default. | [optional] [default to &#39;taggedWith&#39;]
**contentObjectType** | **String** | The type of object that represents the content being created by users. If no value is provided, this defaults to \&quot;post\&quot;.  | [optional] [default to &#39;article&#39;]
**contentTagObjectType** | **String** | Set this type to the object you use for tags on the content that is created by your users. If a value is not provided, \&quot;tag\&quot; will be used by default. | [optional] [default to &#39;tag&#39;]
**limit** | **Number** |  | [optional] 



## Enum: FollowedRelationshipTypeEnum


* `posted` (value: `"posted"`)

* `followed` (value: `"followed"`)

* `liked` (value: `"liked"`)

* `favorited` (value: `"favorited"`)

* `saved` (value: `"saved"`)

* `disliked` (value: `"disliked"`)

* `purchased` (value: `"purchased"`)

* `commentedOn` (value: `"commentedOn"`)

* `created` (value: `"created"`)

* `viewed` (value: `"viewed"`)

* `reported` (value: `"reported"`)

* `blocked` (value: `"blocked"`)

* `deleted` (value: `"deleted"`)

* `authored` (value: `"authored"`)

* `used` (value: `"used"`)

* `dismissed` (value: `"dismissed"`)

* `loggedIn` (value: `"loggedIn"`)

* `taggedWith` (value: `"taggedWith"`)

* `categorizedIn` (value: `"categorizedIn"`)

* `interestedIn` (value: `"interestedIn"`)

* `locatedIn` (value: `"locatedIn"`)

* `readQuarter` (value: `"readQuarter"`)

* `readHalf` (value: `"readHalf"`)

* `readAll` (value: `"readAll"`)

* `subscribedTo` (value: `"subscribedTo"`)

* `subscribedFrom` (value: `"subscribedFrom"`)

* `addedTo` (value: `"addedTo"`)

* `madeBy` (value: `"madeBy"`)

* `pausedOn` (value: `"pausedOn"`)





## Enum: ContentCreatedRelationshipTypeEnum


* `posted` (value: `"posted"`)

* `followed` (value: `"followed"`)

* `liked` (value: `"liked"`)

* `favorited` (value: `"favorited"`)

* `saved` (value: `"saved"`)

* `disliked` (value: `"disliked"`)

* `purchased` (value: `"purchased"`)

* `commentedOn` (value: `"commentedOn"`)

* `created` (value: `"created"`)

* `viewed` (value: `"viewed"`)

* `reported` (value: `"reported"`)

* `blocked` (value: `"blocked"`)

* `deleted` (value: `"deleted"`)

* `authored` (value: `"authored"`)

* `used` (value: `"used"`)

* `dismissed` (value: `"dismissed"`)

* `loggedIn` (value: `"loggedIn"`)

* `taggedWith` (value: `"taggedWith"`)

* `categorizedIn` (value: `"categorizedIn"`)

* `interestedIn` (value: `"interestedIn"`)

* `locatedIn` (value: `"locatedIn"`)

* `readQuarter` (value: `"readQuarter"`)

* `readHalf` (value: `"readHalf"`)

* `readAll` (value: `"readAll"`)

* `subscribedTo` (value: `"subscribedTo"`)

* `subscribedFrom` (value: `"subscribedFrom"`)

* `addedTo` (value: `"addedTo"`)

* `madeBy` (value: `"madeBy"`)

* `pausedOn` (value: `"pausedOn"`)





## Enum: PositiveRelationshipTypeEnum


* `posted` (value: `"posted"`)

* `followed` (value: `"followed"`)

* `liked` (value: `"liked"`)

* `favorited` (value: `"favorited"`)

* `saved` (value: `"saved"`)

* `disliked` (value: `"disliked"`)

* `purchased` (value: `"purchased"`)

* `commentedOn` (value: `"commentedOn"`)

* `created` (value: `"created"`)

* `viewed` (value: `"viewed"`)

* `reported` (value: `"reported"`)

* `blocked` (value: `"blocked"`)

* `deleted` (value: `"deleted"`)

* `authored` (value: `"authored"`)

* `used` (value: `"used"`)

* `dismissed` (value: `"dismissed"`)

* `loggedIn` (value: `"loggedIn"`)

* `taggedWith` (value: `"taggedWith"`)

* `categorizedIn` (value: `"categorizedIn"`)

* `interestedIn` (value: `"interestedIn"`)

* `locatedIn` (value: `"locatedIn"`)

* `readQuarter` (value: `"readQuarter"`)

* `readHalf` (value: `"readHalf"`)

* `readAll` (value: `"readAll"`)

* `subscribedTo` (value: `"subscribedTo"`)

* `subscribedFrom` (value: `"subscribedFrom"`)

* `addedTo` (value: `"addedTo"`)

* `madeBy` (value: `"madeBy"`)

* `pausedOn` (value: `"pausedOn"`)





## Enum: ContentTaggedRelationshipTypeEnum


* `posted` (value: `"posted"`)

* `followed` (value: `"followed"`)

* `liked` (value: `"liked"`)

* `favorited` (value: `"favorited"`)

* `saved` (value: `"saved"`)

* `disliked` (value: `"disliked"`)

* `purchased` (value: `"purchased"`)

* `commentedOn` (value: `"commentedOn"`)

* `created` (value: `"created"`)

* `viewed` (value: `"viewed"`)

* `reported` (value: `"reported"`)

* `blocked` (value: `"blocked"`)

* `deleted` (value: `"deleted"`)

* `authored` (value: `"authored"`)

* `used` (value: `"used"`)

* `dismissed` (value: `"dismissed"`)

* `loggedIn` (value: `"loggedIn"`)

* `taggedWith` (value: `"taggedWith"`)

* `categorizedIn` (value: `"categorizedIn"`)

* `interestedIn` (value: `"interestedIn"`)

* `locatedIn` (value: `"locatedIn"`)

* `readQuarter` (value: `"readQuarter"`)

* `readHalf` (value: `"readHalf"`)

* `readAll` (value: `"readAll"`)

* `subscribedTo` (value: `"subscribedTo"`)

* `subscribedFrom` (value: `"subscribedFrom"`)

* `addedTo` (value: `"addedTo"`)

* `madeBy` (value: `"madeBy"`)

* `pausedOn` (value: `"pausedOn"`)





## Enum: ContentObjectTypeEnum


* `user` (value: `"user"`)

* `product` (value: `"product"`)

* `image` (value: `"image"`)

* `comment` (value: `"comment"`)

* `article` (value: `"article"`)

* `post` (value: `"post"`)

* `video` (value: `"video"`)

* `content` (value: `"content"`)

* `tag` (value: `"tag"`)

* `category` (value: `"category"`)

* `app` (value: `"app"`)

* `book` (value: `"book"`)

* `person` (value: `"person"`)

* `skill` (value: `"skill"`)

* `job` (value: `"job"`)

* `company` (value: `"company"`)

* `account` (value: `"account"`)

* `card` (value: `"card"`)

* `country` (value: `"country"`)

* `state` (value: `"state"`)

* `film` (value: `"film"`)

* `cart` (value: `"cart"`)





## Enum: ContentTagObjectTypeEnum


* `user` (value: `"user"`)

* `product` (value: `"product"`)

* `image` (value: `"image"`)

* `comment` (value: `"comment"`)

* `article` (value: `"article"`)

* `post` (value: `"post"`)

* `video` (value: `"video"`)

* `content` (value: `"content"`)

* `tag` (value: `"tag"`)

* `category` (value: `"category"`)

* `app` (value: `"app"`)

* `book` (value: `"book"`)

* `person` (value: `"person"`)

* `skill` (value: `"skill"`)

* `job` (value: `"job"`)

* `company` (value: `"company"`)

* `account` (value: `"account"`)

* `card` (value: `"card"`)

* `country` (value: `"country"`)

* `state` (value: `"state"`)

* `film` (value: `"film"`)

* `cart` (value: `"cart"`)




