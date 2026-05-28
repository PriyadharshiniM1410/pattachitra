import { defineQuery } from 'next-sanity'

export const ARTWORKS_QUERY = defineQuery(`
  *[_type == "artwork"] | order(_createdAt desc) {
    _id,
    name,
    price,
    size,
    category,
    description,
    image
  }
`)

export const HERO_QUERY = defineQuery(`
  *[_type == "artwork"] | order(_createdAt desc)[0..2] {
    _id,
    name,
    image
  }
`)