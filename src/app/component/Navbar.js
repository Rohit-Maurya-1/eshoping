import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-light"
        style={{ background: "#212122", position:"sticky",
        top: 0}}
      >
        <div
          className="container-fluid text-light"
          style={{ background: "#212122", position:"sticky", position: "webkit-sticky",
        top: 0}}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="row"  style={{display:"flex",justifyContent:"space-between" ,width:"100%"}}>

           <div className=" col-6 collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-light">
                <a className="nav-link text-light" aria-current="page" href="#">
                Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Primium  
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
               gift cards
                </a>
              </li>
            </ul>
            </div>
         
            <div className="col-3 navbar-text text-light ">
             <b>Brava</b>
            </div>
         
        
          <div className="col-3  d-flex" style={{justifyContent:"space-between"}}>

            <div><TwitterIcon/></div>
            <div><InstagramIcon/></div>
            <div><PersonIcon/></div>
            <div><SearchIcon/></div>
            <div><AddShoppingCartIcon/></div>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
