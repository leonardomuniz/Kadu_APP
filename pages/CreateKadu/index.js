import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View, TextInput, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import localStyle from './style';
import styles from '../../src/styles/GlobalStyle';
import Kadu from '../../src/components/Kadu';
import Button from '../../src/components/Button';
import Tag from '../../src/components/Tag';
import api from '../../src/services/api';
import { UserContext } from '../../src/context/User';
import { getMediaLibraryPermissions } from '../../src/helpers/Permissions';
import imageOne from '../../src/assets/img-01.jpg';
import imageTwo from '../../src/assets/img-02.jpg';
import imageThree from '../../src/assets/img-03.jpg';
import imageFour from '../../src/assets/img-04.jpg';
import imageFive from '../../src/assets/img-05.jpg';
import imageSix from '../../src/assets/img-06.jpg';


export default function CreateKadu({ navigation }) {
    const [date, setInitialDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [goals, setGoals] = useState(null);
    const [themes, setThemes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [themeList, setThemeList] = useState([]);
    const [showThemeList, setShowThemeList] = useState([]);
    const [range, setRange] = useState(5);
    const [thumb, setThumb] = useState(null);

    const { userInfos } = useContext(UserContext);

    const thumbImage = [
        Image.resolveAssetSource(imageOne).uri,
        Image.resolveAssetSource(imageTwo).uri,
        Image.resolveAssetSource(imageThree).uri,
        Image.resolveAssetSource(imageFour).uri,
        Image.resolveAssetSource(imageFive).uri,
        Image.resolveAssetSource(imageSix).uri
    ];

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setInitialDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => showMode('date');

    async function createKadu() {
        const totalGoals = goals === null ? 0: parseInt(goals)
        const userDate = new Date(date);
        userDate.setDate(userDate.getDate() + totalGoals)

        const kadu = {
            title: title,
            description: description,
            artist: userInfos.id,
            themes: themeList,
            dateInit: date,
            dateEnd: userDate,
            thumb: thumb ? thumb : thumbImage[0],
            goal: totalGoals,
        };

        title !== '' ? await api.post('kadu', kadu): null

        resetForm();
        getThemes();
        navigation.navigate('home');
    };

    function resetForm() {
        setInitialDate(new Date());
        setTitle('');
        setDescription('');
        setGoals(0);
        setShowThemeList([]);
    };

    async function getThemes() {
        const { data } = await api.get('theme');

        setThemes(data);
    };

    async function pickImage() {
        getMediaLibraryPermissions();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setThumb(result.uri);
        }
    };

    useEffect(() => {getThemes();}, []);

    return (
        <ScrollView style={styles.scrollBody}>
            {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onDateChange} />}
            <Text style={styles.title}>Criar Kadu</Text>

            <View style={styles.staticBody}>
                <TextInput style={styles.input} placeholder="Nome do Kadu" onChangeText={setTitle} value={title} />
                <TextInput style={styles.input} placeholder="Descrição" onChangeText={setDescription} value={description} multiline />
                <TextInput style={styles.input} placeholder="Meta" onChangeText={setGoals}  keyboardType='numeric' />
                <Text style={localStyle.infoPrincipal}>{date.toDateString()}</Text>
                <Button textButton="Data inicial" functionButton={showDatepicker} />

                <Text style={styles.subTitle}>Temas:</Text>
                <View style={styles.showCase}>
                    {themes.slice(0, range).map((item, index) => <Tag key={item._id} tagName={item.title} tagFunction={() => {
                        setThemeList(() => [...themeList, item._id]);
                        setShowThemeList(() => [...showThemeList, { id: item._id, name: item.title }]);
                        themes.splice(index, 1)
                    }} />)}
                </View>
                <Button textButton="Ver mais" functionButton={() => setRange(range + 5)} />

                <Text style={styles.subTitle}>Thumb:</Text>
                <View style={localStyle.justifyContentLeft}>
                    {thumbImage.map((item, index) => <Kadu key={index} kaduImage={{ uri: item }} kaduFunction={() => setThumb(item)} />)}
                </View>
                <Button textButton="pegar imagem da galeria" functionButton={pickImage} />
            </View>

            <Text style={localStyle.infoPrincipal}>Temas escolhidos: </Text>
            <View style={localStyle.justifyContentLeft}>{showThemeList.map(item => <Tag key={item.id} tagName={item.name} />)}</View>

            <Text style={localStyle.infoPrincipal}>Thumb: </Text>
            <View style={styles.staticBody}>{thumb && <Kadu kaduImage={{ uri: thumb }} />}</View>

            <Button textButton="Finalizar" functionButton={() => createKadu()} />
        </ScrollView>
    );
};