import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login({ loggedIn, setLoggedIn }) {
  return (
    <div>
    </div>
  );
}


// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function Login({ loggedIn, setLoggedIn }) {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Auth Page</h1>
//       {loggedIn ? (
//         <button
//           onClick={() => {
//             setLoggedIn(false);
//           }}
//         >
//           Log Out
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setLoggedIn(true);
//             navigate("/");
//           }}
//         >
//           Log In
//         </button>
//       )}
//     </div>
//   );
// }
