import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserGuest from './UserGuest'
import UserLogger from './UserLogger'
import {isUserLogged} from '../../utils/actions'

import {firebaseApp} from '../../utils/firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'
import Loading from '../../components/Loading'


export default function Account() {
    const [login, setlogin] = useState(null)

    useEffect(() => {
        setlogin(isUserLogged())
    }, [])

    if(login == null) {
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return login ? <UserLogger/> : <UserGuest/> 
}

const styles = StyleSheet.create({})
