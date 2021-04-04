import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import { Button } from 'react-native-elements'
import Loading from '../../components/Loading'
import {useNavigation} from '@react-navigation/native'

export default function UserGuest() {

    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/Logo_Restaurant.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>
                ¿Como describirias a tu Restaurante Favorito? Busca y visualiza los mejores restaurantes
                de una forma sencilla, vota cual te ha gustado mas y comenta tu experiencia.
            </Text>
            <Button
                title="Ver tu perfil"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30
    },
    image:{
        height:300,
        width: "100%",
        marginBottom: 10
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description:{
        textAlign:"justify",
        marginBottom: 20,
        color:'#a65273'
    },
    button:{
        backgroundColor:"#442484"
    }
})
