import { client } from '../../sanity/lib/client'
import { ARTWORKS_QUERY } from '../../sanity/lib/queries'
import GalleryClient from '../../components/GalleryClient'

export const revalidate = 60

export default async function GalleryPage() {
  const artworks = await client.fetch(ARTWORKS_QUERY)

  return <GalleryClient artworks={artworks} />
}