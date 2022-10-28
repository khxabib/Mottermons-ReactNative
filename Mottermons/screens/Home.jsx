import React from 'react';
import axios from 'axios'
import {View, StyleSheet, Alert, Text, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native'
import { Post } from '../components/Post';


export const HomeScreen =({ navigation })=> {
  const [isLoading, setIsLoading] = React.useState(true)
  const [items, setItems] = React.useState()

  const fetchPost =()=>{
    setIsLoading(true)
    axios
    .get('https://633acafa471b8c3955751d09.mockapi.io/articles')
    .then(({data}) => {
      setItems(data)
    })
    .catch((err) =>{
      console.log(err)
      Alert.alert('Ошибка', 'при переходе по ссылке!')
    }).finally(() => {
      setIsLoading(false)
    })

  }

  React.useEffect(fetchPost, [])

  if(isLoading){
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       <ActivityIndicator size="large"/>
       <Text style={{ marginTop: 15}}>Загрузка...</Text>
      </View>
    )
  }

  return(
    <View styles ={styles.container}>
      
      <FlatList 
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPost}/>}
      data={items} 
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.postUrl, title:item.postUrl})}>
          <Post 
            title={item.title}
            imageUrl={item.imageUrl}/>
        </TouchableOpacity>
        )}
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal:10
  },
  sectionTitle:{
    fontSize: 25,
    fontWeight: '600',
    marginTop: 20
  },
  sectionDes:{
    fontSize: 22,
    fontWeight: '400',
    marginTop: 8
  }
})


