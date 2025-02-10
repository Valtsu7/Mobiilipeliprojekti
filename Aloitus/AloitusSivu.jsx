import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase';

const AloitusSivu = () => {
  const [kayttajanimi, setKayttajanimi] = useState('');

  const lisaaKayttajanimi = async () => {
    if (kayttajanimi.trim() === '') {
      Alert.alert('Virhe', 'Käyttäjänimi ei voi olla tyhjä.');
      return;
    }

    try {
      const kayttajatKokoelma = collection(db, 'kayttajat');
      await addDoc(kayttajatKokoelma, {
        kayttajanimi: kayttajanimi,
      });

      Alert.alert('Onnistui', 'Käyttäjänimi lisätty onnistuneesti.');
      setKayttajanimi('');
    } catch (error) {
      console.error('Virhe lisättäessä käyttäjänimeä:', error);
      Alert.alert('Virhe', 'Käyttäjänimen lisääminen epäonnistui.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Käyttäjänimi"
        value={kayttajanimi}
        onChangeText={setKayttajanimi}
      />
      <Button title="Lisää käyttäjänimi" onPress={lisaaKayttajanimi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AloitusSivu;