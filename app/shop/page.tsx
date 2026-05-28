import { client } from '../../sanity/lib/client'
import { ARTWORKS_QUERY } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

export default async function ShopPage() {
  const artworks = await client.fetch(ARTWORKS_QUERY)

  return (
    <main>
      <div className="shop-header">
        <h1>SHOP</h1>
        <p>Each piece is hand-painted and one-of-a-kind. Inquire to purchase.</p>
      </div>

      <div className="shop-grid">
  {artworks.map((art: any) => {
    const msg = encodeURIComponent(
      'Hi! I am interested in ' +
        art.name +
        ' priced at Rs.' +
        art.price +
        '. Please share details.'
    )

    return (
      <div className="shop-card" key={art._id}>
        
        {/* IMAGE */}
        {art.image && (
          <div className="shop-image-wrapper">
            <img
              src={urlFor(art.image).width(800).url()}
              alt={art.name}
              className="shop-img"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="shop-info">

          {art.category && (
            <span className="shop-tag">
              {art.category}
            </span>
          )}

          <h3>{art.name}</h3>

          {art.description && (
            <p className="shop-desc">
              {art.description.length > 100
                ? art.description.slice(0, 100) + '...'
                : art.description}
            </p>
          )}

          {art.size && (
            <p className="size">
              Size: {art.size}
            </p>
          )}

          <p className="price">
            ₹ {art.price?.toLocaleString('en-IN')}
          </p>

          <a
            className="wa-btn"
            href={
              'https://wa.me/916374781871?text=' +
              msg
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            INQUIRE ON WHATSAPP
          </a>
        </div>
      </div>
    )
  })}
</div>

      <div className="commission">
        <h2>COMMISSION A CUSTOM PIECE</h2>
        <p>Want a personalised Pattachitra painting? I accept commissions for custom themes, sizes, and stories.</p>
        <Link href="/contact" className="contact-btn">GET IN TOUCH</Link>
      </div>
    </main>
  )
}