import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Know every learner",
    description:
      "Keep student details, notes, and classroom context together, so the little things never get lost.",
    icon: "◎",
    tone: "lavender",
  },
  {
    number: "02",
    title: "Make class flow",
    description:
      "Plan activities, share expectations, and move through the day with less stopping to organize.",
    icon: "↗",
    tone: "peach",
  },
  {
    number: "03",
    title: "Celebrate progress",
    description:
      "Notice the wins as they happen and give every student a reason to feel proud of their growth.",
    icon: "✳",
    tone: "mint",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Classroomly home">
          <span className="brand-mark" aria-hidden="true">c</span>
          classroomly<span className="brand-period">.</span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#why-classroomly">Why Classroomly</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <div className="header-actions">
          <Link className="sign-in-link" href="/sign-in">Sign in</Link>
          <Link className="button button-small" href="/sign-in">Get started <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <section className="hero" id="why-classroomly">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little more room to teach</p>
          <h1>Make space for<br />the <span>good stuff.</span></h1>
          <p className="hero-description">
            The classroom tools you need, without the busywork you don’t. Bring your people, plans, and little wins together in one happy place.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/sign-in">Start your classroom <span aria-hidden="true">↗</span></Link>
            <a className="text-link" href="#how-it-works">Take a quick look <span aria-hidden="true">↓</span></a>
          </div>
          <div className="teacher-note">
            <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span className="avatar-plus">+</span></div>
            <p>Made for the people<br /><strong>who make a classroom.</strong></p>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustration of a calm, colorful classroom workspace">
          <div className="art-sun" />
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✦</div>
          <div className="desk-card">
            <div className="desk-topline"><span className="mini-brand"><span className="mini-mark">c</span> your classroom</span><span className="menu-dots">•••</span></div>
            <div className="desk-greeting">MONDAY, SEPTEMBER 16 <span>☀</span></div>
            <h2>Good morning,<br /><em>Ms. Jordan.</em></h2>
            <div className="classroom-card">
              <div className="classroom-card-icon">✿</div>
              <div><strong>Room 204</strong><small>Today is full of possibility.</small></div>
              <span className="card-arrow">↗</span>
            </div>
            <div className="student-row"><div className="student-avatars"><i>J</i><i>L</i><i>S</i><i>R</i></div><span>24 bright minds</span><span className="check-mark">✓</span></div>
            <div className="quote-card"><span className="quote-star">✳</span><div><strong>A tiny win</strong><small>Leo helped a friend feel welcome today.</small></div><span className="heart">♥</span></div>
          </div>
          <div className="floating-note note-left"><span className="note-icon">✎</span><span><strong>All in one place</strong><small>Room to breathe included</small></span></div>
          <div className="floating-note note-right"><span className="note-icon note-heart">♥</span><span><strong>Little wins count</strong><small>Especially the small ones</small></span></div>
          <span className="art-caption">A calmer kind of classroom management</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Classroomly values">
        <span>LESS ADMIN, MORE <strong>“LOOK WHAT YOU DID!”</strong></span>
        <span className="trust-divider" />
        <span>BUILT FOR REAL CLASSROOM DAYS</span>
        <span className="trust-divider" />
        <span>ALWAYS FREE TO GET STARTED <span className="tiny-spark">✳</span></span>
      </section>

      <section className="features-section" id="how-it-works">
        <div className="section-heading"><p className="eyebrow">A better kind of organized</p><h2>Everything in its <span>right place.</span></h2><p>Less time keeping track of things. More time being there for the people in front of you.</p></div>
        <div className="feature-grid" id="features">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className={`feature-icon ${feature.tone}`} aria-hidden="true">{feature.icon}</div>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer"><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">c</span> classroomly<span className="brand-period">.</span></Link><span>A little more room for what matters.</span><Link href="/sign-in">Come on in <span aria-hidden="true">↗</span></Link></footer>
    </main>
  );
}
