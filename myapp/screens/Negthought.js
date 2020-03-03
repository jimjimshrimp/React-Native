import React, {Component} from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet, Dimensions,Image,ScrollView,Alert,KeyboardAvoidingView}from 'react-native';
import {theme} from '../constants';
import { Block, Text , Button} from '../components';
import {db} from './db';


export default class Negthought extends Component {
  state={ 
    //call the data collected from previous screens
    negthought: '',
    data:{number: this.props.navigation.state.params.data.number,
    mood: this.props.navigation.state.params.data.mood,
    thing: this.props.navigation.state.params.thing,
    place:this.props.navigation.state.params.place}
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


    /* if skip, upload previous data to Firebase */
    addItem()  {
      const d = new Date();
      const time = d.getTime();
      this.props.navigation.navigate('Reward',{time:time});
        db.ref('users').push({
          mood: this.state.data.mood,
          number: this.state.data.number,
          thing: this.state.data.thing,
          place: this.state.data.place,
          month: (d.getMonth()+1),
          day: (d.getDate()),
          time: time
         });
        }


   /* pass the data to the next screen */
    addItem1(){
      this.props.navigation.navigate('Learning',{data: this.state.data, negthought: this.state.negthought});
    }

    render(){
      return ( // Chatbox
    <Block style={{ padding: theme.sizes.base}} color='pagecolor'>
     <ScrollView showsVerticalScrollIndicator={true}>
        <Block row style={styles.container}> 
          <Block flex={false} style={styles.avatar}>
            <Image
                  source={require('../assets/images/girls.png')}
                />
          </Block>
          <Block flex={false} style={styles.message} color='secondary' >
            <Text medium bold> What are you thinking now ? </Text>
          </Block>
        </Block>


        <KeyboardAvoidingView behavior="padding">
          <Block shadow style={styles.inputcontainer} >
              <Block middle>
                  <TextInput
                        placeholder="Please enter your thoughts here" 
                        multiline = {true}
                        style={styles.input}
                        onChangeText={text => this.setState({ negthought: text })}
                      />
              </Block>          
            </Block>
        </KeyboardAvoidingView>


        <Block row style={styles.container}> 
          <Block flex={false} style={styles.avatar}>
            <Image
                  source={require('../assets/images/girls.png')}
                />
          </Block>
          <Block flex={false} style={styles.message} color='secondary' >
            <Text medium bold> 
              Is this sort of thought going over again and again in your mind? 
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
                Don't worry. Let's firstly look at those negative thoughts and then we will figure out how to deal with it. 
            </Text>
          </Block>
        </Block>


        <Block row padding={theme.sizes.base*2 } space='between'>
          <Block flex={0.4}>
            <Button shadow color='primary' onPress={() => {this.addItem()}}>
              <Text bold white center>
                        Skip >
              </Text>
            </Button>
          </Block>

          <Block flex={0.4}>
            <Button shadow color='primary' onPress={() => {this.addItem1()}}>
              <Text bold white center>
                        Next >
              </Text>
            </Button>
          </Block>
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
input: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    height: theme.sizes.base * 10,
    fontSize: theme.sizes.font * 1.1,
    backgroundColor:'white',
  },
inputcontainer:{
  padding:theme.sizes.base,
  margin:theme.sizes.base,
  backgroundColor:theme.colors.tertiary,
  borderRadius:5,
}
});