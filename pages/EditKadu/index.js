import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import styles from '../../src/styles/GlobalStyle';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import Tag from '../../src/components/Tag';
import api from '../../src/services/api';
import { getMediaLibraryPermissions } from '../../src/helpers/Permissions';


export default function EditKadu({ navigation, route }) {
    const [date, setInitialDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [kadu, setKadu] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [goals, setGoals] = useState(null);
    const [themes, setThemes] = useState(null);
    const [showThemeList, setShowThemeList] = useState(null);
    const [thumb, setThumb] = useState(null);
    const [range, setRange] = useState(5);

    async function pickImage() {
        getMediaLibraryPermissions();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            console.log(result.uri);
            setThumb(result.uri);
        };
    };

    async function updateKadu() {
        const totalGoals = goals === null ? 0: parseInt(goals)
        const userDate = new Date(date);
        userDate.setDate(userDate.getDate() + totalGoals);

        const kadu = {
            title: title === '' ? kadu.title : title,
            description: description === '' ? kadu.description : description,
            goal: goals === null ? kadu.goal : parseInt(goals),
            themes: themes === null ? kadu.themes : themes,
            dateInit: date,
            dateEnd: userDate,
            thumb: thumb === null ? kadu.thumb : thumb,
        };

        if(title !== ''){
            await api.put(`kadu/${route.params?.kaduId}`, kadu);
            navigation.goBacK()
        };
    };

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

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`kadu/${route.params?.kaduId}`);
                const totalThemes = await api.get('theme');

                const filteredThemes = data.themes.map(item => item.title);
                const resultThemes = totalThemes.data.filter(item => filteredThemes.includes(item.title) === true ? false : true)

                setKadu(data);
                setThumb(data.thumb);
                setThemes(data.themes);
                setShowThemeList(resultThemes)

            } catch (error) {
                return console.log(error);
            };
        })();
    }, []);


    return (
        <ScrollView style={styles.scrollBody}>
            {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onDateChange} />}
            <Text style={styles.title}>Editar Kadu</Text>

            <View style={styles.staticBody}>
                <TextInput style={styles.input} placeholder={`${kadu && kadu.title}`} onChangeText={setTitle} value={title} />
                <TextInput style={styles.input} placeholder={`${kadu && kadu.description}`} onChangeText={setDescription} value={description} multiline />
                <TextInput style={styles.input} placeholder={`${kadu && kadu.goal}`} onChangeText={setGoals} value={goals} keyboardType='numeric' />
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 10,
                }}>{date.toDateString()}</Text>
                <Button textButton="Data inicial" functionButton={showDatepicker} />


                <Text style={styles.subTitle}>Seus temas:</Text>
                <View style={styles.showCase}>
                    {themes && themes.map((item, index) => (
                        <Tag key={item._id} tagName={item.title} tagFunction={() => {
                            themes.splice(index, 1);
                            setShowThemeList(() => [...showThemeList, { _id: item._id, title: item.title }]);
                        }} />
                    ))}
                </View>


                <Text style={styles.subTitle}>Temas:</Text>
                <View style={styles.showCase}>
                    {showThemeList && showThemeList.slice(0, range).map((item, index) => (
                        <Tag key={item._id} tagName={item.title} tagFunction={() => {
                            showThemeList.splice(index, 1);
                            setThemes(() => [...themes, { _id: item._id, title: item.title }]);
                        }} />
                    ))}
                </View>
                <Button textButton="Ver mais" functionButton={() => setRange(range + 5)} />


                <Text style={styles.subTitle}>Thumb: </Text>
                <View style={styles.staticBody}>{thumb && <Kadu kaduImage={{ uri: thumb }} />}</View>
                <Button textButton="pegar imagem da galeria" functionButton={pickImage} />


                <Button textButton="Finalizar" functionButton={() => updateKadu()} />
            </View>
        </ScrollView>
    );
};