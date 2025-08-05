import { useState } from "react";
import {Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0c7f6ff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "black"
  },
text:{
  fontSize:16,
  color:"#333"
},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  }
});


export default function Index() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
 
  function juntarNomes() {
    setNomeCompleto(`${nome} ${sobrenome}`);
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Juntar Nome</Text>

      <TextInput style={styles.input} 
      placeholder="Digite o primeiro nome" 
      value={nome} 
      onChangeText={setNome} />

      <TextInput style={styles.input} 
      placeholder="Digite o sobrenome" 
      value={sobrenome} 
      onChangeText={setSobrenome} />

      <Button
        title="Juntar Nomes"
        color={"#841584"}
        onPress={(juntarNomes) => {
          setNomeCompleto(`${nome} ${sobrenome}`);
        }}
      />
      <Text style={styles.text}>Resultado: {nomeCompleto}</Text>
    </View>
  );
}

