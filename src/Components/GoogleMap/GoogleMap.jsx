import React from 'react'

const GoogleMap = () => {
  return (
    <div className="map-area">
        <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617356433495!2d-73.98308947516891!3d40.74844453538503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2z2YXYqNmG2Ykg2KXZhdio2KfZitixINiz2KrZitiq!5e0!3m2!1sar!2seg!4v1706880918053!5m2!1sar!2seg" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>)
}

export default GoogleMap