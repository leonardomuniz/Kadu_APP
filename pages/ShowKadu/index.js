import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../src/styles/GlobalStyle';
import localStyle from './style';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import Tag from '../../src/components/Tag';
import api from '../../src/services/api';



function ShowKadu({ navigation, route }) {
    const [kadu, setKadu] = useState({});
    const [post, setPost] = useState(null);
    const [dateInit, setDateInit] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [goals, setGoals] = useState('');
    const isFocused = useIsFocused();

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

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`post/kadu/${route.params?.kaduId}`);

                setPost(data);
            } catch (error) {
                return console.log(error);
            };
        })();

    }, [isFocused]);




    return (
        <ScrollView style={styles.scrollBody}>
            <Button textButton="postar desenho" functionButton={() => navigation.navigate('postKadu', {kaduId: route.params?.kaduId})} />
            <Text style={localStyle.infoPrincipal}>{kadu.title}</Text>
            <Text style={localStyle.infoPrincipal}>
                <FontAwesome5 name="calendar-alt" size={24} color="black" /> {dateInit} - <FontAwesome5 name="calendar-alt" size={24} color="black" /> {dateEnd}
            </Text>
            <Text style={localStyle.infoSecundaria}>{kadu.description}</Text>

            <Text style={styles.subTitle}>Dias concluidos:{goals}</Text>

            <Text style={localStyle.infoPrincipal}>Tema do dia:</Text>
            <Text style={localStyle.infoPrincipal}>Desenhos feitos:</Text>
            <View style={localStyle.justifyContentLeft}>
                {post && post.map(item =>  <Kadu kaduImage={{ uri: item.picture }} key={item._id} />)}
            </View>

        </ScrollView>
    );
}

export default ShowKadu;