import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { groq } from 'next-sanity'
import ArtDetailClient from '@/components/ArtDetailClient'

export const revalidate = 60

const ART_BY_SLUG_QUERY = groq`
  *[_type == "artwork" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    price,
    category,
    size,
    medium,
    description,
    available
  }
`

const RELATED_ARTS_QUERY = groq`
  *[_type == "artwork" && slug.current != $slug && category == $category] | order(_createdAt desc) [0...3] {
    _id,
    name,
    slug,
    image,
    price,
    category
  }
`

export default async function ArtDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const art = await client.fetch(ART_BY_SLUG_QUERY, { slug })

  if (!art) {
    return (
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Art not found</h2>
      </main>
    )
  }

  const relatedArts = await client.fetch(RELATED_ARTS_QUERY, {
    slug,
    category: art.category,
  })

  const phone = '916374781871'
  const imageUrl = art.image ? urlFor(art.image).width(800).url() : ''
  const pageUrl = `https://pattachitra.vercel.app/art/${slug}`

  const whatsappMessage = `Hi! 👋
I'm interested in purchasing this beautiful *${art.name}* painting.

📐 Size: ${art.size || 'N/A'}
💰 Price: Rs. ${art.price?.toLocaleString('en-IN')}
🖼️ ${imageUrl}

I really loved this artwork and would like to know if it is available for purchase. Please share the details regarding delivery and payment.`

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`
  const shareWhatsapp = `https://wa.me/?text=${encodeURIComponent(`Check out this beautiful Pattachitra art: ${art.name}\n${pageUrl}`)}`

  const relatedImageUrls = relatedArts.map((r: any) =>
    r.image ? urlFor(r.image).width(400).url() : ''
  )

  return (
    <ArtDetailClient
      art={art}
      relatedArts={relatedArts}
      whatsappUrl={whatsappUrl}
      shareWhatsapp={shareWhatsapp}
      pageUrl={pageUrl}
      imageUrl={imageUrl}
      relatedImageUrls={relatedImageUrls}
    />
  )
}