import React, { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { header, headerWithOutTabs } from '../helpers/Headers';
import { UserContext } from '../context/User';

import CreateUser from '../../pages/CreateUser/index';
import EditProfile from '../../pages/EditProfile';
import Login from '../../pages/Login/index';
import ShowKadu from '../../pages/ShowKadu';
import TabScreens from './TabScreens';
import { LoadingStack } from './LoadingStack';

const Stack = createNativeStackNavigator();


export default function Routes() {
    const { userInfos, setUserInfos } = useContext(UserContext);

    async function getUser() {
        const userValue = JSON.parse(await AsyncStorage.getItem('userInfo'));

        setUserInfos(userValue);
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <NavigationContainer>
            <Stack.Navigator >
                {userInfos != null ? (
                    <>
                        <Stack.Screen name="mainTab" component={TabScreens} options={header} />
                        <Stack.Screen name="mostrarKadu" component={ShowKadu} options={headerWithOutTabs} />
                        <Stack.Screen name="editarPerfil" component={EditProfile} options={headerWithOutTabs} />
                        <Stack.Screen name="splashLogout" component={LoadingStack} options={headerWithOutTabs} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="login" component={Login} options={header} />
                        <Stack.Screen name="cadastro" component={CreateUser} options={header} />
                        <Stack.Screen name="splashLogin" component={LoadingStack} options={headerWithOutTabs} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}