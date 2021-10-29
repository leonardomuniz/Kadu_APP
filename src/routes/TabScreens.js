import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator();

import { tabHeaderUser } from '../helpers/Headers';
import Home from '../../pages/Home/index';
import CreateKadu from '../../pages/CreateKadu/index';
import Profile from '../../pages/Profile/index';

function TabScreens() {
    return (
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
    );
};

export default TabScreens;