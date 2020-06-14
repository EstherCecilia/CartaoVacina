import React, {useState} from 'react';
import api from './Service';
import {useNavigation} from '@react-navigation/native';
import icon from './icon-white.png';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Button,
} from 'react-native';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogar = async () => {
    if (cpf.length === 0 || password.length === 0) {
      console.log('Digite algo!');
      return;
    }

    const response = await api.get('/usuario/cpf/' + cpf);
    if (!response.data.length > 0) {
      console.log('Usuario não encontrado!');

      return;
    }
    if (response.data[0].senha === password) {
      navigation.navigate('Home', response.data[0]);
    } else {
      console.log('Senha incorreta!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARTÃO DE VACINA</Text>
      <Animated.Image source={icon} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={text => setCpf(text)}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        secureTextEntry={password}
        text="password"
      />
      <Button
        style={{width: '45%',
        height: '40px'}}
        onPress={() => handleLogar()}
        title="ENTRAR"
        color="#841584"
        accessibilityLabel="ENTRAR"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    color: '#FAFAFA',
  },
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  button: {
    width: '45%',
    height: '40px',
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
