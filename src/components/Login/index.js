import React from 'react'

import { Image, Text, TextInput, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeName';
import Message from '../common/Message';


const LoginComponent = ({ error, onChange, onSubmit, loading }) => {

    const {navigate} = useNavigation();

    return (
        <Container>
            
            <Image width={70} height={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} ></Image>
            
            <View>
                <Text style={styles.title} >Welcome to RN</Text>
                <Text style={styles.subTitle} >Create an account</Text>
                
                <View style={styles.form}>
                    { error && !error.error && (<Message onDismiss={()=>{}} danger message="invalid credentials"/>)}

                    { error?.error && <Message 
                        retry 
                        danger
                        onDismiss
                        retryFn={()=>{
                            onSubmit();
                        }} 
                        message={error.error}
                        />
                    }
                    <Input
                    label="Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    onChangeText={ (value) => {
                        onChange({ name: 'userName', value })
                    }} 
                    />

                    <Input
                        label="Password"
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={ (value) => {
                            onChange({ name: 'password', value })
                        }} 
                    />

                    <CustomButton 
                        disabled={loading}
                        loading={loading}
                        onPress={onSubmit} 
                        secondary title="Submit" />

                    <View style={styles.createSection } >
                        <Text style={styles.infoText }>Need a new account?</Text>
                        <TouchableOpacity 
                            onPress={ () => navigate(REGISTER) }
                            >
                            <Text style={styles.linkBtn }>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    )
}

export default LoginComponent;
