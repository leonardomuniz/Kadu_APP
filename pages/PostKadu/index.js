import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';


import styles from '../../src/styles/GlobalStyle';
import localStyle from './style';
import Button from '../../src/components/Button';
import api from '../../src/services/api';

import { getCameraPermission, getMediaLibraryPermissions } from '../../src/helpers/Permissions';

export default function PostKadu({ navigation, route }) {
    const [kadu, setKadu] = useState({});
    const [dateInit, setDateInit] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [goals, setGoals] = useState('');
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [erro, setErro] = useState(null);

    async function pickCameraImage() {
        getCameraPermission();

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        setImage(null);
        setCamera(null);

        if (!result.cancelled) {
            setCamera(result.uri);
        };
    };

    async function pickImage() {
        getMediaLibraryPermissions();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        setImage(null);
        setCamera(null);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    async function postPicture() {
        if (image === null && camera === null) {
            setErro('é necessário postar pelo menos uma imagem');
        } else {
            setErro(null)
            const postBody = {
                picture: image ? image : camera,
                kadu:route.params?.kaduId
            };

            await api.post('/post/', postBody);
            navigation.goBack();
        }
    };


    function calculateGoals() {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(dateInit);
        const secondDate = new Date(dateEnd);

        const differenceBetweenDates = Math.round(Math.abs((firstDate - secondDate) / oneDay));

        return differenceBetweenDates;
    };

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`kadu/${route.params?.kaduId}`);

                setKadu(data);
                setDateInit(new Date(data.dateInit).toDateString());
                setDateEnd(new Date(data.dateEnd).toDateString());
            } catch (error) {
                return console.log(error);
            };
        })();

        const totalGoals = calculateGoals();
        setGoals(kadu.goal - totalGoals);
    }, []);


    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>

                <Text style={localStyle.infoPrincipal}>Tema: { }</Text>
                <Text style={localStyle.infoPrincipal}>
                    <FontAwesome5 name="calendar-alt" size={24} color="black" /> {dateInit} - <FontAwesome5 name="calendar-alt" size={24} color="black" /> {dateEnd}
                </Text>
                <View style={styles.showCase}>
                    <Button textButton="galeria" functionButton={pickImage} />
                    <Button textButton="câmera" functionButton={pickCameraImage} />
                </View>

                {image && <Image source={{ uri: image }} style={{ width: "80%", height: 400 }} />}
                {camera && <Image source={{ uri: camera }} style={{ width: "80%", height: 400 }} />}

                <Text style={styles.errorMessage}>{erro}</Text>
                <Button textButton="postar kadu" functionButton={() => postPicture()} />
            </View>
        </ScrollView>
    );
};
