import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserGuest from './UserGuest'
import UserLogger from './UserLogger'
import {getCurrentUser, isUserLogged} from '../../utils/actions'
import { useFocusEffect } from '@react-navigation/native'

import {firebaseApp} from '../../utils/firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'
import Loading from '../../components/Loading'


export default function Account() {
    const [login, setlogin] = useState(null)

    useFocusEffect(
        useCallback(() => {
            const user = getCurrentUser()
            user ? setlogin(true):setlogin(false)
        }, [])
    )

    if(login == null) {
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return login ? <UserLogger/> : <UserGuest/> 
}

const styles = StyleSheet.create({})
