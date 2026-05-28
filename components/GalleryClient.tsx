'use client'

import { useState } from 'react'
import Link from 'next/link'
import { urlFor } from '../sanity/lib/image'

export default function GalleryClient({
  artworks,
}: {
  artworks: any[]
}) {
  const categories = [
    'ALL',
    ...new Set(
      artworks
        .map((art) => art.category)
        .filter(Boolean)
        .map((cat) => cat.toUpperCase())
    ),
  ]

  const [selected, setSelected] = useState('ALL')

  const filteredArtworks =
    selected === 'ALL'
      ? artworks
      : artworks.filter(
          (art) =>
            art.category &&
            art.category.toUpperCase() === selected
        )

  return (
    <main>
      {/* HEADER */}
      <div className="gallery-header">
        <h1>GALLERY</h1>

        <p>
          A curated collection of hand-painted
          Pattachitra works
        </p>
      </div>

      {/* FILTERS */}
      <div className="gallery-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              selected === cat ? 'active' : ''
            }
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {filteredArtworks.map((art: any) => (
          <Link
            href={`/art/${art.slug?.current}`}
            key={art._id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="gallery-card">
              {art.image && (
                <div className="gallery-image-wrapper">
                  <img
                    src={urlFor(art.image).width(800).url()}
                    alt={art.name}
                    className="gallery-img"
                  />
                </div>
              )}
              <div className="gallery-content">
                {art.category && (
                  <span className="gallery-tag">{art.category}</span>
                )}
                <h3>{art.name}</h3>
                {art.description && (
                  <p>
                    {art.description.length > 500
                      ? art.description.slice(0, 500) + '...'
                      : art.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}