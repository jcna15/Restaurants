import { size } from 'lodash'
import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { validateEmail } from '../../utils/helpers'
import {useNavigation} from '@react-navigation/native'
import {registerUser} from '../../utils/actions'
import Loading from '../Loading'

export default function RegisterForm() {
    const [showPassword, setshowPassword] = useState(false)
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues)
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const defaultFormValues = () => {
        return {email: "", password:"", confirm:""}
    }
    
    const onChange = (e, type) => {
        setFormData({...formData,[type]: e.nativeEvent.text})
    }

    const doRegisterUser = async () => {
        

        if (!validateData()) {
            return;
        }

        setLoading(true)
        const result = await registerUser(formData.email,formData.password)
        setLoading(false)

        if(!result.statusResponse){
            setErrorEmail(result.error)
            return
        }

        navigation.navigate("account")
    }

    const validateData = () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if(!validateEmail(formData.email)){
            setErrorEmail("Debes de ingresar un correo válido")
            isValid = false
        }

        if(size(formData.password)<6){
            setErrorPassword("Debes ingresar una contraseña de al menos 6 caracteres")
            isValid = false
        }

        if(size(formData.confirm)<6){
            setErrorConfirm("Debes ingresar una confirmación de constraseña de al menos 6 caracteres")
            isValid = false
        }

        if(formData.password !== formData.confirm){
            setErrorConfirm("Contraseña y Confirmación no son iguales..")
            isValid = false
        }

        return isValid
    }

    return (
        <View style={styles.form}>
            <Input
                placeholder="Ingresa tu email"
                containerStyle={styles.input}
                onChange={(e) => onChange(e, "email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                //defaultValue={formData.email}
            />
            <Input
                placeholder="Ingresa tu contraseña"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                //defaultValue={formData.password}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline":"eye-outline"}
                        iconStyle={styles.icon}
                        onPress={()=> setshowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Confirma tu contraseña"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={!showConfirmPassword}
                onChange={(e) => onChange(e, "confirm")}
                errorMessage={errorConfirm}
                //defaultValue={formData.confirm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showConfirmPassword ? "eye-off-outline":"eye-outline"}
                        iconStyle={styles.icon}
                        onPress={()=> setshowConfirmPassword(!showConfirmPassword)}
                    />
                }
            />
            <Button
                title="Registrar nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=>doRegisterUser()}
            />
            <Loading
                isVisible={loading}
                text="Creando Cuenta..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginTop:30
    },
    input:{
        width:"100%"
    },
    btnContainer:{
        marginTop:20,
        width: "95%",
        alignSelf: "center"
    },
    btn:{
        backgroundColor:"#442484"
    },
    icon:{
        color:"#c1c1c1"
    }
})
