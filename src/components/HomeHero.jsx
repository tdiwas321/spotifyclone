/* eslint-disable react/prop-types */
import play from "../../public/images/play.png";
export default function HomeHero(props) {
  const recentlyPlayed = props.recentlyPlayed;
  const topTracks = props.topTracks;
  const featured = props.featured;
  const releases = props.releases;


  const recents = recentlyPlayed.slice(0, 5).map((data, i) => {
    return (
      <div
        key={i}
        className=" group relative max-w-40 p-3 rounded-lg bg-darkGrey hover:bg-grey hover:transition-[700ms] transition-[700ms] .no"
      >
        <button className="group-hover:block hidden bg-green rounded-full p-2 absolute bottom-20 right-5 shadow-md hover:scale-[1.2] hover:transition-[700ms] transition-[700ms]">
          <img src={play} alt="play button" className="max-h-6" />
        </button>
        <img
          src={data.track.album.images[0].url}
          alt="album cover art"
          className="max-h-36 rounded-md mb-2"
        />
        <span className="flex font-bold text-sm text-ellipsis overflow-hidden max-h-5 m-1">
          {data.track.name}
        </span>
        <span className="m-1 text-lightGrey text-sm">
          {data.track.artists[0].name}
        </span>
      </div>
    );
  });

  const tracks = topTracks.slice(0, 5).map((data, i) => {
    return (
      <div
        key={i}
        className=" group relative max-w-40 p-3 rounded-lg bg-darkGrey hover:bg-grey hover:transition-[700ms] transition-[700ms] .no"
      >
        <button className="group-hover:block hidden bg-green rounded-full p-2 absolute bottom-20 right-5 shadow-md hover:scale-[1.2] hover:transition-[700ms] transition-[700ms]">
          <img src={play} alt="play button" className="max-h-6" />
        </button>
        <img
          src={data.album.images[0].url}
          alt="album cover art"
          className="max-h-36 rounded-md mb-2"
        />
        <span className="flex font-bold text-sm text-ellipsis overflow-hidden max-h-5 m-1">
          {data.name}
        </span>
        <span className="m-1 text-lightGrey text-sm">
          {data.album.artists[0].name}
        </span>
      </div>
    );
  });

  const feature = featured.slice(0, 5).map((data, i) => {
    return (
      <div
        key={i}
        className=" group relative max-w-40 p-3 rounded-lg bg-darkGrey hover:bg-grey hover:transition-[700ms] transition-[700ms] .no"
      >
        <button className="group-hover:block hidden bg-green rounded-full p-2 absolute bottom-20 right-5 shadow-md hover:scale-[1.2] hover:transition-[700ms] transition-[700ms]">
          <img src={play} alt="play button" className="max-h-6" />
        </button>
        <img
          src={data.images[0].url}
          alt="album cover art"
          className="max-h-36 rounded-md mb-2"
        />
        <span className="flex font-bold text-sm text-ellipsis overflow-hidden max-h-5 m-1">
          {data.name}
        </span>
        <span className="m-1 text-lightGrey text-sm line-clamp-2">
          {data.description}
        </span>
      </div>
    );
  });

  const release = releases.slice(0, 5).map((data, i) => {
    return (
      <div
        key={i}
        className=" group relative max-w-40 p-3 rounded-lg bg-darkGrey hover:bg-grey hover:transition-[700ms] transition-[700ms] .no"
      >
        <button className="group-hover:block hidden bg-green rounded-full p-2 absolute bottom-20 right-5 shadow-md hover:scale-[1.2] hover:transition-[700ms] transition-[700ms]">
          <img src={play} alt="play button" className="max-h-6" />
        </button>
        <img
          src={data.images[0].url}
          alt="album cover art"
          className="max-h-36 rounded-md mb-2"
        />
        <span className="flex font-bold text-sm text-ellipsis overflow-hidden max-h-5 m-1">
          {data.name}
        </span>
        <span className="m-1 text-lightGrey text-sm line-clamp-2">
          {data.artists[0].name}
        </span>
      </div>
    );
  });
  return (
    <div className="text-white w-full grid grid-flow-row gap-5 max-h-[500px] overflow-y-scroll">
      <div>
        <h1 className="font-extrabold text-2xl m-2">Recently played</h1>
        <div className="grid grid-cols-5 gap-2 w-full">{recents}</div>
      </div>
      <div>
        <h1 className="font-extrabold text-2xl m-2">Your top mixes</h1>
        <div className="grid grid-cols-5 gap-2 w-full">{tracks}</div>
      </div>
      <div>
        <h1 className="font-extrabold text-2xl m-2">Featured playlists</h1>
        <div className="grid grid-cols-5 gap-2 w-full">{feature}</div>
      </div>
      <div>
        <h1 className="font-extrabold text-2xl m-2">Popular new releases</h1>
        <div className="grid grid-cols-5 gap-2 w-full">{release}</div>
      </div>
    </div>
  );
}
