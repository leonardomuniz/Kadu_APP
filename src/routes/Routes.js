import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


import { header, headerWithOutTabs } from '../helpers/Headers';
import { UserContext } from '../context/User';

import CreateUser from '../../pages/CreateUser/index';
import EditProfile from '../../pages/EditProfile/index';
import EditKadu from '../../pages/EditKadu/index';
import Login from '../../pages/Login/index';
import ShowKadu from '../../pages/ShowKadu/index';
import PostKadu from '../../pages/PostKadu/index';
import TabScreens from './TabScreens';

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
                        <Stack.Screen name="editProfile" component={EditProfile} options={headerWithOutTabs} />
                        <Stack.Screen name="postKadu" component={PostKadu} options={headerWithOutTabs} />
                        <Stack.Screen name="showKadu" component={ShowKadu} options={({ navigation, route }) => ({
                            headerStyle: { backgroundColor: "#E5E5E5" },
                            headerShadowVisible: false,
                            title: '',
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('editKadu', { kaduId: route.params?.kaduId })} >
                                    <FontAwesome5 name="edit" size={24} color="black" />
                                </TouchableOpacity>
                            ),
                        })} />
                        <Stack.Screen name="editKadu" component={EditKadu} options={headerWithOutTabs} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="login" component={Login} options={header} />
                        <Stack.Screen name="cadastro" component={CreateUser} options={header} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}