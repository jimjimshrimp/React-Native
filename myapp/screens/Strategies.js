import React,{Component} from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Block, Text} from "../components";
import { theme } from '../constants';
import {mocks} from '../constants';


export default class Strategies extends Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: (<Text h1 bold white> Strategies </Text>),
      headerRight: (
        <TouchableOpacity color='transparent'
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/Home.png')} style={{width: 25, height: 25}}/>      
          </TouchableOpacity>  
      ),
    }};

renderRequest(video){
  return(
<Block flex={false} shadow row style={styles.container} color='white'> 
  <Block flex={0.8} middle >
    <Block colum space='around' style={{padding:theme.sizes.base}}>
            <Text small bold black>
              {video.name}
            </Text>
            <Text caption gray>
              {video.description}
            </Text>
    </Block>
  </Block>
  <Block flex={0.2} middle center>
            <Image source={require('../assets/images/video.png')}/>
  </Block>

</Block>

  )
}

renderRequests(){
const { videos } = this.props;

return (
  <Block>
  {videos.map((video)=> 
    <TouchableOpacity activeOpacity={0.8} key={`video-${video.id}`} onPress={video.web}>
    {this.renderRequest(video)}
    </TouchableOpacity>
  )}
  </Block> 
)
}


render(){

return(
<Block colum color="pagecolor" >
 <ScrollView showsVerticalScrollIndicator={true}>
    <Block style={[{marginBottom:theme.sizes.base*1.5},{padding:theme.sizes.base}]} middle center color='secondary'>
      <Text h3>
      All contents will be directed to NHS official website.
      </Text>
    </Block >
    {this.renderRequests()}
 </ScrollView>
</Block>
)
} 

}
Strategies.defaultProps = {
  videos:mocks.videos,
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

