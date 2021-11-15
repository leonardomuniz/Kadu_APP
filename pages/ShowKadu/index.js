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
    const [kadu, setKadu] = useState(null);
    const [themes, setThemes] = useState([]);
    const [post, setPost] = useState(null);
    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`kadu/${route.params?.kaduId}`);

                setKadu(data);
            } catch (error) {
                return console.log(error);
            };
        })();
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
            <Button textButton="postar desenho" functionButton={() => navigation.navigate('postKadu', { kaduId: route.params?.kaduId })} />
            <Text style={localStyle.infoPrincipal}>{kadu && kadu.title}</Text>
            <Text style={localStyle.infoPrincipal}>
                {kadu && new Date(kadu.dateInit).toDateString()} - {kadu && new Date(kadu.dateEnd).toDateString()}
            </Text>
            <Text style={localStyle.infoSecundaria}>{kadu && kadu.description}</Text>

            <Text style={styles.subTitle}>Dias concluidos:{kadu && kadu.goal}</Text>

            <Text style={styles.subTitle}>Temas:</Text>
            <View style={styles.showCase}>
                {kadu && kadu.themes.map((item, index) => <Tag key={item._id} tagName={item.title} />)}
            </View>
            <Text style={localStyle.infoPrincipal}>Desenhos feitos:</Text>
            <View style={localStyle.justifyContentLeft}>
                {post && post.map(item => <Kadu kaduImage={{ uri: item.picture }} key={item._id} />)}
            </View>

        </ScrollView>
    );
}

export default ShowKadu;