import React,{Component} from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Block, Text,Button, Badge} from "../components";
import { theme } from '../constants';

export default class Reward extends Component {

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
state={
  time:this.props.navigation.state.params.time
}


render(){

return(
<Block center middle color="pagecolor" >
    <Block flex = {0.5} center middle >
      <Text small bold center> Congratulations! {'\n'} You have just finished your first recording! {'\n'} We have prepared a medal for you!</Text>
      <Badge color='white' style={{margin:theme.sizes.base*2}}>
      <Image style={{width: 60, height: 60}} source = {require('../assets/images/reward.png')} / >
      </Badge>
    </Block>

    <Block flex={0.2} >
      <Button shadow color='primary' onPress={()=>this.props.navigation.navigate('Results3',{time: this.state.time })}>
          <Text bold center white> View result > </Text>
      </Button>
    </Block>
</Block>
)
} 

}

const styles =StyleSheet.create({
 container:{
    padding:10,
    marginHorizontal:30,
    borderRadius:5,
    marginVertical:10,
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 65,
  },

});

