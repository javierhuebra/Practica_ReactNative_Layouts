import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';



const App = () => {

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./src/assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en Paris</Text>

          <ScrollView
            horizontal
          >

            <View style={styles.contImgHorizontal}>
              <Image
                style={styles.ciudad}
                source={require('./src/assets/img/actividad1.jpg')}
              />
            </View>
            <View style={styles.contImgHorizontal}>
              <Image
                style={styles.ciudad}
                source={require('./src/assets/img/actividad2.jpg')}
              />
            </View>
            <View style={styles.contImgHorizontal}>
              <Image
                style={styles.ciudad}
                source={require('./src/assets/img/actividad3.jpg')}
              />
            </View>
            <View style={styles.contImgHorizontal}>
              <Image
                style={styles.ciudad}
                source={require('./src/assets/img/actividad4.jpg')}
              />
            </View>
            <View style={styles.contImgHorizontal}>
              <Image
                style={styles.ciudad}
                source={require('./src/assets/img/actividad5.jpg')}
              />
            </View>

          </ScrollView>

          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>

          <View style={styles.contImgHorizontal}>
            <Image
              style={styles.mejores}
              source={require('./src/assets/img/mejores1.jpg')}
            />
          </View>
          <View style={styles.contImgHorizontal}>
            <Image
              style={styles.mejores}
              source={require('./src/assets/img/mejores2.jpg')}
            />
          </View>
          <View style={styles.contImgHorizontal}>
            <Image
              style={styles.mejores}
              source={require('./src/assets/img/mejores3.jpg')}
            />
          </View>


          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View
            style={styles.listado}
          >
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje1.jpg')}
              />
              <Text style={styles.textAloja}>Casa pax 4</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje2.jpg')}
              />
              <Text style={styles.textAloja}>Casa pax 4</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje3.jpg')}
              />
              <Text style={styles.textAloja}>Casa pax 4</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje4.jpg')}
              />
              <Text style={styles.textAloja}>Casa pax 4</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {


  },
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  contImgHorizontal: {

  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10

  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
    borderRadius:10
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  },
  textAloja: {
    textAlign: 'center',
    marginBottom: 10
  }


});

export default App;
