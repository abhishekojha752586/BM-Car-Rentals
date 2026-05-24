import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`

// Get more posts for recommendations
export const morePostsQuery = groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...2]`
