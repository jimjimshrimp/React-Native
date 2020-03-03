import React, {Component} from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet, Dimensions,Image,ScrollView,Alert,KeyboardAvoidingView}from 'react-native';
import {theme} from '../constants';
import { Block, Text ,Button} from '../components';
import {db} from './db'

export default class Posthought extends Component {
  state={  
    // call the data collected from previous screens
    posthought: '',
    mood: this.props.navigation.state.params.data.mood,
    number: this.props.navigation.state.params.data.number,
    thing: this.props.navigation.state.params.data.thing,
    place: this.props.navigation.state.params.data.place,
    negthought: this.props.navigation.state.params.data.negthought,
    label: this.props.navigation.state.params.label,
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

    /* upload all the data to Firebase */
    addItem()  {
      const d = new Date();
      const time = d.getTime();
      this.props.navigation.navigate('Reward',{time:time});
      db.ref('users').push({
        posthought: this.state.posthought,
        mood: this.state.mood,
        number: this.state.number,
        thing: this.state.thing,
        place: this.state.place,
        negthought: this.state.negthought,
        label: this.state.label, 
        month: (d.getMonth()+1),
        day: (d.getDate()),
        time: time
      });
      }


    render(){
      return ( //chatbox
    <Block style={{ padding: theme.sizes.base}} color='pagecolor'>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Block row style={styles.container}> 

          <Block flex={false} style={styles.avatar}>
            <Image
                  source={require('../assets/images/girls.png')}
                />
          </Block>

          <Block flex={false} style={styles.message} color='secondary' >
            <Text medium bold> Do you have a new perspective to look at the thought you wrote down just now? Write down the changed thought here.
            </Text>
          </Block>

        </Block>


    <KeyboardAvoidingView behavior="padding"> 
      <Block shadow style={styles.inputcontainer} >
        <Block middle>
          <TextInput
                  placeholder="Please enter your thoughts here" 
                  multiline = {true}
                  style={styles.input}
                  onChangeText={text => this.setState({posthought: text })}
                  blurOnSubmit = {true}
                  
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
              Well done, you've made a great start here by completing this session. 
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
            If you find things are getting worse, remember we have emergency contact here in this app.
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
        <Button shadow color='primary' onPress={() => {this.addItem()} }>
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