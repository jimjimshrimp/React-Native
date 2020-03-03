import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import {  Badge, Block, Text } from '../components';
import { theme, mocks } from '../constants';

const { width } = Dimensions.get('window');

export default class Home extends Component {

  static navigationOptions = {
      headerTitle: <Text h1 bold white> Moodland </Text>,
    };

  renderBox(){
     // map all the information to the six touchable squares 
    const { features } = this.props;
    return(

      <ScrollView
              showsVerticalScrollIndicator={true}
              style={{ paddingVertical: theme.sizes.base * 2}}
            >
        <Block flex={false} row space="between" style={styles.categories}>
          {features.map(feature=>(
              <TouchableOpacity activeOpacity={0.8} key={feature.id} 
                onPress={()=>this.props.navigation.navigate(feature.page) }>
                <Block center middle shadow style={styles.category} color="white">
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image source={feature.image} />
                  </Badge>
                  <Text medium height={20}>{feature.name}</Text>
                </Block>
              </TouchableOpacity>
          ))}
        </Block>
      </ScrollView>
    )
    }

  render() {
    return (
      <Block color='pagecolor'>       
          {this.renderBox()}
      </Block>
    )
  }
}

Home.defaultProps = {
  features: mocks.features,
}

const styles = StyleSheet.create({

  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base*1.5,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base*1.5 ,
    marginBottom: theme.sizes.base,
  }
})
