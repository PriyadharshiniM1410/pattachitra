export default function AboutPage() {
  return (
    <main>
      {/* HEADER */}
      <div className="about-header">
        <h1>ABOUT THE ARTIST</h1>
        <p>A life devoted to preserving Odisha's most sacred visual tradition.</p>
      </div>

      {/* STORY */}
      <section className="story">
        <div className="story-img">
          <img src="/images/artist.jpg" alt="Artist" style={{width:'550px', borderRadius:'6px', objectFit:'cover'}} />
        </div>
        <div className="story-text">
          <h3>A Life Dedicated to Art</h3>
          <p>
            Growing up in Raghurajpur — one of India's heritage craft villages — 
            I watched my grandfather transform simple cotton cloth into vivid mythological worlds. 
            The rhythm of his brush became my lullaby, and by age fifteen, I was painting my own scrolls.
          </p>
          <p>
            Pattachitra is more than art; it is devotion. Each pigment is ground from natural materials — 
            conch shells for white, lampblack for deep outlines, hingula for vermilion red. 
            The process itself is a meditation.
          </p>
          <p>
           Today I work to honour this lineage while exploring contemporary themes, 
           bridging the ancient and the modern so that Pattachitra continues to live and breathe in a new age.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey">
        <h2>The Journey</h2>
        <div className="timeline">
          {[
            { year: '1990', event: 'Born into a family of traditional Pattachitra painters in Raghurajpur, Odisha' },
            { year: '2002', event: 'Began formal training under master artisan Guru Ananta Maharana' },
            { year: '2012', event: 'First solo exhibition at the National Gallery of Modern Art, New Delhi' },
            { year: '2016', event: 'Awarded the State Handicrafts Award for excellence in Pattachitra' },
            { year: '2020', event: 'Featured in international exhibitions across London, Tokyo, and New York' },
            { year: '2024', event: 'Launched online platform to bring Pattachitra art to global collectors' },
          ].map((item) => (
            <div className="timeline-item" key={item.year}>
              <div className="year">{item.year}</div>
              <div className="line"></div>
              <div className="event">{item.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="awards">
        <h2>Awards & Recognition</h2>
        <div className="award-grid">
          {[
            { title: '🏆 National Award 2015', desc: 'Ministry of Textiles, Government of India' },
            { title: '🎨 Odisha State Award for Folk Art Painting 2016', desc: 'Prafulla Dahanukar Art Foundation – Kalanand National Art Contest' },
            { title: '🌍 International Exhibition 2018', desc: 'World Crafts Council, Paris' },
            { title: '📰 Featured in Vogue India 2020', desc: 'Traditional Art & Modern World feature' },
          ].map((a) => (
            <div className="award-card" key={a.title}>
              <strong>{a.title}</strong>
              <p style={{marginTop:'8px', color:'#7a6a5c', fontSize:'14px'}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}