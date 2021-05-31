import React from 'react'

import { Image, Text, TextInput, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeName';
import Message from '../common/Message';


const RegisterComponent = ({
    onChange,
    onSubmit,
    form,
    loading,
    error,
    errors,
}) => {

    const {navigate} = useNavigation();

    return (
        <Container>
            
            <Image width={70} height={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} ></Image>
            
            <View>
                <Text style={styles.title} >Welcome to RN</Text>
                <Text style={styles.subTitle} >Create free an account</Text>

                <View style={styles.form}>
                    { error?.error && <Message 
                    retry 
                    danger
                    retryFn={()=>{
                        onSubmit();
                    }} 
                    message={error.error}
                    />}
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        onChangeText={ (value) => {
                            onChange({ name: 'userName', value })
                        }} 
                        error={errors.userNameError || error?.username?.[0]}
                        />
    
                    <Input
                        label="First name"
                        iconPosition="right"
                        placeholder="Enter First name"
                        onChangeText={ (value) => {
                            onChange({ name: 'firstName', value })
                        }} 
                        error={errors.firstNameError || error?.first_name?.[0]}
                        />

                    <Input
                        label="Last name"
                        iconPosition="right"
                        placeholder="Enter Last name"
                        onChangeText={ (value) => {
                            onChange({ name: 'lastName', value })
                        }} 
                        error={errors.lastNameError || error?.last_name?.[0]}
                        />

                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="Enter email"
                        onChangeText={ (value) => {
                            onChange({ name: 'email', value })
                        }} 
                        error={errors.emailError || error?.email?.[0]}
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
                        error={errors.passwordError || error?.password?.[0]}
                    />
                    {console.log('error', error)}
                    <CustomButton 
                        loading={loading} 
                        onPress={onSubmit} 
                        disabled={loading}
                        primary 
                        title="Submit" />

                    <View style={styles.createSection } >
                        <Text style={styles.infoText }>Already have an account?</Text>
                        <TouchableOpacity 
                            onPress={ () => navigate(LOGIN) }
                            >
                            <Text style={styles.linkBtn }>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    )
}

export default RegisterComponent;