import React from 'react';

import {useRoute, useNavigation} from '@react-navigation/native';

import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function Inicicial() {
  const route = useRoute();

  // const user = route.params;

  const navigation = useNavigation();

  const handleRegsitro = () => {
    console.log(route.params);
    navigation.navigate('Register', route.params);
  };

  const handleCalendario = () => {
    console.log('AA');
    navigation.navigate('Calender');
  };

  return (
    <SafeAreaView style={styles.scroll}>
      <Text style={styles.title}>{`Bem vindo ${
        route.params.nome.split(' ')[0]
      }`}</Text>
      <View
        onClick={handleRegsitro}
        style={{
          flexDirection: 'row',
          padding: 15,
        }}>
        <View style={styles.itemI}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://www.netclipart.com/pp/m/404-4049840_transparent-pencil-icon-png-pen-vector-icon.png',
            }}
          />
          <Text style={styles.spanTitle}>Minhas</Text>
          <Text style={styles.span}>vacinas</Text>
        </View>

        <View style={styles.item} onClick={handleCalendario}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://www.netclipart.com/pp/m/404-4049840_transparent-pencil-icon-png-pen-vector-icon.png',
            }}
          />
          <Text style={styles.spanTitle}>Calendário</Text>
          <Text style={styles.span}>de vacinas</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
        }}>
        <View style={styles.itemI}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://www.netclipart.com/pp/m/404-4049840_transparent-pencil-icon-png-pen-vector-icon.png',
            }}
          />
          <Text style={styles.spanTitle}>Minhas vacinas</Text>
          <Text style={styles.span}>não Aplicadas</Text>
        </View>

        <View style={styles.item}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://www.netclipart.com/pp/m/404-4049840_transparent-pencil-icon-png-pen-vector-icon.png',
            }}
          />
          <Text style={styles.spanTitle}>Locais</Text>
          <Text style={styles.span}>credenciados</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 15,
        }}>
        <View style={styles.itemI}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://www.netclipart.com/pp/m/404-4049840_transparent-pencil-icon-png-pen-vector-icon.png',
            }}
          />
          <Text style={styles.spanTitle}>Emitir</Text>
          <Text style={styles.span}>certificado</Text>
        </View>

        <View style={styles.item}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://www.netclipart.com/pp/m/404-4049840_transparent-pencil-icon-png-pen-vector-icon.png',
            }}
          />
          <Text style={styles.spanTitle}>Entrar</Text>
          <Text style={styles.span}>em contato</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginRight: '0px',
    marginLeft: '0px',
    /* padding: 0; */
    width: '100%',
  },
  container: {
    flex: '1',
    padding: '50px 0',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  spanTitle: {
    marginLeft: '5px',
    marginTop: '5px',
    fontSize: '20px',
    textAlign: 'left',
    color: '#ff5722',
    marginBottom: '5px',
  },
  tinyLogo: {
    width: 30,
    height: 30,
    margin: '5px',
  },
  title: {
    fontSize: '25px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
    color: '#ff5722',
    textAlign: 'left',
  },
  span: {
    marginLeft: '5px',
    marginBottom: '10px',
    fontSize: '15px',
    textAlign: 'left',
    color: '#ff5722',
  },
  itemI: {
    flex: '1',
    border: '1px solid #ccc',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '30%',
    marginBottom: '20px',
    marginRight: '5px',
  },
  item: {
    flex: '1',
    border: '1px solid #ccc',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '35%',
    marginBottom: '20px',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
