import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastrarUsuario from './pages/CadastrarUsuario/index';
import CadastrarKadu from './pages/CadastrarKadu/index';
import EditarPerfil from './pages/EditarPerfil';
import Home from './pages/Home/index'
import Login from './pages/Login/index';
import MostrarKadu from './pages/MostrarKadu';
import Profile from './pages/Profile';

import { AuthProvider } from './context/AuthContext.js';

const Stack = createNativeStackNavigator();

const header = {
  headerStyle: { backgroundColor: "#E5E5E5" },
  headerShadowVisible: false,
  title: ''
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={header} />
        <Stack.Screen name="cadastro" component={CadastrarUsuario} options={header} />
        <AuthProvider>
          <Stack.Screen name="home" component={Home} options={header} />
          <Stack.Screen name="cadastrarKadu" component={CadastrarKadu} options={header} />
          <Stack.Screen name="mostrarKadu" component={MostrarKadu} options={header} />
          <Stack.Screen name="profile" component={Profile} options={header} />
          <Stack.Screen name="editarPerfil" component={EditarPerfil} options={header} />
        </AuthProvider>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

