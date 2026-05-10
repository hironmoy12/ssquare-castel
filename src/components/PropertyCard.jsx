import { Link } from 'react-router-dom'
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react'
import './PropertyCard.css'

export default function PropertyCard({ property, featured = false }) {
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`
    }
    return `$${price.toLocaleString()}`
  }

  return (
    <Link to={`/properties/${property.id}`} className={`prop-card ${featured ? 'prop-card--featured' : ''}`}>
      <div className="prop-card__image-wrap">
        <img src={property.image} alt={property.title} className="prop-card__image" />
        <div className="prop-card__overlay" />
        <span className={`prop-card__status prop-card__status--${property.status === 'For Sale' ? 'sale' : 'rent'}`}>
          {property.status}
        </span>
        <span className="prop-card__type">{property.type}</span>
      </div>

      <div className="prop-card__body">
        <p className="prop-card__location">
          <MapPin size={12} />
          {property.location}
        </p>
        <h3 className="prop-card__title">{property.title}</h3>
        <p className="prop-card__price">{formatPrice(property.price)}</p>

        <div className="prop-card__divider" />

        <div className="prop-card__specs">
          <span className="prop-card__spec">
            <Bed size={14} />
            {property.beds} Beds
          </span>
          <span className="prop-card__spec">
            <Bath size={14} />
            {property.baths} Baths
          </span>
          <span className="prop-card__spec">
            <Square size={14} />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>

        <div className="prop-card__cta">
          <span>View Details</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  )
}
