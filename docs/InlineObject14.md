# Pipeless.InlineObject14

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | [**ObjectLookup**](ObjectLookup.md) |  | 
**followedRelationshipType** | **String** | The relationship type used to represent a user following another user. If this value is not provided, then collabrative filtering will not be used for the algo. | [optional] [default to &#39;followed&#39;]
**contentTaggedRelationshipType** | **String** | The relationship type that represents content (created by users) being tagged. If this value is not provided, then tag data will not be used for the algo. | [optional] [default to &#39;taggedWith&#39;]
**contentTaggedObjectType** | **String** | The object tyoe that represents a tag for the content a user can publish. If this value is not set, and content tagged relationship type has been set, then this will default to \&quot;tag\&quot;. | [optional] 
**contentObjectType** | **String** | Object type of the content users publish. If this value is not set, and content tagged relationship type has been set, then this value will default to \&quot;post\&quot;. | [optional] 
**contentPublishedRelationshipType** | **String** | Teh relationship type that represents a user publishing content. If this value is not set, and content tagged relationship type has been set, then this value will default to \&quot;posted\&quot;. | [optional] 



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





## Enum: ContentTaggedObjectTypeEnum


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





## Enum: ContentPublishedRelationshipTypeEnum


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




