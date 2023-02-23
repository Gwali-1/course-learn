import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

// export const AuthContextProvider = function (props) {
//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogin: loginHandler,
//         onLogout: logoutHandler,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };
export default AuthContext;
