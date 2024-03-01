/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function SearchHero(props) {
  const genres = props.genres;
  const genre = genres.map((data, id) => {
    var randomColor;
    do {
      randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (randomColor === "#ffffff" || randomColor === "#121212");
    return (
      <div
        key={id}
        className={`h-36 w-36 p-2 relative overflow-hidden rounded-xl`}
        style={{ backgroundColor: randomColor }}
      >
        <span className="font-extrabold">{data.name}</span>
        <img
          src={data.icons[0].url}
          alt="genre logo"
          className="rotate-[30deg] max-h-24 absolute bottom-[-10px] right-[-10px]"
        />
      </div>
    );
  });
  console.log(genres);
  return (
    <div className="text-white w-full grid grid-flow-row gap-5 max-h-[500px] overflow-y-scroll">
        <h1 className="p-3 text-2xl font-extrabold">Browse all</h1>
      <div className="grid grid-cols-5 p-3 gap-4">{genre}</div>
    </div>
  );
}
