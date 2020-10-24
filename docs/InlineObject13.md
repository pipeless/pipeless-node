# Pipeless.InlineObject13

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | [**ObjectLookup**](ObjectLookup.md) |  | 
**contentTaggedRelationshipType** | **String** | The relationship type that represents content being tagged with a tag in your data. If not provided, then tags will not be considered in this algo. | [optional] 
**contentTaggedObjectType** | **String** | The object type that represents a tag in your data. If not provided, and content tagged relationship type was provided, this will default to \&quot;tag\&quot;. | [optional] 
**positiveRel** | **String** | The relationship of a positive action that users (or whatever actor type) can take on the content type. If the value is not provided, then collabrative filtering will not be used in the algo. | [optional] 
**actorObjectType** | **String** | The type of the object that acts on the target content (ex. user). If this value is not provided, and positive rel is set, then this will default to \&quot;user\&quot;. | [optional] 



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





## Enum: PositiveRelEnum


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





## Enum: ActorObjectTypeEnum


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




