import Link from 'next/link'
import Image from 'next/image'
import { client } from '../sanity/lib/client'
import { ARTWORKS_QUERY } from '../sanity/lib/queries'
import { urlFor } from '../sanity/lib/image'
import HeroSlider from '../components/HeroSlider'

export const revalidate = 60

export default async function Home() {
  const artworks = await client.fetch(ARTWORKS_QUERY)

  return (
    <main>
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* ARTIST SECTION */}
      <section className="artist">
        <div className="artist-text">
          <h2>The Art & The Artist</h2>

          <p>
            Pattachitra is a centuries-old tradition of cloth-based scroll
            painting from Odisha. Using natural colours derived from stones,
            leaves, and flowers, each artwork narrates tales from the Puranas
            and epics.
          </p>

          <p>
            As a practitioner of this sacred art, I dedicate each brushstroke
            to preserving our cultural heritage while sharing it with the modern
            world. Every piece is hand-painted using traditional techniques
            passed down through generations.
          </p>
        </div>

        <div className="artist-img">
          <Image
            src="/images/artist.jpg"
            alt="Pattachitra Artist"
            width={500}
            height={400}
            style={{
              borderRadius: '6px',
              objectFit: 'cover',
            }}
          />
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="works">
        <h2>Selected Works</h2>

        <div className="work-grid">
  {artworks.slice(0, 3).map((art: any) => (
    <div className="card" key={art._id}>
      
      {art.image && (
        <div className="image-wrapper">
          <img
            src={urlFor(art.image).width(700).url()}
            alt={art.name}
            className="card-img"
          />
        </div>
      )}

      <div className="card-content">
  

        <h3>{art.name}</h3>

        {art.description && (
          <p>
            {art.description.length > 120
              ? art.description.slice(0, 120) + '...'
              : art.description}
          </p>
        )}

      </div>
    </div>
  ))}
</div>

        <div style={{ marginTop: '40px' }}>
          <Link href="/gallery" className="gallery-btn">VIEW ALL</Link>
        </div>
        <br></br><br></br>
      </section>
    </main>
  )
}