import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Target, Eye, Award, Users, Building2, Star } from "lucide-react";
import { testimonials } from "../data/properties";
import { amenities, services, counters, sitePlanHighlights } from "../data/homeData";
import CountUpValue from "../components/CountUpValue";
import EmiCalculator from "../components/EmiCalculator";
import { useEmiCalculator } from "../hooks/useEmiCalculator";
import "./Home.css";

export default function Home() {
  const emiState = useEmiCalculator();

  return (
    <main className="home">
      {/* Hero */}

      <video src="../assets/hero-sec-video.mp4" autoPlay muted loop />

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>
            Client Stories
          </p>
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            Testimonals <em>That Speak Volumes</em>
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial" key={t.id}>
                <iframe
                  className="testimonial__video"
                  src={`https://www.youtube.com/embed/${t.videoId}`}
                  title={t.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Properties Preview */}
      <section className="section container two">
        <div className="section__header">
          <div>
            <p className="section-label">Luxury Refined</p>
            <h2 className="section-title">TWO SQUARE</h2>
            <p className="one-square-content__kicker">
              Luxury refined. Crafted for modern family living.
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="content one-square-content">
          <div className="one-square-content__text">
            <p>
              Are you looking for luxury flats in Kharagpur that offer comfort,
              convenience, and world-class amenities? Look no further than Two
              Square by S Square Castle, a premium residential project located
              in Barbetia, the most sought-after neighborhood in Kharagpur.
              Designed to enhance your lifestyle, these 2 & 3 BHK apartments
              provide the perfect balance of elegance, security, and modern
              conveniences, making it the ideal home for families,
              professionals, and investors alike.
            </p>
            <p>
              At Two Square, every detail is meticulously planned to ensure a
              luxurious and hassle-free living experience. Whether you seek
              spacious interiors, premium amenities, or excellent connectivity,
              this project has it all!
            </p>
            <Link to="/projects" className="btn-primary two-square">
              Read More <ArrowRight size={14} />
            </Link>
          </div>
          <div className="one-square-content__image">
            <img
              src="/assets/ssquarecastle06.jpeg"
              alt="S Square Castle residential building"
            />
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-section__inner container">
          <div className="two-square-content__text">
            <p className="section-label">Elevate Your Lifestyle</p>
            <h2 className="section-title">THREE SQUARE</h2>
            <p className="two-square-content__kicker">
              Architectural marvel. Elevated urban living.
            </p>
            <div className="divider" />
            <p className="why-section__desc">
              Three Square is an architectural marvel designed to elevate urban
              living. With a focus on elegance, innovation, and sustainability,
              this project blends contemporary aesthetics with cutting-edge
              functionality. From meticulously crafted interiors to world-class
              amenities, Three Square sets a new benchmark in luxury real
              estate.
            </p>
            <p className="why-section__desc">
              Three Square is a premium residential development featuring modern
              living spaces tailored for comfort and convenience. Strategically
              located in a prime area, it offers easy accessibility while
              ensuring a serene environment. The project is designed to cater to
              urban professionals, families, and investors seeking a high-value
              property in a thriving locality.
            </p>
            <Link to="/projects" className="btn-primary">
              Read More <ArrowRight size={14} />
            </Link>
          </div>
          <div className="two-square-content__image">
            <img
              src="/assets/ssquarecastle07.jpeg"
              alt="Luxury flat living room"
            />
          </div>
        </div>
      </section>

      <section className="amenities-section">
        <div className="container">
          <div className="amenities-section__header">
            <div>
              <p className="section-label">Amenities & Facilities</p>
              <h2 className="section-title">
                Experience <em>Luxurious Living</em>
              </h2>
            </div>
            <p className="amenities-section__intro">
              Experience luxurious living with our premium real estate
              developments, designed to provide an unparalleled lifestyle with
              world-class amenities. Our properties feature state-of-the-art
              facilities that cater to comfort, leisure, and wellness, ensuring
              a perfect balance between modern living and serene relaxation.
            </p>
          </div>
          <div className="divider" />
          <div className="amenities-grid">
            {amenities.map(({ title, description, image, alt }) => (
              <article className="amenity-card" key={title}>
                <div className="amenity-card__image">
                  <img src={image} alt={alt} loading="lazy" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <Link to="/projects" className="btn-outline amenities-section__link">
            View <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="interior-video">
        <video src="./assets/middle-video.mp4" autoPlay muted loop></video>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-section__header">
            <div>
              <p className="section-label">Services</p>
              <h2 className="section-title">
                Built With <em>Precision & Quality</em>
              </h2>
            </div>
            <p className="services-section__intro">
              Built with precision and quality, our projects feature premium
              materials, advanced engineering, and top-tier safety standards for
              lasting durability and comfort.
            </p>
          </div>
          <div className="divider" />
          <div className="services-grid">
            {services.map(({ title, description, image, alt }) => (
              <article className="service-card" key={title}>
                <div className="service-card__image">
                  <img src={image} alt={alt} loading="lazy" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/projects" className="btn-outline service-card__link">
                  Read More <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="counter-section__inner container">
          {counters.map(({ value, label }) => (
            <div className="counter-item" key={label}>
              <CountUpValue target={value} />
              <span className="counter-item__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <EmiCalculator emiState={emiState} />

      <section className="site-plan-section">
        <div className="site-plan-section__inner container">
          <div className="site-plan-section__content">
            <p className="section-label">Two Square</p>
            <h2 className="section-title">Site Plan</h2>
            <div className="divider" />
            <p className="site-plan-section__desc">
              At S Square Castle, we believe in creating well-planned,
              functional, and aesthetically pleasing spaces that offer both
              luxury and convenience. Our meticulously designed site plan
              ensures a harmonious blend of open spaces, modern infrastructure,
              and premium amenities, providing an exceptional living experience.
            </p>
            <div className="site-plan-features">
              {sitePlanHighlights.map(({ title, description }) => (
                <article className="site-plan-feature" key={title}>
                  <ShieldCheck size={18} strokeWidth={1.7} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="site-plan-section__image">
            <img
              src="/assets/site-plane.png"
              alt="Two Square architectural site plan"
            />
            <span>Planned for comfort, access, and everyday ease</span>
          </div>
        </div>
      </section>

       <section className="floor-plan-section">
        <div className="floor-section__inner container">
          <div className="floor-section__content">
            <p className="section-label">Two Square</p>
            <h2 className="section-title">Floor Plan</h2>
            <div className="divider" />
            <p className="floor-section__desc">
              Our thoughtfully designed floor plans maximize every square foot of space. The 2 BHK units feature spacious living areas with well-proportioned bedrooms, a modern kitchen, and an elegant dining space—perfect for young couples and small families. The 3 BHK apartments offer additional flexibility with a third bedroom or study, ideal for growing families and professionals. Each unit is designed to optimize natural light, ventilation, and flow, ensuring a comfortable and modern lifestyle.
            </p>
            <div className="floor-features">
              {sitePlanHighlights.map(({ title, description }) => (
                <article className="site-plan-feature" key={title}>
                  <ShieldCheck size={18} strokeWidth={1.7} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="floor-section__image">
            <img
              src="/assets/floor-plan.png"
              alt="Two Square luxury apartment floor plans - 2 BHK and 3 BHK layouts"
            />
            <span>Thoughtfully designed layouts for modern living</span>
          </div>
        </div>
      </section>

      <section className="brochure-section">
        <div className="brochure-section__inner container">
          <div>
            <p className="section-label">Brochure</p>
            <h2 className="section-title">
              Download the <em>Brochure</em>
            </h2>
            <p>
              Explore our projects, amenities, and specifications in detail.
              Download our brochure for a complete overview of your dream home.
            </p>
          </div>
          <a
            href="/assets/eesan_construction_brochure.pdf"
            download
            className="btn-primary brochure-section__button"
          >
            Download <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <section className="about-us-section">
        {/* Left image panel */}
        <div className="about-us-image-panel">
          <img
            src="/assets/ssquarecastle06.jpeg"
            alt="Eesan Construction premium residential project"
            loading="lazy"
          />
          <div className="about-us-image-overlay" />
          {/* Floating trust badge */}
          <div className="about-us-trust-badge">
            <Star size={16} />
            <span>Trusted Since 2010</span>
          </div>
          {/* Stat chips */}
          <div className="about-us-stats">
            <div className="about-us-stat">
              <Building2 size={18} />
              <div>
                <strong>12+</strong>
                <span>Projects Delivered</span>
              </div>
            </div>
            <div className="about-us-stat">
              <Users size={18} />
              <div>
                <strong>500+</strong>
                <span>Happy Families</span>
              </div>
            </div>
            <div className="about-us-stat">
              <Award size={18} />
              <div>
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content panel */}
        <div className="about-us-content-panel">
          <p className="section-label">About Us</p>
          <h2 className="section-title">
            Eesan <em>Construction</em>
          </h2>
          <div className="about-us-accent-line" />
          <p className="about-us-description">
            Eesan Construction is a construction company of excellence and trust
            with a commitment to cutting-edge design and technology. Our homes
            are ensconced in developments where we bring alive a multitude of
            experiences — all geared to help one live their best life. Be it
            carefully crafted open spaces, manicured greens, world-class gyms,
            or infinity pools, every amenity is built to enrich your lifestyle.
          </p>

          <div className="about-us-cards">
            <div className="about-us-card">
              <div className="about-us-card__icon">
                <Target size={22} />
              </div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To be at the forefront of the real estate industry by
                  providing tailored, innovative solutions that ensure the best
                  possible outcome for every client.
                </p>
              </div>
            </div>

            <div className="about-us-card">
              <div className="about-us-card__icon">
                <Eye size={22} />
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To be the leader in real estate in India and across the globe
                  — built on honesty, integrity, and impeccable customer
                  service.
                </p>
              </div>
            </div>
          </div>

          <Link to="/about" className="btn-primary about-us-cta">
            Discover Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

     </main>
  );
}

const faqs = [
  {
    question: "What types of properties does Eesan Construction offer?",
    answer:
      "We offer premium 2 BHK and 3 BHK residential apartments under our flagship projects — Two Square and Three Square — located in Barbetia, Kharagpur. Each unit is thoughtfully designed for modern family living with world-class amenities.",
  },
  {
    question: "Where are your projects located?",
    answer:
      "Our projects are strategically located in Barbetia, one of the most sought-after neighbourhoods in Kharagpur, West Bengal. The area offers excellent connectivity to schools, hospitals, shopping centres, and major transport hubs.",
  },
  {
    question: "What amenities are included in the projects?",
    answer:
      "Residents enjoy a curated lifestyle featuring a swimming pool, modern gymnasium, landscaped gardens, children's play area, multi-purpose sports courts, 24/7 security with CCTV surveillance, power backup, and dedicated parking.",
  },
  {
    question: "How can I book a flat or schedule a site visit?",
    answer:
      "You can contact us through the enquiry form on our website, call our sales office, or visit us in person. We offer guided site visits on all working days. Our team will walk you through available units and payment options.",
  },
  {
    question: "What is the payment structure and are home loans available?",
    answer:
      "We offer flexible payment plans including construction-linked and down-payment plans. Our projects are approved by leading banks and HFCs, making home loan approval straightforward. Use our EMI Calculator on this page for an instant estimate.",
  },
  {
    question: "Is the project RERA registered?",
    answer:
      "Yes, all our projects comply with the Real Estate (Regulation and Development) Act, 2016. RERA registration details are available on request and provide complete transparency on project timelines and specifications.",
  },
  {
    question: "What is the expected possession timeline?",
    answer:
      "Possession timelines vary by project phase and are clearly specified in the sale agreement. We are committed to on-time delivery and keep buyers updated at every construction milestone.",
  },
  {
    question: "Can I download the project brochure?",
    answer:
      "Absolutely. You can download the full project brochure directly from this page using the 'Download Brochure' section above. It contains floor plans, specifications, amenity details, and pricing information.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <div>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>
          <p className="faq-intro">
            Everything you need to know about our projects, process, and
            properties — answered clearly and honestly.
          </p>
        </div>
        <div className="divider" />
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? " faq-item--open" : ""}`}
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__q">{faq.question}</span>
                  <span className="faq-item__icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="faq-item__body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
