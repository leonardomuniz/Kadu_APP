import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastrarUsuario from './pages/CadastrarUsuario/index';
import CadastrarKadu from './pages/CadastrarKadu';
import EditarPerfil from './pages/EditarPerfil';
import Home from  './pages/Home/index'
import Login from './pages/Login/index';
import MostrarKadu from './pages/MostrarKadu';
import Perfil from './pages/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />
        <Stack.Screen name="cadastro" component={CadastrarUsuario} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />

        <Stack.Screen name="home" component={Home} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />
        <Stack.Screen name="cadastrarKadu" component={CadastrarKadu} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />
        <Stack.Screen name="mostrarKadu" component={MostrarKadu} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />
        <Stack.Screen name="perfil" component={Perfil} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />
                <Stack.Screen name="editarPerfil" component={EditarPerfil} options={{
          headerStyle: { backgroundColor: "#E5E5E5" },
          headerShadowVisible: false,
          title: ''
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

