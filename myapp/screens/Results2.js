import React,{Component} from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Block, Text,Badge } from "../components";
import { theme } from '../constants';
import {mocks} from '../constants';
import DateTimePicker from "react-native-modal-datetime-picker";
import {db} from './db'
const { width } = Dimensions.get('window');

export default class Results2 extends Component {
  
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
   requests:[],
   Date: ''
  }

  componentDidMount() {
    // get data from Firebase
    db.ref('users').on('value', snapshot => {
      let data = snapshot.val();
      let requests = Object.values(data);
      this.setState({ requests });
    });
  }


  renderRequest(request){
    
    return(
      <Block flex={false} shadow row style={styles.container} color='white'> 
        <Block
            flex={0.25}
            column
            color={theme.colors.tertiary}
            style={styles.requestStatus}>

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
          <Text h2 bold> {request.mood}{' '}{request.number} </Text>
          <Text caption semibold>
              I was {request.thing}  •  {request.place}
          </Text>
        </Block>
      
      </Block>
    )
  }

  renderRequests(){
  //let filteredRequests = this.state.requests
  return ( //map results to the above template
    this.state.requests.map(request => (
            <TouchableOpacity activeOpacity={0.8} key={request.id} onPress={()=>{this.props.navigation.navigate('Results3', {time: request.time})}}> 
                {this.renderRequest(request)}
              </TouchableOpacity>
    ))
  )
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({date: date});
    this.setState({filteredRequests: this.state.requests.filter(x => x.id === 2)});
    this.hideDateTimePicker();
  };

  render(){

  return(
    <Block colum color='pagecolor'>

      <ScrollView showsVerticalScrollIndicator={true}>
        <Block shadow row style={{margin:theme.sizes.base, padding:theme.sizes.base, borderRadius:20}} color='secondary'>
          <Block middle flex={0.2} style={{marginRight:10}}>
            <Badge  shadow size={50} color='white' >
              <Image source={require('../assets/images/reward.png')} style={{width: 45, height: 45}}/>
            </Badge>
          </Block>
          <Block middle>
            <Text  spacing={0.4} medium >Congrats!</Text>
            <Text spacing={0.4} medium >You've collected 3 medal(s)!</Text>
          </Block>
        </Block>
        {this.renderRequests()}
      </ScrollView>


      <Block row flex={false} style={{padding:20}}>

        <Block center flex={false}>
          <Badge style={{shadowColor: theme.colors.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 13,
              elevation: 2}} size={62} color='white'>
            <Image style={{width: 45, height: 45}} source = {require('../assets/images/calendar.png')} />
          </Badge>
        </Block>

        <Block middle style={{paddingLeft:10, borderBottomColor: theme.colors.gray2,
          borderBottomWidth: 1.5}} >
          <TouchableOpacity activeOpacity={0.8} onPress={this.showDateTimePicker}>
              <DateTimePicker isVisible={this.state.isDateTimePickerVisible} onConfirm={this.handleDatePicked} onCancel={this.hideDateTimePicker}/>
              <Text gray> Tap to search a date </Text>
          </TouchableOpacity>
        </Block>
        
      </Block>


  </Block>
  )
  } 

  }

/*
Results2.defaultProps = {
  requests:mocks.requests,
}
*/

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

});

