import React,{Component} from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Block, Text } from "../components";
import { theme } from '../constants';
import {mocks} from '../constants';


export default class Emergency extends Component{

  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: (<Text h1 bold white> Emergency </Text>),
      headerRight: (
        <TouchableOpacity color='transparent'
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/Home.png')} style={{width: 25, height: 25}}/>      
          </TouchableOpacity>  
      ),
    }};

  render(){

    const {contactlists} = this.props;

    return(
      <ScrollView showsVerticalScrollIndicator={true}>
        <Block flex={1} color='pagecolor' >
          {contactlists.map(contactlist => 
          <Block column key={contactlist.id} style={styles.contactbox}>
          <Text h2 bold>
          {contactlist.name + '\n'}
          </Text>
          <Text h3>
          {contactlist.description + '\n'}
          </Text>
          <Text h3>
          Phone: {contactlist.phone + '\n'}
          </Text>
          <Text h3 underline color='blue' onPress={contactlist.webtap}>
          Website: {contactlist.web}
          </Text>
          </Block>
          )
          }
        </Block>
      </ScrollView>
  
    )

  }
}

Emergency.defaultProps = {
  contactlists:mocks.contactlists,
}

const styles =StyleSheet.create({
 contactbox:{
    padding:10,
    margin:10,
    borderBottomColor:'gray'
  },

});

