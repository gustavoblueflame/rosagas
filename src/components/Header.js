import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-100 bg-dark">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <a className="navbar-brand" href="#Inicio">
            <img src={logo} width="150" alt="RosaGas" title="RosaGas" className="img-fluid" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* style={{color:"#ed0a8f"}} */}
              <a className="nav-link active fs-3" aria-current="page" href="#Inicio" style={{color:"white"}}>
                Inicio
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

export const HeaderTest = () => {
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  </header>;
};
