/* eslint-disable react/prop-types */
export default function HeroNav(props) {
  return (
    <div className="w-full flex flex-row justify-end ">
      {!props.token ? (
        <a
          href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}`}
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
          <button className="text-black bg-green transition-[700ms] hover:bg-white hover:text-black hover:scale-[1.1] hover:transition-[700ms] rounded-full p-2 px-4">{props.userName ? props.userName.charAt(0) : ''}</button>
        </div>
      )}
    </div>
  );
}
