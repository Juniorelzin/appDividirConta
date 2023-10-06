import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import {useState} from 'react';


  


export default function App() {

  const [mostrarFeed, setMostrarFeed] = useState(<Feed />)
  


  return (
      
      <View style={styles.container}>



      {mostrarFeed}
      


      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
  textoH1: {
    fontSize: 40,
    marginBottom: 20,

  },
  texto: {
    fontSize: 20,
    marginTop: 10

  },
  input:{
    height: '5%',
    width: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingLeft: 10,
    borderWidth: 1,
    marginBottom: 10
    

  },
  resultado:{
  fontSize: 20

  },
  feed:{
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  result:{
    height: '30%',
    width: '100%'

  },
  botao:{
    height: '10%',
    width: '50%',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#097bf4',

  }

});


function Feed(){

  const [precoConta, setPrecoConta] = useState()
  const [porcentagem, setPorcentagem] = useState()
  const [numPessoas, setNumPessoas] = useState()
  const [calculo, setCalculo] = useState()
  const [totalApagar, setTotalApagar] = useState()
  const [totalDivisao, setTotalDivisao] = useState()
  

  function calcular(){

  let preco = Number(precoConta)
  let soma = Number((precoConta * porcentagem) / 100)
  let resultadoTotal = (preco + soma)
  let divisao = (resultadoTotal / numPessoas)

  


  styles.resultado = {color: '#000000', fontSize: 20}

  setCalculo(' R$:'+soma.toFixed(2))
  setTotalApagar(' R$:'+resultadoTotal.toFixed(2))
  setTotalDivisao(' R$:'+divisao)
  


  }

return(

<View style={styles.container}>

<View style={styles.feed}>

<Text style={styles.textoH1}>Dividir Conta</Text>

<Text style={styles.texto}>Total da conta (R$):</Text>

  <TextInput

     multiline= {false}
     style={styles.input}
     value={precoConta}
     onChangeText={setPrecoConta}
  />



<Text style={styles.texto}>Porcentagem da gorjeta (%):</Text>

<TextInput

     multiline= {false}
     style={styles.input}
     value={porcentagem}
     onChangeText={setPorcentagem}
  />

<Text style={styles.texto}>Número de pessoas para dividir a conta:</Text>

<TextInput

     multiline= {false}
     style={styles.input}
     value={numPessoas}
     onChangeText={setNumPessoas}
  />

  <TouchableOpacity onPress={calcular} style={styles.botao}>
  <Text>CALCULAR</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.result}>
  <Text style={styles.resultado}>Gorjeta:{calculo}</Text>
  <Text style={styles.resultado}>Total a pagar:{totalApagar}</Text>
  <Text style={styles.resultado}>Didido:{totalDivisao}</Text>
  </View>
</View>

)
}

