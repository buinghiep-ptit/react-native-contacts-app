import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RegisterComponent from '../../components/SignUp';
import register, {clearAuthState} from '../../context/actions/auth/register';
import axiosInstance from '../../helpers/axiosInterceptor';
import {GlobalContext} from '../../context/reducers/Provider';
import { LOGIN } from '../../constants/routeName';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Register = () => {

    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setErrors] = useState({});

    const {
        authDispatch, 
        authState: { error, loading, data }
    } = useContext(GlobalContext)

    useEffect( () =>{
        if(data) {
            navigate(LOGIN);
        }
    }, [data]);

    useFocusEffect(
        useCallback(
            () => {
                 return () => {
                    if(data||error) {
                        clearAuthState()(authDispatch);
                    }
                 }
            },
            [data, error],
        )
    )

    const onChange = ({ name, value }) => {
        setForm({...form , [name]: value });

        if(value !== '') {

            if(name === 'password') {
                if(value.length < 6) {
                    setErrors( prev => {
                        return { ...prev, [`${name}Error`]: 'This field needs min 6 characters' }
                    })
                }
                else {
                    setErrors( prev => {
                        return { ...prev, [`${name}Error`]: null }
                    })
                }
            }
            else{
                setErrors( prev => {
                    return { ...prev, [`${name}Error`]: null }
                })
            }
        }
        else {
            setErrors( prev => {
                return { ...prev, [`${name}Error`]: 'This field is required' }
            })
        }
    };

    const onSubmit = () => {
        // validations
        if(!form.userName) {
            setErrors( prev => {
                return { ...prev, userNameError: "Please add username" }
            })
        }
        if(!form.firstName) {
            setErrors( prev => {
                return { ...prev, firstNameError: "Please add first name" }
            })
        }
        if(!form.lastName) {
            setErrors( prev => {
                return { ...prev, lastNameError: "Please add last name" }
            })
        }
        if(!form.email) {
            setErrors( prev => {
                return { ...prev, emailError: "Please add email" }
            })
        }
        if(!form.password) {
            setErrors( prev => {
                return { ...prev, passwordError: "Please add password" }
            })
        }


        if(
            Object.values(form).length === 5 && 
            Object.values(form).every( item => item.trim().length > 0) &&
            Object.values(errors).every( item => !item)
        ) {
            register(form)(authDispatch);
        }
    }   

    return (
        <RegisterComponent 
            onChange={onChange}
            onSubmit={onSubmit} 
            form={form} 
            errors={errors} 
            error={error}
            loading={loading}
        />
    );
}

export default Register;