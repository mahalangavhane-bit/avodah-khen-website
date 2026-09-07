import { NavLink } from "./router.jsx";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div>
          <NavLink className="logo" to="/">
            <span className="mark">A</span> AVODAH &amp; KHEN LLP
          </NavLink>
          <p>
            Independent real estate advisory for climate-ready neighbourhoods, circular
            buildings and mid-India growth cities.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <NavLink to="/services">Climate & Resilience</NavLink>
          <NavLink to="/services">Liveable Cities</NavLink>
          <NavLink to="/services">Circular Buildings</NavLink>
          <NavLink to="/services">Mid-India Intelligence</NavLink>
        </div>
        <div>
          <h4>Company</h4>
          <NavLink to="/company">About us</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/contact">Careers</NavLink>
        </div>
        <div>
          <h4>Studios</h4>
          <p>Mumbai · Bengaluru · Hyderabad</p>
          <p>Ahmedabad · Jaipur · Kochi</p>
          <p>Dubai · Lisbon</p>
        </div>
      </div>
      <p className="legal">
        This demo site is original work inspired by the structure of professional real estate
        consultancies. It is not affiliated with Anarock. Content is illustrative only.
      </p>
      <p className="copy">© {new Date().getFullYear()} Velora Advisors Pvt Ltd. All rights reserved.</p>
    </footer>
  );
}
