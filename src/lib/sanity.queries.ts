import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'


// Posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

// Menu
export const menuQuery = groq`
  *[_type == "menu"] {
    title,
    url,
    newTab,
    children[] {
      title,
      url,
      newTab
    }
  }
`

export async function getMenu(client: SanityClient): Promise<Menu[]> {
  return await client.fetch(menuQuery)
}

export interface Menu {
  _type: 'menu'
  _id: string
  title: string
  url: string
  newTab: string
  children?: MenuItem[]
}

export interface MenuItem {
  title: string
  url: string
  newTab: string
}
