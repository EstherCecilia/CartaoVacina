import React, {Component} from 'react';
import api from './Service';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Button,
} from 'react-native';

class App extends Component {
  state = {
    cpf: '',
    password: '',
  };

  handleLogar = async () => {
    if (this.state.cpf.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      try {
        const response = await api.get('/usuario/cpf/'+this.state.cpf);
        console.log(response.data)
          
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CARTÂO DE VACINA</Text>
        <Animated.Image
          source="https://image.flaticon.com/icons/png/512/101/101960.png"
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({cpf: text})}
          value={this.state.cpf}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({password: text})}
          secureTextEntry={this.state.password}
          text="password"
        />
        <Button
          onPress={this.handleLogar}
          title="ENTRAR"
          color="#841584"
          accessibilityLabel="ENTRAR"
        />
      </View>
    );
  }
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

export default App;
