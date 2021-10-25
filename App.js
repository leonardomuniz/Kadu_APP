import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CreateUser from './pages/CreateUser/index';
import CreateKadu from './pages/CreateKadu/index';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home/index'
import Login from './pages/Login/index';
import ShowKadu from './pages/ShowKadu';
import Profile from './pages/Profile';
import Loading from './pages/Loading/index';
import UserIcon from './src/components/UserIcon';


const Stack = createNativeStackNavigator();
const header = { headerStyle: { backgroundColor: "#E5E5E5" }, headerShadowVisible: false, title: '' };


export default function App() {
  const [userCredentials, setUserCredentials] = useState();

  async function getUser() {
    const tokenValue = await AsyncStorage.getItem('authToken');
    const userValue = JSON.parse(await AsyncStorage.getItem('userCredentials'));
    setUserCredentials({ token: tokenValue, name: userValue.name, email: userValue.email });
  };


  useEffect(() => {getUser()}, []);


  return (
    <NavigationContainer>

      <Stack.Navigator >
        {userCredentials == null ? (
          <>
            <Stack.Screen name="login" component={Login} options={header} />
            <Stack.Screen name="cadastro" component={CreateUser} options={header} />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={Home} options={({ navigation }) => ({
              headerStyle: { backgroundColor: "#E5E5E5" },
              headerShadowVisible: false,
              title: '',
              headerRight: () => (
                <UserIcon userFunction={() => navigation.navigate('profile')} />
              )
            })} />
            <Stack.Screen name="cadastrarKadu" component={CreateKadu} options={header} />
            <Stack.Screen name="mostrarKadu" component={ShowKadu} options={header} />
            <Stack.Screen name="profile" component={Profile} options={header} />
            <Stack.Screen name="editarPerfil" component={EditProfile} options={header} />
          </>
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

