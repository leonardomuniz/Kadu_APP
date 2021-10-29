import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({children}){
    const [userInfos, setUserInfos] = useState(null);

    return (
        <UserContext.Provider value={{userInfos, setUserInfos}}>
            {children}
        </UserContext.Provider>
    );
};


export { UserContext, UserProvider }