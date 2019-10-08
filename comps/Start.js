import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../styles/StartStyles';

function AppStart() {

    return (
        <View style={styles.app}>
            <Image style={styles.appImg} source={require('../img/forAbhi.jpg')} />
            <Text style={styles.appText}>Abhi loves Meliodas</Text>
        </View>
    )
}


export default AppStart;

