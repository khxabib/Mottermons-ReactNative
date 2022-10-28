import React from 'react';
import axios from 'axios'
import styled from 'styled-components/native'
import {View, StyleSheet, } from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
  border-radius: 30px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;

`

const PostText = styled.Text`
  font-size: 10px;
  line-height: 20px;
`

export const FullPostScreen =({route})=>{
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState()
  const {id, title} = route.params

  React.useEffect(()=>{
    axios
    .get('https://633acafa471b8c3955751d09.mockapi.io/mattermost1/1' ) //.get('https://633acafa471b8c3955751d09.mockapi.io/mattermost1/' + id)
    .then(({data}) => {
      setData(data)
    })
    .catch((err) =>{
      console.log(err)
      Alert.alert('Ошибка', 'при перейти по ссылке!')
    }).finally(() => {
      setIsLoading(false)
    })
  })

  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Loading/>

      </View>
    )
  }

  return (
    <View>
      <PostImage style={styles.sectionDes} source={{uri: data.imageUrl}}/>
      <Hyperlink linkDefault={true} linkStyle={{color:'red', fontSize:22}} >
      <PostText style={styles.sectionDes}>
        {data.textUrl}
      </PostText>
  </Hyperlink>
    </View>
  )
}
const styles = StyleSheet.create({
  sectionDes:{
    fontSize: 22,
    fontWeight: '400',
    marginTop: 8
  }
})


