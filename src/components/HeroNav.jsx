/* eslint-disable react/prop-types */
import search from "../../public/images/search_grey.svg";

export default function HeroNav(props) {
  return (
    <div className="w-full flex flex-row justify-between items-center px-2">
      {props.homeState ? (
        ""
      ) : (
        <form onSubmit={props.searching} className="flex flex-row max-h-6 relative items-center">
          <img type="text" onChange={e => props.setSearchKey(e.target.value)} src={search} className="absolute left-[10px] max-h-4 " />
          <input
            placeholder="What do you want to play?"
            className="p-2 w-80 rounded-3xl px-10 bg-grey text-sm text-white focus:outline-white "
          ></input>
          <button type="submit">submit</button>
        </form>
      )}
      {!props.token ? (
        <a
          href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPE}`}
        >
          <button className="text-black bg-white rounded-2xl p-2 px-4 hover:scale-[1.1] hover:transition-[700ms] transition-[700ms]">
            Log In
          </button>
        </a>
      ) : (
        <div className="flex flex-row gap-4">
          <button
            className="text-black bg-white rounded-2xl p-2 px-4 hover:scale-[1.1] hover:transition-[700ms] transition-[700ms]"
            onClick={props.logout}
          >
            Log Out
          </button>
          <button className="text-black bg-green transition-[700ms] hover:bg-white hover:text-black hover:scale-[1.1] hover:transition-[700ms] rounded-full p-2 px-4">
            {props.userName ? props.userName.charAt(0) : ""}
          </button>
        </div>
      )}
    </div>
  );
}
