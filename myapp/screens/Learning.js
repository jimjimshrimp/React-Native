import React, { Component } from 'react'
import { StyleSheet,Image, TouchableOpacity, ScrollView, Alert} from 'react-native'
import {theme} from '../constants';
import { Block, Text,Button} from '../components';
import {
SelectMultipleButton
} from "react-native-selectmultiple-button";


const labels=["Taking things to heart","Being my worst critic","Having glommy view of the future","Jumping to the worst conclusions","Assuming that others see me badly","Taking responsibility for everything"]

export default class Learning extends Component {
  state={
    selected2: '',
    data:{
    mood: this.props.navigation.state.params.data.mood,
    number: this.props.navigation.state.params.data.number,
    thing: this.props.navigation.state.params.data.thing,
    place: this.props.navigation.state.params.data.place,
    negthought: this.props.navigation.state.params.negthought,
    }
  };
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

    addItem()  {
      this.props.navigation.navigate('Posthought',{data: this.state.data, label: this.state.selected2});
      }

    _singleTapRadioSelectedButton1(valueTap, labels){
        this.setState({
          selected2: labels
        });
      }

  render(){
    return(
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
          <Text medium bold> 
          Many of our thoughts are actually 'distorted' in some way and they pop up so quickly that we hardly realize that they may not be true. 
          </Text>
        </Block>
      </Block>

      <Block row style={styles.container}> 
        <Block flex={false} style={styles.avatar}>
          <Image
                source={require('../assets/images/girls.png')}
              />
        </Block>
        <Block flex={false} style={styles.message} color='secondary' >
            <Text medium bold> 
            Now, take a time to look at the thought you just wrote down and consciously evaluate them, are they really true ?
            </Text>
       </Block>
     </Block>

      <Block  row right style={styles.container}> 
        <Block flex={false} style={styles.message} color='tertiary'>
          <Text medium bold> Oh they probably are not true, I'm just {this.state.selected2}
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

              flexDirection: "column",

              justifyContent: "center"

            },{padding:10}}

          >

            {labels.map(labels => (
            <SelectMultipleButton

                key={labels}
                value={labels}
            buttonViewStyle={{       borderRadius: 2,
            height:50,

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

                selected={this.state.selected2===labels}

                singleTap={valueTap =>

                  this._singleTapRadioSelectedButton1(valueTap,labels)

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
            <Text medium bold justify> 
            Now, take a breath and think about what the person who loves you most would say to you now? 
            </Text>
          </Block>
        </Block>

        <Block row style={styles.container}> 
          <Block flex={false} style={styles.avatar}>
            <Image
                  source={require('../assets/images/girls.png')}
                />
          </Block>
        <Block flex={false} style={styles.message} color='secondary' >
            <Text medium bold justify> 
            Or think about someone who seems to handle problems well, and work out what they would think in that situation?
            </Text>
        </Block>
      </Block>
          
        <Block padding={[theme.sizes.base*2 ]}>
          <Button shadow color='primary' onPress={() => {this.addItem()}}>
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
