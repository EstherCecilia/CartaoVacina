import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Button,
} from 'react-native';

class Inicial extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLogar = () => {
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CARTÂO DE VACINA</Text>
        <Animated.Image
          source="https://image.flaticon.com/icons/png/512/101/101960.png"
          style={styles.logo}
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

export default Inicial;
