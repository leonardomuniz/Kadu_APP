import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

async function getMediaLibraryPermissions() {
    if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        };
    };
};

async function getCameraPermission() {
    if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('É meu parceiro, ou você colabora ou não vai rolar');
        };
    };
};


export {getMediaLibraryPermissions, getCameraPermission };