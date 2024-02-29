/* eslint-disable react/prop-types */
import spotify from "../../public/images/spotify.png";
import homeIcon from "../../public/images/home.svg";
import searchIcon from "../../public/images/search.svg";
export default function LeftUpperHero(props) {
  return (
    <div className="h-full">
      <div className="text-white h-full flex flex-col justify-between ">
        <img src={spotify} alt="spotify logo" className="max-h-6 w-max" />
        <span className="flex flex-row text-center gap-4  text-sm items-center" >
          <img src={homeIcon} alt="homeIcon" className="max-h-6" />
          <button onClick={props.handleHome}>Home</button>
        </span>
        <span className="flex flex-row text-center gap-4 text-sm items-center" >
          <img src={searchIcon} alt="SearchIcon" className="max-h-6" />
          <button onClick={props.handleSearch}>Search</button>
        </span>
      </div>
    </div>
  );
}
