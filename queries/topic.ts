export const topicsQuery = `
query Topic ($first: Int, $last: Int, $order: TopicsOrder, $query: String, $followedByUserid: ID, $after: String, $before: String) {
    topics (
        followedByUserid: $followedByUserid
        query: $query
        order: $order
        after: $after
        first: $first
        last: $last
        before: $before
    ) {
        totalCount
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
        nodes {
            createdAt
            description
            followersCount
            id
            image
            isFollowing
            name
            postsCount
            slug
            url
        }
        edges {
            cursor
        }
    }
}
`