import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import { header, headerTab, tabHeaderUser } from './src/helpers/Headers';
import CreateUser from './pages/CreateUser/index';
import CreateKadu from './pages/CreateKadu/index';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home/index'
import Login from './pages/Login/index';
import ShowKadu from './pages/ShowKadu';
import Profile from './pages/Profile';
import Loading from './pages/Loading/index';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userCredentials, setUserCredentials] = useState({});
  const [isReady, setIsReady] = useState(false);


  async function getUser() {
    const tokenValue = await AsyncStorage.getItem('authToken');
    const userValue = JSON.parse(await AsyncStorage.getItem('userCredentials'));
    setUserCredentials({ token: tokenValue, name: userValue.name, email: userValue.email });
    setIsReady(true);
  };


  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator >
        {isReady == false ? (
          <>
            <Stack.Screen name="loading" component={Loading} options={header} />
          </>
        ) : userCredentials == null ? (
          <>
            <Stack.Screen name="login" component={Login} options={header} />
            <Stack.Screen name="cadastro" component={CreateUser} options={header} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTab" options={headerTab}>
              {() => (
                <Tab.Navigator screenOptions={({ route, navigation }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                      case 'home':
                        iconName = 'home';
                        break
                      case 'profile':
                        iconName = 'user'
                        break
                      case 'cadastrarKadu':
                        iconName = 'plus'
                        break
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: "#9C27B0",
                  tabBarInactiveTintColor: "#777",
                  tabBarStyle: [{
                    display: "flex"
                  },
                    null
                  ]
                })}
                >
                  <Tab.Screen name="home" component={Home} options={tabHeaderUser} />
                  <Tab.Screen name="cadastrarKadu" component={CreateKadu} options={tabHeaderUser} />
                  <Tab.Screen name="profile" component={Profile} options={{ headerTitle: 'home' }} />
                </Tab.Navigator>
              )}
            </Stack.Screen>
            <Stack.Screen name="mostrarKadu" component={ShowKadu} options={header} />
            <Stack.Screen name="editarPerfil" component={EditProfile} options={{ header }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

