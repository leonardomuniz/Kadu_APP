import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CadastrarUsuario from './pages/CadastrarUsuario/index';
import CadastrarKadu from './pages/CadastrarKadu/index';
import EditarPerfil from './pages/EditarPerfil';
import Home from './pages/Home/index'
import Login from './pages/Login/index';
import MostrarKadu from './pages/MostrarKadu';
import Profile from './pages/Profile';
import Loading from './pages/Loading/index';


const Stack = createNativeStackNavigator();

const header = {
  headerStyle: { backgroundColor: "#E5E5E5" },
  headerShadowVisible: false,
  title: ''
};



export default function App() {
  const tokenAuth = async () => await AsyncStorage.getItem('authToken');


  return (
    <NavigationContainer>
      <Stack.Navigator >
        {tokenAuth == null ? (
          <>
            <Stack.Screen name="login" component={Login} options={header} />
            <Stack.Screen name="cadastro" component={CadastrarUsuario} options={header} />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={Home} options={header} />
            <Stack.Screen name="cadastrarKadu" component={CadastrarKadu} options={header} />
            <Stack.Screen name="mostrarKadu" component={MostrarKadu} options={header} />
            <Stack.Screen name="profile" component={Profile} options={header} />
            <Stack.Screen name="editarPerfil" component={EditarPerfil} options={header} />
          </>
        )}
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

