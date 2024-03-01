/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import LeftLowerHero from "./components/LeftLowerHero";
import LeftUpperHero from "./components/LeftUpperHero";
import HomeHero from "./components/HomeHero";
import { useEffect } from "react";
import axios from "axios";
import SearchHero from "./components/SearchHero";
import HeroNav from "./components/HeroNav";

export default function App() {
  /****spotify client setup */
  const CLIENT_ID = "2b831bdb3d6b4bfc8a67aefabe474d33";
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE =
    "user-read-recently-played user-top-read streaming user-read-email user-read-private";

  const [token, setToken] = useState("");
  /****hero section changer */
  const [homeState, sethomeState] = useState(true);
  const [currentUser, setCurrentUser] = useState([]);
  const [playlists, setPlayList] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [releases, setReleases] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [search, setSearch] = useState("");

  function handleHome() {
    sethomeState(true);
  }
  function handleSearch() {
    sethomeState(false);
  }

  /********side effects */
  useEffect(() => {
    /*****taking access token from the hash after logging in */
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    /*********getting current user data */
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCurrentUser(res.data);
      });

    /**********getting current user playlistss */
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlayList(res.data.items);
      });

    /************get recently played */
    axios
      .get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRecentlyPlayed(res.data.items);
      });

    console.log(token);

    /*******get user top tracks */
    axios
      .get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTopTracks(res.data.items);
      });

    /***********get featured */
    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFeatured(res.data.playlists.items);
      });

    /**********get recent releases */
    axios
      .get("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setReleases(res.data.albums.items);
      });

    /***********get all genres */
    axios
      .get("https://api.spotify.com/v1/browse/categories?limit=50", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGenres(res.data.categories.items);
      });
  }, []);

  /**********function to logout */
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    setCurrentUser([]);
    setPlayList([]);
    setRecentlyPlayed([]);
  };

  /************searching function */
  const searching = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=${searchKey}%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album%2Cartist%2Ctrack%2Cplaylist`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setSearch(data.artists.items);
    console.log(search)
  };
  return (
    <div className="  bg-black h-screen gap-2">
      <div className="flex flex-row p-3 gap-2 overflow-auto h-full">
        <div className="flex flex-col w-1/3 gap-2">
          <div className="h-1/5 bg-darkestGrey p-4 rounded-md">
            <LeftUpperHero
              handleHome={handleHome}
              handleSearch={handleSearch}
            />
          </div>
          <div className="h-full bg-darkestGrey rounded-md p-2">
            <LeftLowerHero playlists={playlists} />
          </div>
        </div>
        <div className=" w-full bg-gradient-to-t from-darkestGrey from-60% to-darkGrey bg-cover bg-no-repeat rounded-md gap-2">
          <div className="bg-transparent h-1/5 w-full  p-3">
            <HeroNav
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              logout={logout}
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              token={token}
              userName={currentUser.display_name}
              SCOPE={SCOPE}
              homeState={homeState}
            />
          </div>
          <div className="p-3 pt-0">
            {homeState ? (
              <HomeHero
                recentlyPlayed={recentlyPlayed}
                topTracks={topTracks}
                featured={featured}
                releases={releases}
              />
            ) : (
              <SearchHero genres={genres} 
              searching={searching}
              setSearchKey={setSearchKey}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
