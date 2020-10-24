# Pipeless.InlineObject8

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | [**ObjectLookup**](ObjectLookup.md) |  | 
**followRelationshipTypes** | **[String]** | An array of the relationship types that represent the concept of \&quot;following\&quot; in your data. If none provided, by default the relationship type \&quot;followed\&quot; will be used. | [optional] 
**followObjectTypes** | **[String]** | An array of the object types that can be followed in your dataset and that you want to be used for this activity feed. If none provided, by default any object type that is found based on the allowed follow_relationship_types will be used. | [optional] 
**eventRelationshipTypes** | **[String]** | An array of the relationship types of the actions you want to show up in the activity feed. If none provided, by default any relationships that are present in the resulting feed items will be returned. | [optional] 
**eventObjectTypes** | **[String]** | An array of the object types that can appear as content in the feed. If none provided, any object type that results from the other settings will be shown in the feed. | [optional] 
**excludeSelfObject** | **Boolean** | If this value is false (the default), then the user you are fetching the feed for can appear in the feed results as an acting user (if the user follows themself) or action user (object that is being acted on by users the user follows). If set to true, the user the feed is being fetched for will not appear in the results. | [optional] 
**limit** | **Number** |  | [optional] 
**before** | **String** |  | [optional] 



## Enum: [FollowRelationshipTypesEnum]


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





## Enum: [FollowObjectTypesEnum]


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





## Enum: [EventRelationshipTypesEnum]


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





## Enum: [EventObjectTypesEnum]


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




