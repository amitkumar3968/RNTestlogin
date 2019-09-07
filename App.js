/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const axios = require('axios');


let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height


const App = () => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  function doLogin(email, password) {

    // email validation, password validation pending.

    // need to create constants file for urls.

    // react navigation is also pending, then add new page/component , which will show after login response data.
    


    var loginUrl = "https://reqres.in/api/login?email=" + email + "&password=" + password

    axios.get(loginUrl, {
      headers: {
        'Authorization': ''
      }
    }).then((response) => {
      console.log(response.data);
      Alert.alert(
        'Alert Title',
        response.data,
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );

    })
  }



  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}


          <View style={{
            display: 'flex',
            backgroundColor: 'transparent',
            justifyContent: 'center',

            alignItems: 'center',
            width: deviceWidth, height: deviceHeight
          }}>


            <Image
              // taking constant width, height for the time being-- need to make at run time for different screen sizes.

              style={{ width: 200, height: 200, resizeMode: 'contain', marginTop: -50 }}
              source={require('./Images/center-logo.png')}
            />



            <View style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>

              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: deviceWidth / 1.5 }}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Enter email address"
              />

              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: deviceWidth / 1.5 }}
                onChangeText={text => setpassword(text)}
                value={password}
                placeholder="Enter Password"
              />

              <Button style={{ marginTop: 20 }} title="Login" onPress={() => {

                doLogin(email, password);

              }} />


            </View>

          </View>




        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
