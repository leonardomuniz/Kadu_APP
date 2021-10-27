import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
//import LinearGradient from 'react-native-linear-gradient';


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
const Tab = createBottomTabNavigator();
const header = {
  headerStyle: { backgroundColor: "#E5E5E5" },
  headerShadowVisible: false,
  title: '',
};
const headerTab ={
  headerStyle: { backgroundColor: "#E5E5E5" },
  headerShadowVisible: false,
  title: '',
  headerShown: false,
}


const tabHeaderUser = { headerTitle: 'logo', headerRight: ()=> <UserIcon /> }


export default function App() {
  const [userCredentials, setUserCredentials] = useState();

  async function getUser() {
    const tokenValue = await AsyncStorage.getItem('authToken');
    const userValue = JSON.parse(await AsyncStorage.getItem('userCredentials'));
    setUserCredentials({ token: tokenValue, name: userValue.name, email: userValue.email });
  };


  useEffect(() => { getUser() }, []);


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
                })}
                  tabBarOptions={{
                    activeTintColor: '#9C27B0',
                    inactiveTintColor: '#777',
                  }}
                >
                  <Tab.Screen name="home" component={Home} options={tabHeaderUser} />
                  <Tab.Screen name="cadastrarKadu" component={CreateKadu} options={tabHeaderUser} />
                  <Tab.Screen name="profile" component={Profile} options={{headerTitle: 'home'}} />
                </Tab.Navigator>
              )}
            </Stack.Screen>
            <Stack.Screen name="mostrarKadu" component={ShowKadu} options={header} />
            <Stack.Screen name="editarPerfil" component={EditProfile} options={{header}} />
          </>
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

