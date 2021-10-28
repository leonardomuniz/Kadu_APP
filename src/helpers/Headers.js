import React from 'react';
import UserIcon from '../components/UserIcon';

export const header = {
    headerStyle: { backgroundColor: "#E5E5E5" },
    headerShadowVisible: false,
    title: '',
};
export const headerTab = {
    headerStyle: { backgroundColor: "#E5E5E5" },
    headerShadowVisible: false,
    title: '',
    headerShown: false,
}


export const tabHeaderUser = { headerTitle: 'logo', headerRight: () => <UserIcon /> }