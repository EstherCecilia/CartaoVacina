import React, {useState} from 'react';
import api from './Service';
import {useNavigation} from '@react-navigation/native';

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
    if (cpf.length === 0 || password.length === 0) return;
    // this.setState(
    //   {error: 'Preencha usuário e senha para continuar!'},
    //   () => false,
    // );

    const response = await api.get('/usuario/cpf/' + cpf);
    console.log(response.data[0].senha, password, response.data.length)
    if (response.data.length > 0 && response.data[0].senha === password) {
      navigation.navigate('Detail', response.data[0]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARTÂO DE VACINA</Text>
      <Animated.Image
        source="https://image.flaticon.com/icons/png/512/101/101960.png"
        style={styles.logo}
      />
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
    width: 250,
    height: 250,
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
