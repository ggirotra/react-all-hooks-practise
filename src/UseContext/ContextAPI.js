import React, { createContext, useContext, useState} from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser( { name: "Gaurav Giro", email: "stg@gmail.com" });
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserProfile = () => {
    const { user, login, logout } = useContext(UserContext);

    return (       
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                <p>Please log in</p>
                <button onClick={login}>Login</button>
              </div>
            )}
        </div>
    );
};
