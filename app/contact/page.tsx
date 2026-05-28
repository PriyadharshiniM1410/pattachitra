export default function ContactPage() {
  const waLink =
    'https://wa.me/916374781871?text=' +
    encodeURIComponent(
      'Vanakkam! I would like to inquire about your Pattachitra paintings.'
    )

  return (
    <main>
      {/* HEADER */}
      <div className="contact-header">
        <h1>GET IN TOUCH</h1>

        <p>
          Interested in a commission, collaboration,
          or purchasing a painting? I would love to
          hear from you.
        </p>
      </div>

      {/* CONTACT CONTAINER */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          {/* ADDRESS */}
          <div className="info-box">
            <div className="icon">📍</div>

            <div>
              <h3>Studio</h3>

              <p>
                Raghurajpur, Puri District
                <br />
                Odisha, India — 752027
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="info-box">
            <div className="icon">✉</div>

            <div>
              <h3>Email</h3>

              <p>
                artist@pattachitra.art
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="info-box">
            <div className="icon">📞</div>

            <div>
              <h3>Phone</h3>

              <p>
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* HOURS */}
          <div className="info-box">
            <div className="icon">🕐</div>

            <div>
              <h3>Studio Hours</h3>

              <p>
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '14px',
              background: '#25D366',
              color: 'white',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              letterSpacing: '2px',
              borderRadius: '4px',
              transition: '0.3s',
            }}
          >
            💬 CHAT ON WHATSAPP
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >

          {/* COMMISSION BOX */}
          <div
            style={{
              background: '#f7f4f1',
              padding: '40px',
              borderRadius: '6px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '28px',
                color: '#8b1c1c',
                marginBottom: '15px',
              }}
            >
              Commission a Custom Piece
            </h3>

            <p
              style={{
                color: '#7a6a5c',
                lineHeight: '1.8',
                marginBottom: '15px',
              }}
            >
              Want a personalised Pattachitra painting?
              I accept commissions for custom themes,
              sizes, and stories. Each commissioned
              piece is a unique collaboration between
              artist and collector.
            </p>

            <p
              style={{
                color: '#7a6a5c',
                lineHeight: '1.8',
                marginBottom: '15px',
              }}
            >
              Share your vision — a deity, a story,
              a memory — and I will bring it to life
              using traditional Pattachitra techniques
              and natural colours.
            </p>

            <p
              style={{
                color: '#7a6a5c',
                lineHeight: '1.8',
              }}
            >
              Commission timeline is typically
              2–6 weeks depending on size and
              complexity.
            </p>
          </div>

          {/* HOW TO ORDER */}
          <div
            style={{
              border: '1px solid #e5e5e5',
              padding: '30px',
              borderRadius: '6px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '20px',
                color: '#333',
                marginBottom: '20px',
              }}
            >
              How to Order via WhatsApp
            </h3>

            {[
              'Click the WhatsApp button above',
              'Share the painting name or your custom idea',
              'Discuss size, price, and timeline',
              'Confirm order and make payment',
              'Receive your artwork within 2–6 weeks',
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'flex-start',
                  marginBottom: '15px',
                }}
              >
                <div
                  style={{
                    minWidth: '28px',
                    height: '28px',
                    background: '#8b1c1c',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  {i + 1}
                </div>

                <p
                  style={{
                    color: '#7a6a5c',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    paddingTop: '4px',
                  }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}      