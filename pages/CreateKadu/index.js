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



function CreateKadu({ navigation }) {
    const [initialDate, setInitialDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());
    const [initialDateMode, setInitialDateMode] = useState('date');
    const [finalDateMode, setFinalDateMode] = useState('date');
    const [showInitialDate, setShowInitialDate] = useState(false);
    const [showFinalDate, setShowFinalDate] = useState(false);


    const [goals, setGoals] = useState(0);
    const [themes, setThemes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [themeList, setThemeList] = useState([]);
    const [showThemeList, setShowThemeList] = useState([]);
    const [range, setRange] = useState(5);
    const [thumb, setThumb] = useState(null);

    const { userInfos } = useContext(UserContext);

    const thumbImageOne = Image.resolveAssetSource(imageOne).uri;
    const thumbImageTwo = Image.resolveAssetSource(imageTwo).uri;
    const thumbImageThree = Image.resolveAssetSource(imageThree).uri;
    const thumbImageFour = Image.resolveAssetSource(imageFour).uri;
    const thumbImageFive = Image.resolveAssetSource(imageFive).uri;
    const thumbImageSix = Image.resolveAssetSource(imageSix).uri;

    const onInitialDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowInitialDate(Platform.OS === 'ios');
        setInitialDate(currentDate);
    };

    const onFinalDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowFinalDate(Platform.OS === 'ios');
        setFinalDate(currentDate);
    };


    const showInitialDateMode = (currentMode) => {
        setShowInitialDate(true);
        setInitialDateMode(currentMode);
    };

    const showFinalDateMode = (currentMode) => {
        setShowFinalDate(true);
        setFinalDateMode(currentMode);
    };


    const showInitialDatepicker = () => {
        showInitialDateMode('date');
    };

    const showFinalDatepicker = () => {
        showFinalDateMode('date');
    };


    function calculateGoals() {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(initialDate);
        const secondDate = new Date(finalDate);

        const differenceBetweenDates = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        setGoals(goals)

        return differenceBetweenDates;
    };

    async function createKadu() {
        const goals = calculateGoals();

        const kadu = {
            title: title,
            description: description,
            artist: userInfos.id,
            themes: themeList,
            dateInit: initialDate,
            dateEnd: finalDate,
            thumb: thumb ?  thumb: thumbImageOne,
            goal: goals,
        }

        try{
            api.post('kadu', kadu);
        } catch(error){
            console.log(error);
        }

        resetForm();
        getThemes();
        navigation.navigate('home');


    };

    function resetForm() {
        setInitialDate(new Date());
        setFinalDate(new Date());
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
            setThumb({ uri: result.uri });
        }
    };


    useEffect(() => {
        getThemes();
    }, []);




    return (
        <ScrollView style={styles.scrollBody}>

            <Text style={styles.title}>Criar Kadu</Text>
            <Text style={styles.subTitle}>Informações</Text>

            <View style={styles.staticBody}>
                <TextInput style={styles.input} placeholder="Nome do Kadu" onChangeText={setTitle} value={title} />
                <TextInput style={styles.input} placeholder="Descrição" secureTextEntry={true} onChangeText={setDescription} value={description} multiline />

                <View style={styles.showCase}>
                    <Button textButton="inicio" functionButton={showInitialDatepicker} />
                    <Button textButton="Fim" functionButton={showFinalDatepicker} />
                </View>

                <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>

                {showInitialDate && <DateTimePicker value={initialDate} mode={initialDateMode} display="default" onChange={onInitialDateChange} />}
                {showFinalDate && <DateTimePicker value={finalDate} mode={finalDateMode} display="default" onChange={onFinalDateChange} />}



                <Text style={styles.subTitle}>Temas</Text>

                <View style={styles.showCase}>
                    {themes.slice(0, range).map((item, index) => <Tag key={item._id} tagName={item.title} tagFunction={() => {
                        setThemeList(() => [...themeList, item._id]);
                        setShowThemeList(() => [...showThemeList, { id: item._id, name: item.title }]);
                        themes.splice(index, 1)
                    }} />)}
                </View>
                <Button textButton="Ver mais" functionButton={() => setRange(range + 5)} />
                <Text style={styles.subTitle}>Thumb do kadu</Text>
                <View style={localStyle.justifyContentLeft}>
                    <Kadu kaduImage={{ uri: thumbImageOne }} kaduFunction={() => setThumb(thumbImageOne)} />
                    <Kadu kaduImage={{ uri: thumbImageTwo }} kaduFunction={() => setThumb(thumbImageTwo)} />
                    <Kadu kaduImage={{ uri: thumbImageThree }} kaduFunction={() => setThumb(thumbImageThree)} />
                    <Kadu kaduImage={{ uri: thumbImageFour }} kaduFunction={() => setThumb(thumbImageFour)} />
                    <Kadu kaduImage={{ uri: thumbImageFive }} kaduFunction={() => setThumb(thumbImageFive)} />
                    <Kadu kaduImage={{ uri: thumbImageSix }} kaduFunction={() => setThumb(thumbImageSix)} />
                </View>
                <Button textButton="pegar imagem da galeria" functionButton={pickImage} />
            </View>


            <Text style={localStyle.infoPrincipal}>Titulo: {title}</Text>
            <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>
            <Text style={localStyle.infoPrincipal}>Descrição:</Text>
            <Text style={localStyle.infoSecundaria}>{description}</Text>
            <Text style={localStyle.infoPrincipal}>Temas: </Text>
            <View style={localStyle.justifyContentLeft}>
                {showThemeList.map(item => <Tag key={item.id} tagName={item.name} />)}
            </View>
            <Text style={localStyle.infoPrincipal}>Thumb: </Text>

            <View style={styles.staticBody}>
                {thumb && <Kadu kaduImage={{uri: thumb}} />}
            </View>

            <Button textButton="Finalizar" functionButton={() => createKadu()} />
            <Image source={{ uri: 'fille:///../../src/assets/img-01.jpg' }} />
            <Text></Text>

        </ScrollView>
    );
}

export default CreateKadu;