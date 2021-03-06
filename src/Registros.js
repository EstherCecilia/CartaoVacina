import React, {useEffect, useState} from 'react';

import {useRoute} from '@react-navigation/native';
import api from './Service';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';


export default function Registro() {
  const [data, setData] = useState([]);
  const route = useRoute();

  // const user = route.params;

  useEffect(async () => {
    const response = await api.get('/registro/' + route.params.ID);
    setData(response.data);
  }, []);

  return (
    <SafeAreaView style={styles.scroll}>
      <Text style={styles.title}>Minhas Vacinas</Text>

      <ScrollView style={styles.scroll}>
        {data.map(dado => (
          <View style={styles.item}>
            <Text style={styles.spanTitle}>{dado.vacina}</Text>
            <Text style={styles.span}>{`Data de aplicação: ${dado.data.slice(
              0,
              10,
            )} ${dado.hora}`}</Text>
            <Text style={styles.span}>{`Aplicador: ${dado.aplicador}`}</Text>
            <Text style={styles.span}>{`Dosagem: ${dado.dose}`}</Text>
          </View>
        ))}
      </ScrollView>
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
    marginTop: '10px',
    fontSize: '20px',
    textAlign: 'left',
    color: '#ff5722',
    marginBottom: '20px',
  },
  title: {
    fontSize: '40px',
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
  item: {
    flex: '1',
    border: '1px solid #ccc',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: '25px',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
