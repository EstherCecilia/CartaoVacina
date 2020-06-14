import React from 'react';


import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function Inicicial() {

  // const user = route.params;



  return (
    <SafeAreaView style={styles.scroll}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.column}>
          <Text style={styles.spanTitle}>Idade</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.spanTitle}>Vacina</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.itemI}>
          <Text style={styles.spanTitle}>Ao nascer</Text>
          <Text style={styles.span} />
        </View>

        <View style={styles.item}>
          <Text style={styles.span}>– BCG (dose única)</Text>
          <Text style={styles.span}>– Hepatite B</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.itemI}>
          <Text style={styles.spanTitle}>2 meses</Text>
          <Text style={styles.span} />
        </View>

        <View style={styles.item}>
          <Text style={styles.span}>– Poliomielite 1ª dose</Text>
          <Text style={styles.span}>– Rotavírus 1ª dose</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.itemI}>
          <Text style={styles.spanTitle}>3 meses</Text>
          <Text style={styles.span} />
        </View>

        <View style={styles.item}>
          <Text style={styles.span}>– Meningocócica C</Text>
          <Text style={styles.span}>– Poliomielite 2ª dose</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.itemI}>
          <Text style={styles.spanTitle}>4 meses</Text>
          <Text style={styles.span} />
        </View>

        <View style={styles.item}>
          <Text style={styles.span}>– Pneumocócica </Text>
          <Text style={styles.span}>– Rotavírus 2ª dose</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.itemI}>
          <Text style={styles.spanTitle}>5 meses</Text>
          <Text style={styles.span} />
        </View>

        <View style={styles.item}>
          <Text style={styles.span}>– Pneumocócica </Text>
          <Text style={styles.span}>– Rotavírus 2ª dose</Text>
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
  column: {
    flex: '1',
    height: '40px',
    border: '0',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '30%',
  },
  itemI: {
    flex: '1',
    height: '65px',
    border: '0',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '30%',
  },
  item: {
    flex: '1',
    height: '65px',
    border: '1px solid #ccc',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#fff',
    width: '35%',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
