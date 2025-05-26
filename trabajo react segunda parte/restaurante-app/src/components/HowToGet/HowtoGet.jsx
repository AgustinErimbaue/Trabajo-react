import "./HowToGet.css";
const HowToGet = () => {
  return (
    <div className="howtoget-container" style={{maxWidth: 700, margin: "40px auto", padding: 32, background: "rgba(34,34,34,0.95)", borderRadius: 18, color: "#fff8dc", fontFamily: "'Lato', sans-serif"}}>
      <h1 style={{fontFamily: "'Playfair Display', serif", color: "#ffd700", fontSize: 32, marginBottom: 16}}>¿Cómo llegar?</h1>
      <p style={{fontSize: 18, marginBottom: 18}}>
        Nos encontramos en el corazón de la ciudad, en la Calle Mayor 123, Valencia.
        Nuestro restaurante está a pocos minutos andando de la Plaza del Ayuntamiento y muy cerca de paradas de metro y autobús.
      </p>
      <ul style={{marginBottom: 18, fontSize: 17}}>
        <li><b>Metro:</b> Línea 3 y 5, parada Xàtiva</li>
        <li><b>Autobús:</b> Líneas 7, 10, 27, 35</li>
        <li><b>Aparcamiento:</b> Parking público a 100 metros</li>
      </ul>
      <iframe
        title="Ubicación Restaurante"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.732058899956!2d-0.3762886846021557!3d39.46990797948544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f1b2b0b0b0b%3A0x0!2sCalle%20Mayor%20123%2C%20Valencia!5e0!3m2!1ses!2ses!4v1680000000000!5m2!1ses!2ses"
        width="100%"
        height="250"
        style={{border: 0, borderRadius: 12}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default HowToGet