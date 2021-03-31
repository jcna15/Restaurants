import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserGuest from './UserGuest'
import UserLogger from './UserLogger'
import * as isUserLogged from '../../utils/actions'

import {firebaseApp} from '../../utils/firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'


export default function Account() {
    const [login, setlogin] = useState(null)

        firebase.auth().onAuthStateChanged((user) => {
            user !== null ? (setlogin(true)):(setlogin(false))})


    if(login == null) {
        return <Text>Cargando...</Text>
    }

    return login ? <UserLogger/> : <UserGuest/> 
}

const styles = StyleSheet.create({})
