import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{ email: '', password: ' ' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none" //evita que automaticamente la primer letra del email se vuelva mayuscula
              autoCorrect={false} //evita correccion ortografica automatica
              icon="email"
              keyboardType="email-address" //facilita el tipeo de una direccion de email
              name="email"
              placeholder="Email"
              textContentType="emailAddress" //ios permite autocompletar desde la keychain
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
