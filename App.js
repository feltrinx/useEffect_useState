import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
 
export default function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState();
  const [segundos, setSegundos] = useState(0);
 
  useEffect(()=>{
    function addSegundos(){
      setInterval(()=>setSegundos(segundo=>segundo+1),1000)
    }
 
    addSegundos();
 
  },[])
 
  function atualizarContador() {
    setContador(contador + 1);
  }
 
  function atualizarNome(nome) {
    setNome(nome);
  }
 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 70 }}>Voce clicou {contador} vezes</Text>
 
      <Text style={{ fontSize: 70 }}>Já se passaram {segundos} segundos</Text>
 
      <Text style={{ fontSize: 70 }}>{nome}</Text>
 
      <TextInput
        style={{
          fontSize: 70,
          backgroundColor: "whitesmoke",
          border: 1,
        }}
        onChangeText={(texto) => atualizarNome(texto)}
      ></TextInput>
 
      <TouchableOpacity
        style={{
          width: 500,
          height: 50,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
        onPress={atualizarContador}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeigth: "bold" }}>
          Clicar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});