/* eslint-disable react/prop-types */
import library from "../../public/images/library.png"
export default function LeftLowerHero(props) {
  const playlist = props.playlists;
  console.log(playlist);

  const playlistGrid = playlist.map((data) => {
    return (
      <div key={data.id} className="flex flex-row gap-2 p-2 hover:bg-darkGrey rounded-md ">
        <img src={data.images[0].url} alt="playlistLogo" className="max-h-10 rounded-sm"/>
        <div className="flex flex-col self-center">
            <span className="font-bold text-sm">{data.name}</span>
            <span className="text-lightGrey text-xs">{data.type.charAt(0).toUpperCase() + data.type.slice(1)} . {data.owner.display_name}</span>
        </div>
      </div>
    );
  });
  return <div className="text-white gap-3 w-full">
    <span className="flex flex-row items-center gap-3 mb-4"><img src={library} alt="library svg" className="max-h-10"/> Your Library</span>
    {playlistGrid}
    </div>;
}
