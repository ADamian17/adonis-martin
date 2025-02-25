type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  Quality: { input: any; output: any };
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAsset = {
  contentType: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulContentfulMetadata;
  description: Maybe<Scalars["String"]["output"]>;
  fileName: Maybe<Scalars["String"]["output"]>;
  height: Maybe<Scalars["Int"]["output"]>;
  linkedFrom: Maybe<ContentfulAssetLinkingCollections>;
  size: Maybe<Scalars["Int"]["output"]>;
  sys: ContentfulSys;
  title: Maybe<Scalars["String"]["output"]>;
  url: Maybe<Scalars["String"]["output"]>;
  width: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetContentTypeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetFileNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetHeightArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetSizeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  transform: InputMaybe<ContentfulImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
type ContentfulAssetWidthArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

type ContentfulAssetCollection = {
  items: Array<Maybe<ContentfulAsset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulAssetFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulAssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulAssetFilter>>>;
  contentType: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height: InputMaybe<Scalars["Int"]["input"]>;
  height_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt: InputMaybe<Scalars["Int"]["input"]>;
  height_gte: InputMaybe<Scalars["Int"]["input"]>;
  height_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt: InputMaybe<Scalars["Int"]["input"]>;
  height_lte: InputMaybe<Scalars["Int"]["input"]>;
  height_not: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size: InputMaybe<Scalars["Int"]["input"]>;
  size_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt: InputMaybe<Scalars["Int"]["input"]>;
  size_gte: InputMaybe<Scalars["Int"]["input"]>;
  size_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt: InputMaybe<Scalars["Int"]["input"]>;
  size_lte: InputMaybe<Scalars["Int"]["input"]>;
  size_not: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url: InputMaybe<Scalars["String"]["input"]>;
  url_contains: InputMaybe<Scalars["String"]["input"]>;
  url_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains: InputMaybe<Scalars["String"]["input"]>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width: InputMaybe<Scalars["Int"]["input"]>;
  width_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt: InputMaybe<Scalars["Int"]["input"]>;
  width_gte: InputMaybe<Scalars["Int"]["input"]>;
  width_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt: InputMaybe<Scalars["Int"]["input"]>;
  width_lte: InputMaybe<Scalars["Int"]["input"]>;
  width_not: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

type ContentfulAssetLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  heroBannerCollection: Maybe<ContentfulHeroBannerCollection>;
  projectCollection: Maybe<ContentfulProjectCollection>;
  seoCollection: Maybe<ContentfulSeoCollection>;
};

type ContentfulAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulAssetLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulAssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulAssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulAssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

type ContentfulContentfulMetadata = {
  concepts: Array<Maybe<ContentfulTaxonomyConcept>>;
  tags: Array<Maybe<ContentfulContentfulTag>>;
};

type ContentfulContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulContentfulMetadataConceptsFilter = {
  descendants: InputMaybe<ContentfulContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulContentfulMetadataFilter = {
  concepts: InputMaybe<ContentfulContentfulMetadataConceptsFilter>;
  concepts_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  tags: InputMaybe<ContentfulContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
type ContentfulContentfulTag = {
  id: Maybe<Scalars["String"]["output"]>;
  name: Maybe<Scalars["String"]["output"]>;
};

type ContentfulEntry = {
  contentfulMetadata: ContentfulContentfulMetadata;
  sys: ContentfulSys;
};

type ContentfulEntryCollection = {
  items: Array<Maybe<ContentfulEntry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulEntryFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulEntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulEntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  sys: InputMaybe<ContentfulSysFilter>;
};

enum ContentfulEntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/footer) */
type ContentfulFooter = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    footerNavCollection: Maybe<ContentfulFooterFooterNavCollection>;
    headline: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulFooterLinkingCollections>;
    subcopy: Maybe<Scalars["String"]["output"]>;
    sys: ContentfulSys;
  };

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/footer) */
type ContentfulFooterFooterNavCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulFooterFooterNavCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuItemFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/footer) */
type ContentfulFooterHeadlineArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/footer) */
type ContentfulFooterLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/footer) */
type ContentfulFooterSubcopyArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

type ContentfulFooterCollection = {
  items: Array<Maybe<ContentfulFooter>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulFooterFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulFooterFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulFooterFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  footerNav: InputMaybe<ContentfulCfMenuItemNestedFilter>;
  footerNavCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  headline: InputMaybe<Scalars["String"]["input"]>;
  headline_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  headline_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  headline_not: InputMaybe<Scalars["String"]["input"]>;
  headline_not_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subcopy: InputMaybe<Scalars["String"]["input"]>;
  subcopy_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  subcopy_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subcopy_not: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulFooterFooterNavCollection = {
  items: Array<Maybe<ContentfulMenuItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulFooterFooterNavCollectionOrder {
  MenuIconAsc = "menuIcon_ASC",
  MenuIconDesc = "menuIcon_DESC",
  MenuLabelAsc = "menuLabel_ASC",
  MenuLabelDesc = "menuLabel_DESC",
  MenuLinkAsc = "menuLink_ASC",
  MenuLinkDesc = "menuLink_DESC",
  MenuTargetAsc = "menuTarget_ASC",
  MenuTargetDesc = "menuTarget_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulFooterLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  pageTemplateCollection: Maybe<ContentfulPageTemplateCollection>;
};

type ContentfulFooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulFooterLinkingCollectionsPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulFooterLinkingCollectionsPageTemplateCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulFooterLinkingCollectionsPageTemplateCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulFooterOrder {
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBanner = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    headline: Maybe<Scalars["String"]["output"]>;
    heroCtaLabel: Maybe<Scalars["String"]["output"]>;
    heroCtaLink: Maybe<Scalars["String"]["output"]>;
    heroImage: Maybe<ContentfulAsset>;
    heroNavCollection: Maybe<ContentfulHeroBannerHeroNavCollection>;
    internalNAme: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulHeroBannerLinkingCollections>;
    subcopy: Maybe<Scalars["String"]["output"]>;
    sys: ContentfulSys;
  };

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerHeadlineArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerHeroCtaLabelArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerHeroCtaLinkArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerHeroImageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerHeroNavCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulHeroBannerHeroNavCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuItemFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerInternalNAmeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/heroBanner) */
type ContentfulHeroBannerSubcopyArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

type ContentfulHeroBannerCollection = {
  items: Array<Maybe<ContentfulHeroBanner>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulHeroBannerFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulHeroBannerFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulHeroBannerFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  headline: InputMaybe<Scalars["String"]["input"]>;
  headline_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  headline_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  headline_not: InputMaybe<Scalars["String"]["input"]>;
  headline_not_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroCtaLabel: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroCtaLabel_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroCtaLabel_not: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_not_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  heroCtaLink: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroCtaLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroCtaLink_not: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroImage_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroNav: InputMaybe<ContentfulCfMenuItemNestedFilter>;
  heroNavCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalNAme: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_contains: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalNAme_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalNAme_not: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  subcopy: InputMaybe<Scalars["String"]["input"]>;
  subcopy_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  subcopy_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subcopy_not: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulHeroBannerHeroNavCollection = {
  items: Array<Maybe<ContentfulMenuItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulHeroBannerHeroNavCollectionOrder {
  MenuIconAsc = "menuIcon_ASC",
  MenuIconDesc = "menuIcon_DESC",
  MenuLabelAsc = "menuLabel_ASC",
  MenuLabelDesc = "menuLabel_DESC",
  MenuLinkAsc = "menuLink_ASC",
  MenuLinkDesc = "menuLink_DESC",
  MenuTargetAsc = "menuTarget_ASC",
  MenuTargetDesc = "menuTarget_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulHeroBannerLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  pageTemplateCollection: Maybe<ContentfulPageTemplateCollection>;
};

type ContentfulHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulHeroBannerLinkingCollectionsPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulHeroBannerLinkingCollectionsPageTemplateCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulHeroBannerLinkingCollectionsPageTemplateCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulHeroBannerOrder {
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  HeroCtaLabelAsc = "heroCtaLabel_ASC",
  HeroCtaLabelDesc = "heroCtaLabel_DESC",
  HeroCtaLinkAsc = "heroCtaLink_ASC",
  HeroCtaLinkDesc = "heroCtaLink_DESC",
  InternalNAmeAsc = "internalNAme_ASC",
  InternalNAmeDesc = "internalNAme_DESC",
  SubcopyAsc = "subcopy_ASC",
  SubcopyDesc = "subcopy_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

enum ContentfulImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

enum ContentfulImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

type ContentfulImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ContentfulImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ContentfulImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ContentfulImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars["Dimension"]["input"]>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroup) */
type ContentfulMenuGroup = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    featuredPagesCollection: Maybe<ContentfulMenuGroupFeaturedPagesCollection>;
    groupLink: Maybe<ContentfulMenuGroupGroupLink>;
    groupName: Maybe<Scalars["String"]["output"]>;
    internalTitle: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulMenuGroupLinkingCollections>;
    sys: ContentfulSys;
  };

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroup) */
type ContentfulMenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuGroupFeaturedPagesFilter>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroup) */
type ContentfulMenuGroupGroupLinkArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<ContentfulMenuGroupGroupLinkFilter>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroup) */
type ContentfulMenuGroupGroupNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroup) */
type ContentfulMenuGroupInternalTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroup) */
type ContentfulMenuGroupLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulMenuGroupCollection = {
  items: Array<Maybe<ContentfulMenuGroup>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** A group of items making up a section in the navigation submenu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroupColumn) */
type ContentfulMenuGroupColumn = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    groupLinkCollection: Maybe<ContentfulMenuGroupColumnGroupLinkCollection>;
    internalTitle: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulMenuGroupColumnLinkingCollections>;
    sys: ContentfulSys;
  };

/** A group of items making up a section in the navigation submenu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroupColumn) */
type ContentfulMenuGroupColumnGroupLinkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulMenuGroupColumnGroupLinkCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulNavigationMenuFilter>;
};

/** A group of items making up a section in the navigation submenu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroupColumn) */
type ContentfulMenuGroupColumnInternalTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** A group of items making up a section in the navigation submenu [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuGroupColumn) */
type ContentfulMenuGroupColumnLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulMenuGroupColumnCollection = {
  items: Array<Maybe<ContentfulMenuGroupColumn>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulMenuGroupColumnFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulMenuGroupColumnFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulMenuGroupColumnFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  groupLink: InputMaybe<ContentfulCfNavigationMenuNestedFilter>;
  groupLinkCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalTitle: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_contains: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalTitle_not: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulMenuGroupColumnGroupLinkCollection = {
  items: Array<Maybe<ContentfulNavigationMenu>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulMenuGroupColumnGroupLinkCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulMenuGroupColumnLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
};

type ContentfulMenuGroupColumnLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulMenuGroupColumnOrder {
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulMenuGroupFeaturedPagesCollection = {
  items: Array<Maybe<ContentfulMenuGroupFeaturedPagesItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulMenuGroupFeaturedPagesFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulMenuGroupFeaturedPagesFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulMenuGroupFeaturedPagesFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  extraSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  pageContent_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName: InputMaybe<Scalars["String"]["input"]>;
  pageName_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageName_not: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  seo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  topSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulMenuGroupFeaturedPagesItem = ContentfulPage;

type ContentfulMenuGroupFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulMenuGroupFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulMenuGroupFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  featuredPages: InputMaybe<ContentfulCffeaturedPagesMultiTypeNestedFilter>;
  featuredPagesCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  groupLink: InputMaybe<ContentfulCfgroupLinkMultiTypeNestedFilter>;
  groupLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  groupName: InputMaybe<Scalars["String"]["input"]>;
  groupName_contains: InputMaybe<Scalars["String"]["input"]>;
  groupName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  groupName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  groupName_not: InputMaybe<Scalars["String"]["input"]>;
  groupName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  groupName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalTitle: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_contains: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalTitle_not: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulMenuGroupGroupLink = ContentfulPage;

type ContentfulMenuGroupGroupLinkFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulMenuGroupGroupLinkFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulMenuGroupGroupLinkFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  extraSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  pageContent_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName: InputMaybe<Scalars["String"]["input"]>;
  pageName_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageName_not: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  seo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  topSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulMenuGroupLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  navigationMenuCollection: Maybe<ContentfulNavigationMenuCollection>;
};

type ContentfulMenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulMenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulMenuGroupLinkingCollectionsNavigationMenuCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulMenuGroupLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulMenuGroupOrder {
  GroupNameAsc = "groupName_ASC",
  GroupNameDesc = "groupName_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuItem) */
type ContentfulMenuItem = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    linkedFrom: Maybe<ContentfulMenuItemLinkingCollections>;
    menuIcon: Maybe<Scalars["String"]["output"]>;
    menuLabel: Maybe<Scalars["String"]["output"]>;
    menuLink: Maybe<Scalars["String"]["output"]>;
    menuTarget: Maybe<Scalars["String"]["output"]>;
    sys: ContentfulSys;
  };

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuItem) */
type ContentfulMenuItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuItem) */
type ContentfulMenuItemMenuIconArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuItem) */
type ContentfulMenuItemMenuLabelArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuItem) */
type ContentfulMenuItemMenuLinkArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/menuItem) */
type ContentfulMenuItemMenuTargetArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

type ContentfulMenuItemCollection = {
  items: Array<Maybe<ContentfulMenuItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulMenuItemFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulMenuItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulMenuItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  menuIcon: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_contains: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuIcon_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuIcon_not: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLabel: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuLabel_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLabel_not: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLink: InputMaybe<Scalars["String"]["input"]>;
  menuLink_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLink_not: InputMaybe<Scalars["String"]["input"]>;
  menuLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuTarget: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_contains: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuTarget_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuTarget_not: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulMenuItemLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  footerCollection: Maybe<ContentfulFooterCollection>;
  heroBannerCollection: Maybe<ContentfulHeroBannerCollection>;
};

type ContentfulMenuItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulMenuItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulMenuItemLinkingCollectionsFooterCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulMenuItemLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulMenuItemLinkingCollectionsHeroBannerCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulMenuItemLinkingCollectionsFooterCollectionOrder {
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulMenuItemLinkingCollectionsHeroBannerCollectionOrder {
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  HeroCtaLabelAsc = "heroCtaLabel_ASC",
  HeroCtaLabelDesc = "heroCtaLabel_DESC",
  HeroCtaLinkAsc = "heroCtaLink_ASC",
  HeroCtaLinkDesc = "heroCtaLink_DESC",
  InternalNAmeAsc = "internalNAme_ASC",
  InternalNAmeDesc = "internalNAme_DESC",
  SubcopyAsc = "subcopy_ASC",
  SubcopyDesc = "subcopy_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulMenuItemOrder {
  MenuIconAsc = "menuIcon_ASC",
  MenuIconDesc = "menuIcon_DESC",
  MenuLabelAsc = "menuLabel_ASC",
  MenuLabelDesc = "menuLabel_DESC",
  MenuLinkAsc = "menuLink_ASC",
  MenuLinkDesc = "menuLink_DESC",
  MenuTargetAsc = "menuTarget_ASC",
  MenuTargetDesc = "menuTarget_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/navigationMenu) */
type ContentfulNavigationMenu = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    internalName: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulNavigationMenuLinkingCollections>;
    menuItemsCollection: Maybe<ContentfulNavigationMenuMenuItemsCollection>;
    sys: ContentfulSys;
  };

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/navigationMenu) */
type ContentfulNavigationMenuInternalNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/navigationMenu) */
type ContentfulNavigationMenuLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/navigationMenu) */
type ContentfulNavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulNavigationMenuMenuItemsCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuGroupFilter>;
};

type ContentfulNavigationMenuCollection = {
  items: Array<Maybe<ContentfulNavigationMenu>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulNavigationMenuFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulNavigationMenuFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulNavigationMenuFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  menuItems: InputMaybe<ContentfulCfMenuGroupNestedFilter>;
  menuItemsCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulNavigationMenuLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  menuGroupColumnCollection: Maybe<ContentfulMenuGroupColumnCollection>;
};

type ContentfulNavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulNavigationMenuLinkingCollectionsMenuGroupColumnCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulNavigationMenuLinkingCollectionsMenuGroupColumnCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulNavigationMenuLinkingCollectionsMenuGroupColumnCollectionOrder {
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulNavigationMenuMenuItemsCollection = {
  items: Array<Maybe<ContentfulMenuGroup>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulNavigationMenuMenuItemsCollectionOrder {
  GroupNameAsc = "groupName_ASC",
  GroupNameDesc = "groupName_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulNavigationMenuOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPage = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    extraSectionCollection: Maybe<ContentfulPageExtraSectionCollection>;
    internalName: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulPageLinkingCollections>;
    pageContent: Maybe<ContentfulEntry>;
    pageName: Maybe<Scalars["String"]["output"]>;
    seo: Maybe<ContentfulSeo>;
    slug: Maybe<Scalars["String"]["output"]>;
    sys: ContentfulSys;
    topSectionCollection: Maybe<ContentfulPageTopSectionCollection>;
  };

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPageInternalNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPagePageContentArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPagePageNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPageSeoArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<ContentfulSeoFilter>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPageSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/page) */
type ContentfulPageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulPageCollection = {
  items: Array<Maybe<ContentfulPage>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulPageExtraSectionCollection = {
  items: Array<Maybe<ContentfulEntry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulPageFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulPageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulPageFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  extraSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  pageContent_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName: InputMaybe<Scalars["String"]["input"]>;
  pageName_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageName_not: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  seo: InputMaybe<ContentfulCfSeoNestedFilter>;
  seo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  topSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulPageLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  menuGroupCollection: Maybe<ContentfulMenuGroupCollection>;
};

type ContentfulPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulPageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulPageLinkingCollectionsMenuGroupCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulPageLinkingCollectionsMenuGroupCollectionOrder {
  GroupNameAsc = "groupName_ASC",
  GroupNameDesc = "groupName_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulPageOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  PageNameAsc = "pageName_ASC",
  PageNameDesc = "pageName_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplate = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    footerSection: Maybe<ContentfulFooter>;
    heroSection: Maybe<ContentfulHeroBanner>;
    internalName: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulPageTemplateLinkingCollections>;
    projectsSectionCollection: Maybe<ContentfulPageTemplateProjectsSectionCollection>;
    seo: Maybe<ContentfulSeo>;
    skillsSectionCollection: Maybe<ContentfulPageTemplateSkillsSectionCollection>;
    sys: ContentfulSys;
  };

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateFooterSectionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<ContentfulFooterFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateHeroSectionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<ContentfulHeroBannerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateInternalNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateProjectsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulPageTemplateProjectsSectionCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulProjectFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateSeoArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<ContentfulSeoFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/pageTemplate) */
type ContentfulPageTemplateSkillsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulPageTemplateSkillsSectionCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulSkillFilter>;
};

type ContentfulPageTemplateCollection = {
  items: Array<Maybe<ContentfulPageTemplate>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulPageTemplateFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulPageTemplateFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulPageTemplateFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  footerSection: InputMaybe<ContentfulCfFooterNestedFilter>;
  footerSection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroSection: InputMaybe<ContentfulCfHeroBannerNestedFilter>;
  heroSection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  projectsSection: InputMaybe<ContentfulCfProjectNestedFilter>;
  projectsSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  seo: InputMaybe<ContentfulCfSeoNestedFilter>;
  seo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  skillsSection: InputMaybe<ContentfulCfSkillNestedFilter>;
  skillsSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulPageTemplateLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
};

type ContentfulPageTemplateLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulPageTemplateOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulPageTemplateProjectsSectionCollection = {
  items: Array<Maybe<ContentfulProject>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulPageTemplateProjectsSectionCollectionOrder {
  CodebaseLinkAsc = "codebaseLink_ASC",
  CodebaseLinkDesc = "codebaseLink_DESC",
  DemoLinkAsc = "demoLink_ASC",
  DemoLinkDesc = "demoLink_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulPageTemplateSkillsSectionCollection = {
  items: Array<Maybe<ContentfulSkill>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulPageTemplateSkillsSectionCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulPageTopSectionCollection = {
  items: Array<Maybe<ContentfulEntry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProject = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    codebaseLink: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulContentfulMetadata;
    demoLink: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulProjectLinkingCollections>;
    name: Maybe<Scalars["String"]["output"]>;
    projectImage: Maybe<ContentfulAsset>;
    sys: ContentfulSys;
    techUsedCollection: Maybe<ContentfulProjectTechUsedCollection>;
  };

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProjectCodebaseLinkArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProjectDemoLinkArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProjectNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProjectProjectImageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/project) */
type ContentfulProjectTechUsedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulProjectTechUsedCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulSkillFilter>;
};

type ContentfulProjectCollection = {
  items: Array<Maybe<ContentfulProject>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulProjectFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulProjectFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulProjectFilter>>>;
  codebaseLink: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_contains: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  codebaseLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  codebaseLink_not: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  demoLink: InputMaybe<Scalars["String"]["input"]>;
  demoLink_contains: InputMaybe<Scalars["String"]["input"]>;
  demoLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  demoLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  demoLink_not: InputMaybe<Scalars["String"]["input"]>;
  demoLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  demoLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  projectImage_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
  techUsed: InputMaybe<ContentfulCfSkillNestedFilter>;
  techUsedCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulProjectLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  pageTemplateCollection: Maybe<ContentfulPageTemplateCollection>;
};

type ContentfulProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulProjectLinkingCollectionsPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulProjectLinkingCollectionsPageTemplateCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulProjectLinkingCollectionsPageTemplateCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulProjectOrder {
  CodebaseLinkAsc = "codebaseLink_ASC",
  CodebaseLinkDesc = "codebaseLink_DESC",
  DemoLinkAsc = "demoLink_ASC",
  DemoLinkDesc = "demoLink_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulProjectTechUsedCollection = {
  items: Array<Maybe<ContentfulSkill>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

enum ContentfulProjectTechUsedCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulQuery = {
  _node: Maybe<Contentful_Node>;
  asset: Maybe<ContentfulAsset>;
  assetCollection: Maybe<ContentfulAssetCollection>;
  entryCollection: Maybe<ContentfulEntryCollection>;
  footer: Maybe<ContentfulFooter>;
  footerCollection: Maybe<ContentfulFooterCollection>;
  heroBanner: Maybe<ContentfulHeroBanner>;
  heroBannerCollection: Maybe<ContentfulHeroBannerCollection>;
  menuGroup: Maybe<ContentfulMenuGroup>;
  menuGroupCollection: Maybe<ContentfulMenuGroupCollection>;
  menuGroupColumn: Maybe<ContentfulMenuGroupColumn>;
  menuGroupColumnCollection: Maybe<ContentfulMenuGroupColumnCollection>;
  menuItem: Maybe<ContentfulMenuItem>;
  menuItemCollection: Maybe<ContentfulMenuItemCollection>;
  navigationMenu: Maybe<ContentfulNavigationMenu>;
  navigationMenuCollection: Maybe<ContentfulNavigationMenuCollection>;
  page: Maybe<ContentfulPage>;
  pageCollection: Maybe<ContentfulPageCollection>;
  pageTemplate: Maybe<ContentfulPageTemplate>;
  pageTemplateCollection: Maybe<ContentfulPageTemplateCollection>;
  project: Maybe<ContentfulProject>;
  projectCollection: Maybe<ContentfulProjectCollection>;
  seo: Maybe<ContentfulSeo>;
  seoCollection: Maybe<ContentfulSeoCollection>;
  skill: Maybe<ContentfulSkill>;
  skillCollection: Maybe<ContentfulSkillCollection>;
};

type ContentfulQuery_NodeArgs = {
  id: Scalars["ID"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulAssetOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulAssetFilter>;
};

type ContentfulQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulEntryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulEntryFilter>;
};

type ContentfulQueryFooterArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulFooterOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulFooterFilter>;
};

type ContentfulQueryHeroBannerArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulHeroBannerOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulHeroBannerFilter>;
};

type ContentfulQueryMenuGroupArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulMenuGroupOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuGroupFilter>;
};

type ContentfulQueryMenuGroupColumnArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryMenuGroupColumnCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulMenuGroupColumnOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuGroupColumnFilter>;
};

type ContentfulQueryMenuItemArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulMenuItemOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulMenuItemFilter>;
};

type ContentfulQueryNavigationMenuArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulNavigationMenuOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulNavigationMenuFilter>;
};

type ContentfulQueryPageArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulPageOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulPageFilter>;
};

type ContentfulQueryPageTemplateArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulPageTemplateOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulPageTemplateFilter>;
};

type ContentfulQueryProjectArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulProjectOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulProjectFilter>;
};

type ContentfulQuerySeoArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulSeoOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulSeoFilter>;
};

type ContentfulQuerySkillArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulQuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulSkillOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContentfulSkillFilter>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeo = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    description: Maybe<Scalars["String"]["output"]>;
    image: Maybe<ContentfulAsset>;
    linkedFrom: Maybe<ContentfulSeoLinkingCollections>;
    name: Maybe<Scalars["String"]["output"]>;
    noFollow: Maybe<Scalars["Boolean"]["output"]>;
    noIndex: Maybe<Scalars["Boolean"]["output"]>;
    sys: ContentfulSys;
    title: Maybe<Scalars["String"]["output"]>;
  };

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoImageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoNoFollowArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoNoIndexArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/seo) */
type ContentfulSeoTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

type ContentfulSeoCollection = {
  items: Array<Maybe<ContentfulSeo>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulSeoFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulSeoFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulSeoFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  noFollow: InputMaybe<Scalars["Boolean"]["input"]>;
  noFollow_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  noFollow_not: InputMaybe<Scalars["Boolean"]["input"]>;
  noIndex: InputMaybe<Scalars["Boolean"]["input"]>;
  noIndex_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  noIndex_not: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulSeoLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  pageCollection: Maybe<ContentfulPageCollection>;
  pageTemplateCollection: Maybe<ContentfulPageTemplateCollection>;
};

type ContentfulSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulSeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulSeoLinkingCollectionsPageCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulSeoLinkingCollectionsPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulSeoLinkingCollectionsPageTemplateCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulSeoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  PageNameAsc = "pageName_ASC",
  PageNameDesc = "pageName_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulSeoLinkingCollectionsPageTemplateCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulSeoOrder {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  NoFollowAsc = "noFollow_ASC",
  NoFollowDesc = "noFollow_DESC",
  NoIndexAsc = "noIndex_ASC",
  NoIndexDesc = "noIndex_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/skill) */
type ContentfulSkill = ContentfulEntry &
  Contentful_Node & {
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulContentfulMetadata;
    internalName: Maybe<Scalars["String"]["output"]>;
    linkedFrom: Maybe<ContentfulSkillLinkingCollections>;
    sys: ContentfulSys;
  };

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/skill) */
type ContentfulSkillInternalNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/cbq4yubvgr8j/content_types/skill) */
type ContentfulSkillLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulSkillCollection = {
  items: Array<Maybe<ContentfulSkill>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

type ContentfulSkillFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulSkillFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulSkillFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulSkillLinkingCollections = {
  entryCollection: Maybe<ContentfulEntryCollection>;
  pageTemplateCollection: Maybe<ContentfulPageTemplateCollection>;
  projectCollection: Maybe<ContentfulProjectCollection>;
};

type ContentfulSkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulSkillLinkingCollectionsPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<
      InputMaybe<ContentfulSkillLinkingCollectionsPageTemplateCollectionOrder>
    >
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

type ContentfulSkillLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<ContentfulSkillLinkingCollectionsProjectCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

enum ContentfulSkillLinkingCollectionsPageTemplateCollectionOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulSkillLinkingCollectionsProjectCollectionOrder {
  CodebaseLinkAsc = "codebaseLink_ASC",
  CodebaseLinkDesc = "codebaseLink_DESC",
  DemoLinkAsc = "demoLink_ASC",
  DemoLinkDesc = "demoLink_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

enum ContentfulSkillOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

type ContentfulSys = {
  environmentId: Scalars["String"]["output"];
  firstPublishedAt: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  /** The locale that was requested. */
  locale: Maybe<Scalars["String"]["output"]>;
  publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

type ContentfulSysFilter = {
  firstPublishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id: InputMaybe<Scalars["String"]["input"]>;
  id_contains: InputMaybe<Scalars["String"]["input"]>;
  id_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains: InputMaybe<Scalars["String"]["input"]>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  publishedVersion_lt: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
type ContentfulTaxonomyConcept = {
  id: Maybe<Scalars["String"]["output"]>;
};

type Contentful_Node = {
  _id: Scalars["ID"]["output"];
};

type ContentfulCfFooterNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfFooterNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfFooterNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  footerNavCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  headline: InputMaybe<Scalars["String"]["input"]>;
  headline_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  headline_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  headline_not: InputMaybe<Scalars["String"]["input"]>;
  headline_not_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subcopy: InputMaybe<Scalars["String"]["input"]>;
  subcopy_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  subcopy_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subcopy_not: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulCfHeroBannerNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfHeroBannerNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfHeroBannerNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  headline: InputMaybe<Scalars["String"]["input"]>;
  headline_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  headline_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  headline_not: InputMaybe<Scalars["String"]["input"]>;
  headline_not_contains: InputMaybe<Scalars["String"]["input"]>;
  headline_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroCtaLabel: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroCtaLabel_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroCtaLabel_not: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_not_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLabel_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  heroCtaLink: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroCtaLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroCtaLink_not: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  heroCtaLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  heroImage_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  heroNavCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalNAme: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_contains: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalNAme_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalNAme_not: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalNAme_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  subcopy: InputMaybe<Scalars["String"]["input"]>;
  subcopy_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  subcopy_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subcopy_not: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_contains: InputMaybe<Scalars["String"]["input"]>;
  subcopy_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulCfMenuGroupNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfMenuGroupNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfMenuGroupNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  featuredPagesCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  groupLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  groupName: InputMaybe<Scalars["String"]["input"]>;
  groupName_contains: InputMaybe<Scalars["String"]["input"]>;
  groupName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  groupName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  groupName_not: InputMaybe<Scalars["String"]["input"]>;
  groupName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  groupName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalTitle: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_contains: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalTitle_not: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalTitle_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulCfMenuItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfMenuItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfMenuItemNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  menuIcon: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_contains: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuIcon_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuIcon_not: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuIcon_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLabel: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuLabel_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLabel_not: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLabel_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLink: InputMaybe<Scalars["String"]["input"]>;
  menuLink_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuLink_not: InputMaybe<Scalars["String"]["input"]>;
  menuLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuTarget: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_contains: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  menuTarget_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  menuTarget_not: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_not_contains: InputMaybe<Scalars["String"]["input"]>;
  menuTarget_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulCfNavigationMenuNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfNavigationMenuNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfNavigationMenuNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  menuItemsCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulCfProjectNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfProjectNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfProjectNestedFilter>>>;
  codebaseLink: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_contains: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  codebaseLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  codebaseLink_not: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  codebaseLink_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  demoLink: InputMaybe<Scalars["String"]["input"]>;
  demoLink_contains: InputMaybe<Scalars["String"]["input"]>;
  demoLink_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  demoLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  demoLink_not: InputMaybe<Scalars["String"]["input"]>;
  demoLink_not_contains: InputMaybe<Scalars["String"]["input"]>;
  demoLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  projectImage_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
  techUsedCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulCfSeoNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfSeoNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfSeoNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  noFollow: InputMaybe<Scalars["Boolean"]["input"]>;
  noFollow_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  noFollow_not: InputMaybe<Scalars["Boolean"]["input"]>;
  noIndex: InputMaybe<Scalars["Boolean"]["input"]>;
  noIndex_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  noIndex_not: InputMaybe<Scalars["Boolean"]["input"]>;
  sys: InputMaybe<ContentfulSysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ContentfulCfSkillNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulCfSkillNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfSkillNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sys: InputMaybe<ContentfulSysFilter>;
};

type ContentfulCffeaturedPagesMultiTypeNestedFilter = {
  AND: InputMaybe<
    Array<InputMaybe<ContentfulCffeaturedPagesMultiTypeNestedFilter>>
  >;
  OR: InputMaybe<
    Array<InputMaybe<ContentfulCffeaturedPagesMultiTypeNestedFilter>>
  >;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  extraSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  pageContent_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName: InputMaybe<Scalars["String"]["input"]>;
  pageName_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageName_not: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  seo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  topSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ContentfulCfgroupLinkMultiTypeNestedFilter = {
  AND: InputMaybe<
    Array<InputMaybe<ContentfulCfgroupLinkMultiTypeNestedFilter>>
  >;
  OR: InputMaybe<Array<InputMaybe<ContentfulCfgroupLinkMultiTypeNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  extraSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  pageContent_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName: InputMaybe<Scalars["String"]["input"]>;
  pageName_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  pageName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageName_not: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  pageName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  seo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  topSectionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};
