const Home = () => {
  return (
    <form className="form mt-3 mb-3">
      <h1 style={{ color: "#ed0a8f" }}>Rosa Gas</h1>
      <label className="form-label mb-4">Somos una empresa dedicada a la venta y distribución de cilindros de gas LP en Costa Rica.</label>
      <br />

      <label className="form-label">Dirección:</label>
      <br />

      {/* <label className="form-label mb-4">SAN JOSE-SANTA ANA DISTRITO POZOS, DE LA ANTIGUA FABRICA DE EMPAQUES SANTA ANA, CIENTO CINCUENTA METROS AL ESTE Y TRESCIENTOS METROS AL SURESTE, EN OFICINAS ADMINISTRATIVAS DE LA EMPRESA LA CHUSPA.</label> */}
      <label className="form-label mb-4">San José, Santa Ana, Pozos.</label>
      <br />

      <label className="form-label">Teléfono:</label>
      <br />

      <label className="form-label">
        <a href="https://wa.me/50689221111" className="text-decoration-none" target="_blank" rel="noreferrer noopener" >
          <i class="bi bi-whatsapp " style={{ color: "#25D366" }}></i>
          {""} 8922 1111
        </a>
      </label>
    </form>
  );
};

export default Home;
