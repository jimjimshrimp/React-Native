import React, { Component } from 'react'
import { StyleSheet, Slider,Image, TouchableOpacity, ScrollView} from 'react-native'
import {theme} from '../constants';
import { Block, Text,Button} from '../components';
import {
SelectMultipleButton
} from "react-native-selectmultiple-button";


const moods=["Happy","Anxious","Depressed"]
const severity=["1", "2", "3", "4", "5"];

export default class Moodrating extends Component {
  state={
    selected1: '',
    number:'',
  };
  /* this is for head bar and navigation between screens */
  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: (<Text h1 bold white> Moods </Text>),
      headerRight: (
        <TouchableOpacity color='transparent'
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/Home.png')} style={{width: 25, height: 25}}/>      
          </TouchableOpacity>  
      ),
    }};

  /* function for pressing button */
  addItem()  {
  // pass the data to the next screen
    this.props.navigation.navigate('Act',{mood: this.state.selected1, number: this.state.number});
      }

  /* Pass the selected value to state */
  _singleTapRadioSelectedButton1(valueTap, moods){
      this.setState({
        selected1: moods
      });
    }

  _singleTapRadioSelectedButton2(valueTap, severity){
      this.setState({
        number: severity
      });
    }

  render(){
    return(
  <Block style={{ padding: theme.sizes.base}} color='pagecolor'>
    <ScrollView showsVerticalScrollIndicator={true}>


        <Block row style={styles.container}> 
            <Block flex={false} style={styles.avatar}>
                <Image
                    source={require('../assets/images/girls.png')}
                    />
                    </Block>
                <Block flex={false} style={styles.message} color='secondary' >
                    <Text medium bold> Hi, I'm Q, {'\n'} How are you feeling now? 
                    </Text>
                </Block>
            </Block>
        <Block  row right style={styles.container}> 
            <Block flex={false} style={styles.message} color='tertiary'>
                <Text medium bold> I'm feeling {this.state.selected1}
                </Text>
            </Block>
            <Block flex={false}  style={styles.avatar}>
                <Image
                  source={require('../assets/images/boys.png')}
                />
            </Block>         
        </Block>


        <Block style={{ flexWrap: "wrap", flexDirection: "column", justifyContent: "center"},{padding:10}}>
              {moods.map(moods => (
                // map moods to buttons
              <SelectMultipleButton key={moods} value={moods} buttonViewStyle={{ borderRadius: 2, height:45}}  textStyle={{ fontSize: 15}}

                  highLightStyle={{
                    borderColor: "gray",
                    backgroundColor: "transparent",
                    textColor: "gray",
                    borderTintColor: 'blue',
                    backgroundTintColor:'blue',
                    textTintColor: "white"
                  }}

                  selected={this.state.selected1===moods}

                  singleTap={valueTap =>
                    this._singleTapRadioSelectedButton1(valueTap,moods)
                  }
                />
              ))}
        </Block>


        <Block row style={styles.container}> 
            <Block flex={false} style={styles.avatar}>
                <Image
                  source={require('../assets/images/girls.png')}
                />
                </Block>
            <Block flex={false} style={styles.message} color='secondary' >
                <Text medium bold> How strong is this mood ? 
                </Text>
            </Block>
        </Block>
        <Block  row right style={styles.container}> 
            <Block flex={false} style={styles.message} color='tertiary'>
                <Text medium bold> I think it's {this.state.number}
                </Text>
            </Block>
            <Block flex={false}  style={styles.avatar}>
            <Image
                  source={require('../assets/images/boys.png')}
                />
            </Block>         
        </Block>


        <Block style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
          {severity.map(severity => (
                // map numbers to buttons
                <SelectMultipleButton

                  key={severity}
                  value={severity}
                  buttonViewStyle={{   borderRadius: 2, padding: 9,
                  height:50
    
                  }}    

                  textStyle={{ fontSize: 20, marginBottom: 2,}}

                  highLightStyle={{
                    borderColor: "gray",
                    backgroundColor: "transparent",
                    textColor: "gray",
                    borderTintColor: "green",
                    backgroundTintColor: "green",
                    textTintColor: "white",
                  }}

                  selected={this.state.number === severity}

                  singleTap={valueTap =>
                    this._singleTapRadioSelectedButton2(valueTap, severity)
                  }
                />
              ))}
          </Block>


          <Block  padding={[theme.sizes.base*2]}>
              <Button shadow color='primary' onPress={()=>{this.addItem()}}>
                    <Text bold white center>
                      Next >
                    </Text>
              </Button>
          </Block>
            
    </ScrollView>
  </Block>
    )
  }
}

const styles = StyleSheet.create({
container:{
    padding:10,
    marginHorizontal:10,
  },
message:{ 
justifyContent: 'center',
borderRadius:5,
marginHorizontal:30,
padding:15,
},
avatar:{
  justifyContent: 'center',
  alignContent:'center',
},
});
