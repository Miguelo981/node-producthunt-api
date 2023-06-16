export const postsQuery = `
query Post ($first: Int, $order: PostsOrder, $featured: Boolean, $postedBefore: DateTime, $postedAfter: DateTime, $topic: String, $after: String, $before: String, $twitterUrl: String, $url: String) {
    posts(
        featured: $featured
        postedBefore: $postedBefore
        postedAfter: $postedAfter
        topic: $topic
        order: $order
        after: $after
        first: $first
        before: $before
        twitterUrl: $twitterUrl
        url: $url
    ) {
        totalCount
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
        edges {
            cursor
            node {
                commentsCount
                createdAt
                description
                featuredAt
                id
                isCollected
                isVoted
                name
                reviewsCount
                reviewsRating
                slug
                tagline
                url
                userId
                votesCount
                website
                collections {
                    totalCount
                }
                comments {
                    totalCount
                }
                makers {
                    coverImage
                    createdAt
                    headline
                    id
                    isFollowing
                    isMaker
                    isViewer
                    name
                    profileImage
                    twitterUsername
                    url
                    username
                    websiteUrl
                }
                media {
                    type
                    url
                    videoUrl
                }
                productLinks {
                    type
                    url
                }
                thumbnail {
                    type
                    url
                    videoUrl
                }
                topics {
                    totalCount
                }
                user {
                    coverImage
                    createdAt
                    headline
                    id
                    isFollowing
                    isMaker
                    isViewer
                    name
                    profileImage
                    twitterUsername
                    url
                    username
                    websiteUrl
                }
                votes {
                    totalCount
                }
            }
        }
    }
}
`