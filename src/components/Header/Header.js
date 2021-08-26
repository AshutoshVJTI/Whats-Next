import "./Header.css";
import { ReactComponent as MovieLogo } from "./movie-videos.svg"

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
    <MovieLogo className="logo" />
       What's Next? 
    </span>
  );
};

export default Header;
