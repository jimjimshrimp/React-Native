import React, {Component} from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet, Dimensions,Image,ScrollView,Alert}from 'react-native';
import {
SelectMultipleButton,SelectMultipleGroupButton
} from "react-native-selectmultiple-button";
import _ from "lodash";
import {theme} from '../constants';
import { Block, Text,Button} from '../components';

const question1=["working", "relaxing", "studying", "socialising", "exercising"," doing other things"];

const question2=["at home","at work", "at libary", "at bar/restaurant","at gym","at somewhere else"]

export default class Act extends Component{
  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: (<Text h1 bold white> Moods </Text>),
      headerRight: (
        <TouchableOpacity color='transparent'
          onPress={() => Alert.alert(
            'Your data will be abandoned this time',
            'Are you sure you want to go back to home page ?',
            [
              {
                text: 'Yes',
                onPress: () => navigation.navigate('Home'),
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
            ],
          )}>
          <Image source={require('../assets/images/Home.png')} style={{width: 25, height: 25}}/>      
          </TouchableOpacity>  
      ),
    }};
  state = {
    selected1:'',
    selected2:'',
    data:{number: this.props.navigation.state.params.number,
    mood: this.props.navigation.state.params.mood,}
  };

  render(){
    return (
      <Block style={{ padding: theme.sizes.base}} color='pagecolor'>
        <ScrollView
          showsVerticalScrollIndicator={true}
        >          
          <Block row style={styles.container}> 
            <Block flex={false} style={styles.avatar}>
              <Image
              source={require('../assets/images/girls.png')}
              />
            </Block>
            <Block flex={false} style={styles.message} color='secondary' >
              <Text medium bold> what are you doing ?
              </Text>
            </Block>
          </Block>

          <Block  row right style={styles.container}> 
            <Block flex={false} style={styles.message} color='tertiary'>
              <Text medium bold> I'm {this.state.selected1}
              </Text>
            </Block>
            <Block flex={false}  style={styles.avatar}>
              <Image
                    source={require('../assets/images/boys.png')}
                  />
            </Block>         
          </Block>
          <Block 
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center"
            }}

          >
          {question1.map(question1 => (
           <SelectMultipleButton

              key={question1}
              value={question1}
          buttonViewStyle={{   borderRadius: 2,
           height:45

              }}            textStyle={{                fontSize: 15

              }}

              highLightStyle={{

                borderColor: "gray",

                backgroundColor: "transparent",

                textColor: "gray",

                borderTintColor: 'blue',

                backgroundTintColor:'blue',

                textTintColor: "white"

              }}

              selected={this.state.selected1===question1}

              singleTap={valueTap =>

                this._singleTapRadioSelectedButton1(valueTap,question1)

              }

            />

          ))}

        </Block>

        <Block  row style={styles.container}> 
          <Block flex={false} style={styles.avatar}>
            <Image
                  source={require('../assets/images/girls.png')}
                  
                />
          </Block>
          
          <Block flex={false} style={styles.message} color='secondary' >
            <Text medium bold  > Where are you ? 
            </Text>
          </Block>
        </Block>

        <Block  row right style={styles.container}> 
          <Block flex={false} style={styles.message} color='tertiary' >
            <Text medium bold  > I'm {this.state.selected2}
            </Text>
          </Block>

          <Block flex={false} style={styles.avatar}>
            <Image
                  source={require('../assets/images/boys.png')}
                
                />
          </Block>
        </Block>
        <Block

          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center"
          }}

        >
          {question2.map(question2 => (

            <SelectMultipleButton

              key={question2}
              value={question2}
          buttonViewStyle={{       borderRadius: 2,
           height:45

              }}            textStyle={{                fontSize: 15

              }}

              highLightStyle={{

                borderColor: "gray",

                backgroundColor: "transparent",

                textColor: "gray",

                borderTintColor: "green",

                backgroundTintColor: "green",

                textTintColor: "white"

              }}

              selected={this.state.selected2 === question2}

              singleTap={valueTap =>

                this._singleTapRadioSelectedButton2(valueTap, question2)

              }

            />

          ))}
          
      </Block>
      <Block padding={[theme.sizes.base*2]}>
        <Button shadow color='primary' onPress={() => this.props.navigation.navigate('Negthought',{data: this.state.data, thing: this.state.selected1, place: this.state.selected2})}>
              <Text bold white center>
                Next >
              </Text>
        </Button>
      </Block>
      </ScrollView>
      </Block>
    )}

    _singleTapRadioSelectedButton1(valueTap, question1){
    this.setState({
      selected1: question1
    });
  }

  _singleTapRadioSelectedButton2(valueTap, question2){
    this.setState({
      selected2: question2
    });
  }
  
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    //marginHorizontal:10,
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
}

});
