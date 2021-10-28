import React, { useState, createContext, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext('');

export default function UserProvider({children}){
    const [userInfos, setUserInfos] = useState({});


        const tokenValue = async () => await AsyncStorage.getItem('authToken');
        const userValue = async () => JSON.parse(await AsyncStorage.getItem('userCredentials'));

        setUserInfos({ token: tokenValue, name: userValue.name, email: userValue.email });
    

    return(
        <UserContext.Provider value={userInfos}>
            {children}
        </UserContext.Provider>
    )
}


export function useUser() {
    const context = useContext(UserContext);
    const {userInfos} = context;
    return {userInfos};
}