import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar,Button } from 'react-native-paper';

export default  class App extends React.Component  {
  state={
    weight:0,
    height:0,
    resultNumber: 0,
    resultText: ""
  }
  
  handleCalculate = () => {
    let imc = (this.state.weight * 10000) / (this.state.height * this.state.height);
    console.log(imc);
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: "Normal Weight" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: "Overweight" });
    } else {
      this.setState({ resultText: "Obesity" });
    }
  };
  render() {
  return (
    <View style={styles.container}>
      <Appbar.Header><Appbar.Content
        title="BMI CALCULATOR"
        style={{alignItems:"center"}}>
    
      </Appbar.Content></Appbar.Header>
      
      <TextInput
        label='Weight'
        value={this.state.fname}
        onChangeText={weight=>{this.setState({weight});}}
      />
      <TextInput
        label='Height'
        value={this.state.sname}
        onChangeText={height=> {this.setState({ height });}}
      />  

      <Button  mode="contained" style={{margin:10}} onPress={this.handleCalculate}>
       calculate
      </Button> 
      <Text style={styles.result}>BMI= {this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>
            {this.state.resultText}
          </Text>   
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  
  },
  result: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 60,
    padding: 15
  }
});

