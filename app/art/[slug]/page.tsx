import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { groq } from 'next-sanity'
import Link from 'next/link'

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

export default async function ArtDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const art = await client.fetch(ART_BY_SLUG_QUERY, {
    slug: params.slug,
  })

  if (!art) {
    return (
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Art not found</h2>
        <Link href="/gallery">← Back to Gallery</Link>
      </main>
    )
  }

  const phone = '916374781871'
  const imageUrl = art.image ? urlFor(art.image).width(800).url() : ''

  const message = `Hi! 👋
I'm interested in purchasing this beautiful *${art.name}* painting.

📐 Size: ${art.size || 'N/A'}
💰 Price: Rs. ${art.price?.toLocaleString('en-IN')}
🖼️ ${imageUrl}

I really loved this artwork and would like to know if it is available for purchase. Please share the details regarding delivery and payment.`

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <main className="art-detail">

      <div className="art-detail-back">
        <Link href="/gallery">← Back to Gallery</Link>
      </div>

      <div className="art-detail-container">

        {/* LEFT — Image */}
        <div className="art-detail-image-wrapper">
          {art.image && (
            <img
              src={urlFor(art.image).width(800).url()}
              alt={art.name}
              className="art-detail-img"
            />
          )}
        </div>

        {/* RIGHT — Details */}
        <div className="art-detail-info">

          {art.category && (
            <span className="gallery-tag">{art.category}</span>
          )}

          <h1>{art.name}</h1>

          <p className="art-detail-price">
            ₹ {art.price?.toLocaleString('en-IN')}
          </p>

          {art.size && (
            <p className="art-detail-meta">
              <strong>Size:</strong> {art.size}
            </p>
          )}

          {art.medium && (
            <p className="art-detail-meta">
              <strong>Medium:</strong> {art.medium}
            </p>
          )}

          {art.description && (
            <p className="art-detail-description">
              {art.description}
            </p>
          )}

          {art.available === false ? (
            <div className="art-sold-badge">SOLD</div>
          ) : (
            <a
            href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="whatsapp-btn">
                🟢 Buy via WhatsApp
              </button>
            </a>
          )}

        </div>
      </div>
    </main>
  )
}