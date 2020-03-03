import React,{Component} from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  LinearGradient
} from "react-native";
import { Block, Text,Button } from "../components";
import { theme } from '../constants';
import {mocks} from '../constants';
import DateTimePicker from "react-native-modal-datetime-picker";
import { styles as blockStyles } from '../components/Block';
import {db} from './db'
const { width } = Dimensions.get('window');

export default class Results3 extends Component {
  
static navigationOptions = ({ navigation }) => {
  return{
    headerTitle: (<Text h1 bold white> Results </Text>),
    headerRight: (
      <TouchableOpacity color='transparent'
        onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/images/Home.png')} style={{width: 25, height: 25}}/>      
        </TouchableOpacity>  
    ),
  }};

  state = {
    isDateTimePickerVisible: false,

   requests: [],
   time: this.props.navigation.state.params.time
  }

  componentDidMount() {
    // get data from Firebase using timestamp
    db.ref('users').orderByChild('time').equalTo(this.state.time).on('value', snapshot => {
      let data = snapshot.val();
      let requests = Object.values(data);
      this.setState({ requests });
    });
  }


render(){
  return(
    <Block flex={1} color = 'pagecolor'>
      {this.state.requests.map(request => (
        <ScrollView showsVerticalScrollIndicator={true}>
          <Block flex={0.4} row style={styles.container} color='white'> 

            <Block flex={0.25} column color={theme.colors.tertiary} style={styles.requestStatus}>

              <Block flex={0.3} middle center color={theme.colors.primary}>
                <Text small bold white>
                Sep
                </Text>
              </Block>

              <Block flex={0.7} center middle>
                <Text h2 white>
                  {request.day}
                </Text>
              </Block>

            </Block>

            <Block flex={0.75} column middle space="around">
                <Text h2 bold>{request.mood}{' '}{request.number} </Text>
                <Text caption semibold>
                  I was {request.thing}  •  {request.place}
                </Text>
            </Block>
        
           </Block>

          <Block flex={0.6} column style={{padding:theme.sizes.base}}>
            <Block>
              <Text bold>
              I was {request.label}
              </Text>
            <Block flex={0.7} shadow style={styles.inputcontainer} >
                      <Text h3>
                        {request.negthought}
                      </Text>
            </Block>          

          </Block>


          <Block>
              <Text bold>
                This can be viewed in another way
                </Text>
              <Block flex={0.7} shadow style={styles.inputcontainer} >
                <Text h3>
                  {request.posthought}
                </Text>
              </Block>  
          </Block>
          
    </Block>


    <Block flex={0.4} row padding={theme.sizes.base*2 } space='between'>
      <Block flex={0.4}>
          <Button shadow color='primary' onPress={() => this.props.navigation.navigate('Home')}>
                  <Text bold white center>
                    Homepage >
                  </Text>
          </Button>
      </Block>
      <Block flex={0.4}>
      <Button shadow color='primary' onPress={() => this.props.navigation.navigate('Results2')}>
                  <Text bold white center>
                    All results >
                  </Text>
      </Button>
      </Block>
    </Block>

    </ScrollView>
    ))}
    </Block>
      )
    }


}


const styles =StyleSheet.create({
 container:{
    padding:10,
    margin:10,
    borderRadius:5,
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 65,
  },
  inputcontainer:{
    paddingBottom:theme.sizes.base*10,
    margin:theme.sizes.base,
    backgroundColor:'white',
    borderRadius:5,
  },

});

