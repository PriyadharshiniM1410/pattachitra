'use client'

import { useState, CSSProperties } from 'react'
import Link from 'next/link'

export default function ArtDetailClient({
  art,
  whatsappUrl,
  shareWhatsapp,
  pageUrl,
  imageUrl,
}: any) {
  const [zoomOpen, setZoomOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <main style={page}>
        {/* Breadcrumb */}
        <nav style={breadcrumb}>
          <Link href="/" style={link}>Home</Link>
          <span>›</span>
          <Link href="/gallery" style={link}>Gallery</Link>
          <span>›</span>
          <span style={{ color: '#111' }}>{art.name}</span>
        </nav>

        {/* GRID */}
        <div style={grid}>
          
          {/* LEFT */}
          <section style={left}>
            
            {art.category && (
              <div style={badgeWrap}>
                <span style={badge}>{art.category}</span>
              </div>
            )}

            <h1 style={title}>{art.name}</h1>

            <div style={divider} />

            <div style={priceBox}>
              <div style={priceLabel}>Price</div>
              <div style={price}>₹ {art.price?.toLocaleString('en-IN')}</div>
            </div>

            <div style={card}>
              <Row label="Size" value={art.size || '-'} />
              <Row label="Medium" value={art.medium || '-'} />
              <Row label="Category" value={art.category || '-'} />
              <Row
                label="Availability"
                value={art.available === false ? 'Sold' : 'Available'}
                highlight={art.available !== false}
              />
            </div>

            {art.description && (
              <div style={descCard}>
                <div style={descTitle}>ABOUT THIS PIECE</div>
                <div style={desc}>{art.description}</div>
              </div>
            )}

            {art.available !== false ? (
              <a href={whatsappUrl} target="_blank">
                <button style={cta}>💬 Enquire on WhatsApp</button>
              </a>
            ) : (
              <div style={sold}>SOLD OUT</div>
            )}

         <div style={shareRow}>
  <button onClick={handleCopy} style={copyBtn}>
    {copied ? '✓ Copied' : 'Copy Link'}
  </button>

  <a href={shareWhatsapp} target="_blank" style={waBtn as any}>
    Share on WhatsApp
  </a>
</div>
          </section>

          {/* RIGHT */}
                {/* RIGHT */}
<section>

  {/* TOP RIGHT BUTTON */}
  <div style={backWrap}>
    <Link href="/gallery" style={backBtn}>
      ← Back to Gallery
    </Link>
  </div>

            <div style={imageWrap} onClick={() => setZoomOpen(true)}>
              <img src={imageUrl} style={img} />
              <div style={hint}>Click to enlarge</div>
            </div>
          </section>
        </div>
      </main>

      {/* ZOOM */}
      {zoomOpen && (
        <div style={zoom} onClick={() => setZoomOpen(false)}>
          <img src={imageUrl} style={zoomImg} />
        </div>
      )}
    </>
  )
}

/* ---------------- PREMIUM DESIGN SYSTEM ---------------- */

const colors = {
  primary: '#b5451b',
  text: '#1a1a1a',
  muted: '#6b6b6b',
  soft: '#f5efe7',
  border: '#e8e2da',
}

/* PAGE */
const page: CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '3.5rem 1.5rem',
  fontFamily: "'Inter', 'Georgia', serif",
  color: colors.text,
  background: '#fcfbf9',
}

/* BREADCRUMB */
const breadcrumb: CSSProperties = {
  display: 'flex',
  gap: 10,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: '#999',
  marginBottom: 30,
}

const link: CSSProperties = {
  textDecoration: 'none',
  color: '#999',
}

/* GRID */
const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 70,
  alignItems: 'start',
}

const left: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
}

/* BADGE */
const badgeWrap: CSSProperties = {
  display: 'inline-block',
}

const badge: CSSProperties = {
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
  background: colors.soft,
  color: colors.primary,
  padding: '6px 14px',
  borderRadius: 30,
  fontWeight: 500,
}

/* TITLE */
const title: CSSProperties = {
  fontSize: 44,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: 'black',
  padding: '6px 14px',
  borderRadius: 30,
  fontWeight: 500,
}
const backWrap: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 14,
}

const backBtn: CSSProperties = {
  padding: '10px 16px',
  background: '#9c1313',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 500,
}

/* DIVIDER */
const divider: CSSProperties = {
  height: 1,
  background: 'linear-gradient(to right, #ddd, transparent)',
}

/* PRICE */
const priceBox: CSSProperties = {
  padding: 20,
  background: 'linear-gradient(135deg, #fff7f0, #fff)',
  borderLeft: `4px solid ${colors.primary}`,
  borderRadius: 8,
}

const priceLabel: CSSProperties = {
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: '#777',
}

const price: CSSProperties = {
  fontSize: 34,
  fontWeight: 700,
  color: colors.primary,
  letterSpacing: '-0.5px',
}

/* CARD */
const card: CSSProperties = {
  border: `1px solid ${colors.border}`,
  borderRadius: 12,
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
}

/* DESCRIPTION */
const descCard: CSSProperties = {
  padding: 16,
  background: '#fbfbfa',
  borderLeft: `3px solid ${colors.primary}`,
}

const descTitle: CSSProperties = {
  fontSize: 12,
  letterSpacing: 2.5,
  color: colors.primary,
  marginBottom: 10,
  fontWeight: 600,
}

const desc: CSSProperties = {
  fontSize: 15,
  lineHeight: 1.9,
  color: colors.muted,
}

/* CTA */
const cta: CSSProperties = {
  width: '100%',
  padding: 15,
  background: 'linear-gradient(135deg, #dd5b51, #c0341c)',
  color: '#fff',
  border: 'none',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  borderRadius: 12,
  boxShadow: '0 10px 20px rgba(37, 211, 102, 0.25)',
}

/* SOLD */
const sold: CSSProperties = {
  textAlign: 'center',
  padding: 14,
  background: '#eee',
  color: '#888',
  borderRadius: 10,
}

/* SHARE */
const shareRow: CSSProperties = {
  display: 'flex',
  gap: 12,
  width: '100%',
}

const copyBtn: CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 12,
  border: '1px solid #2678e4',
  background: '#8b8ae0',
  color: '#000',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 16,
  borderRadius: 12,
  boxShadow: '0 10px 20px rgba(37, 211, 102, 0.25)',
}

const waBtn: CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 12,
  border: '1px solid #25D366',
  background: '#49d17b',
  color: '#000',
  cursor: 'pointer',
  textDecoration: 'none',
  borderRadius: 12,
  boxShadow: '0 10px 20px rgba(37, 211, 102, 0.25)',
}

/* IMAGE */
const imageWrap: CSSProperties = {
  position: 'relative',
  borderRadius: 10,
  overflow: 'hidden',
  boxShadow: '0 40px 90px rgba(0,0,0,0.18)',
  cursor: 'zoom-in',
  border: '8px solid #fff',
}

const img: CSSProperties = {
  width: '100%',
  display: 'block',
}

const hint: CSSProperties = {
  position: 'absolute',
  bottom: 12,
  left: 12,
  fontSize: 12,
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  padding: '4px 10px',
  borderRadius: 20,
}

/* ZOOM */
const zoom: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.95)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
}

const zoomImg: CSSProperties = {
  maxWidth: '90%',
  maxHeight: '90vh',
}

/* ROW COMPONENT */
function Row({ label, value, highlight }: any) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '14px 18px',
        borderBottom: '1px solid #f0f0f0',
        fontSize: 14,
      }}
    >
      <span style={{ color: '#888' }}>{label}</span>
      <span
        style={{
          color: highlight ? '#22c55e' : '#111',
          fontWeight: highlight ? 600 : 400,
        }}
      >
        {value}
      </span>
    </div>
  )
}