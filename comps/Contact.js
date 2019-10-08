import React from 'react';
import {View, Text} from 'react-native';
import styles from "../styles/ContactStyles";

export default function Contact() {
    return (
        <View styles={styles.app}>
            <View>
                <Text style={styles.name}>Shenis Osias</Text>
                <Text style={styles.phoneno}><Text style={styles.title}>Phone Number: </Text>+1 (604) 444-4040</Text>
                <Text><Text style={styles.title}>Address: </Text>Somewhere in Metrotown</Text>
            </View>
            <View>
                <Text>Abhimannyu Sakthivel</Text>
                <Text style={styles.phoneno}><Text style={styles.title}>Phone Number: </Text>+1 (236) 696-9696</Text>
                <Text><Text style={styles.title}>Address: </Text>Somewhere in Burnaby</Text>
            </View>
            <View>
                <Text>Tin Hoang</Text>
                <Text style={styles.phoneno}><Text style={styles.title}>Phone Number: </Text>+1 (778) 778-7778</Text>
                <Text><Text style={styles.title}>Address: </Text>Somewhere in New Westminster</Text>
            </View>
        </View>

    )
}
