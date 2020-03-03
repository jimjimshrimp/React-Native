import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native'

import { Button, Block, Text } from '../components';
import { theme } from '../constants';
import {auth} from './db'


const VALID_PASSWORD = "1234";

export default class Login extends Component {
  state = {

    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  }
  static navigationOptions = {
    headerTitle: <Text h1 bold white> Login </Text>,
  };
  
  handleLogin() {
    const { navigation } = this.props;
    const { password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Home");
      auth.signInAnonymously()
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text gray> Please enter your password </Text>
            <TextInput
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button shadow color='primary'  onPress={() => {this.handleLogin()}}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> : 
                <Text bold white center>Login</Text>
              }
            </Button>

            <Button onPress={() => {navigation.navigate('Forgot')}}>
              <Text gray caption center style={{ textDecorationLine: 'underline' }}>
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    height: theme.sizes.base * 3,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.pagecolor,
  }
})