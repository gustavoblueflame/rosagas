import camionRosaGas1 from "../assets/images/camion-rosagas-1.png";
import camionRosaGas2 from "../assets/images/camion-rosagas-2.png";
import camionRosaGas3 from "../assets/images/camion-rosagas-3.png";

const Carrousel = () => {
  return (
    <div className="container mt-3">
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src={camionRosaGas1} className="d-block img-fluid w-100" alt="Camion Rosa Gas 1" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Servicio a domicilio</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={camionRosaGas2} className="d-block img-fluid w-100" alt="Camion Rosa Gas 2" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Somos el cilindro Rosa</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={camionRosaGas3} className="d-block img-fluid w-100" alt="Camion Rosa Gas 3" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Consigue tu cilindro rosa con nosotros</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
