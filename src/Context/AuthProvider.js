import React, { createContext } from "react";
import FirebaseAuth from "../Hooks/FirebaseAuth";

export const AuthContext = createContext();

/* 
///// Style(1)
const AuthProvider = (props) => {
    return (
        <div>
            <AuthContext.Provider>
                {props.children}
            </AuthContext.Provider>
        </div>
    );
}; 
*/

/* 
///// Style(2)
const AuthProvider = (props) => {
  const { children } = props;
  return (
    <div>
      <AuthContext.Provider>{children}</AuthContext.Provider>
    </div>
  );
};
 */

///// Style(3)
const AuthProvider = ({ children }) => {
  const allContext = FirebaseAuth();
  return (
    <div>
      <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
