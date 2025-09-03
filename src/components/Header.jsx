import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URL, LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configLangSlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    // Toggle the GPT search
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  };
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //User Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscibe();
  }, []);
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between px-20 z-10">
      <img className="w-[150px]" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <select
            className="p-2 m-2 bg-gray-500 text-white"
            onChange={handleLangChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGptSearch}
            className="p-2 m-2 text-white cursor-pointer bg-purple-800 hover:bg-purple-950 hover:text-gray-200 rounded-lg"
          >
            {showGptSearch?"Homepage":"GPT-Search"}
          </button>
          <img className="w-12 h-12 mx-4" src={AVATAR_URL} alt="userIcon" />
          <button
            onClick={handleSignout}
            className="text-white text-xl  font-bold hover:underline underline-offset-2 hover:text-gray-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
