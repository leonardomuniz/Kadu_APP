import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Loading from '../../pages/Loading/index';
import { header } from '../helpers/Headers';


const Stack = createNativeStackNavigator();

let userInfos;

function LoadingStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="loadingStack" component={Loading} options={header} />
        </Stack.Navigator>
    );
};


export { LoadingStack, userInfos }; 