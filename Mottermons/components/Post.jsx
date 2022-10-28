import {View, StyleSheet, Text,Image } from 'react-native'
// import Hyperlink from 'react-native-hyperlink'
import styled from 'styled-components/native'

const PostView = styled.View`
  padding: 15px;
  border-bottom: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  border-bottom-style: solid;

`

const PostImage = styled.Image`
  width:60px;
  height:60px;
  border-radius:12px;
  mmargin-right: 12px;
`

const PostTitle = styled.Text`
  font-size: 12px;
  font-weight: 700;
`
const PostDetails = styled.View`
justify-content: center;
`

export const Post =({title, imageUrl})=>{
  return (
<PostView>
  <PostImage source={{uri: imageUrl}}/>
  <PostDetails>
    <PostTitle>{title}</PostTitle>
  </PostDetails>
  {/* <Hyperlink linkDefault={true}>
    <Text style={styles.sectionDes}>
      please click on Https://mattermost.alfastrah.ru to check
    </Text>
  </Hyperlink> */}
</PostView>

  )
}


// const styles = StyleSheet.create({
//   sectionDes:{
//     fontSize: 22,
//     fontWeight: '400',
//     marginTop: 8
//   }
// })
