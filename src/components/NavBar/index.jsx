import React,{useEffect,useState,useRef} from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";

import "./navbar.scss";

const Navbar = () => {
  const [values, setDarkMode] = useDarkMode("darkMode", false);

  const [sticky,setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = (e) =>{
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    } 
    if(e.currentTarget.scrollY ===0){
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // CLEANUP
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${sticky ? 'scroll' : ''}`} ref={ref}>
      <div className="nav-container">
        {/* BRAND */}
        <div className="brand">
          <Link tag="a" to="/" className="brand-link">
            <span role="img" aria-label="taco/home" className="brand-emoji favicon">
              🌮
            </span>{" "}
            <span className='text'>
            Mark Ambrocio
            </span>
          </Link>
        </div>
        {/* LINKS */}
        <div className="links">
          <Link tag="a" to="/me">
            About
          </Link>
          <Link tag="a" to="/portfolio">
            Portfolio
          </Link>
          <Link tag="a" to="/contact">
            Contact
          </Link>
        </div>
        {/* DARKMODE */}
        <div className="ctl">
          <button className="switch" onClick={setDarkMode}>
            {values ? (
              <span role="img" aria-label="sun mode" className='theme-icon'>
                🌞
              </span>
            ) : (
              <span role="img" aria-label="dark mode" className='theme-icon'>
                🌙
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
