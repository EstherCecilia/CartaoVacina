import React, {useState} from 'react';
import api from './Service';
import {View, Switch, StyleSheet, Text} from 'react-native';

import {useRoute} from '@react-navigation/native';

export default function App() {
  const route = useRoute();

  const [push, setPush] = useState(route.params.noti_push);
  const [sms, setSms] = useState(route.params.noti_sms);
  const [email, setEmail] = useState(route.params.noti_email);

  const handlePush = () => {
    api.put('/noti/push/' + route.params.ID, {noti: !push});

    setPush(previousState => !previousState);
  };
  const handleSms = () => {
    api.put('/noti/sms/' + route.params.ID, {noti: !sms});

    setSms(previousState => !previousState);
  };
  const handleEmail = () => {
    api.put('/noti/email/' + route.params.ID, {noti: !email});

    setEmail(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemI}>
        <Text style={styles.span}>Push</Text>

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={push ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handlePush}
          value={push}
        />
      </View>
      <View style={styles.itemI}>
        <Text style={styles.span}>SMS</Text>

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={sms ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleSms}
          value={sms}
        />
      </View>
      <View style={styles.itemI}>
        <Text style={styles.span}>Email</Text>

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={email ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleEmail}
          value={email}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemI: {
    height: '50px',
    flexDirection: 'row',
    padding: 15,
    border: '0',
    marginTop: '10px',
    // margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '90%',
  },
  span: {
    marginRight: '70%',
    marginLeft: '5px',
    marginBottom: '10px',
    fontSize: '15px',
    textAlign: 'left',
    color: '#ff5722',
  },
});
