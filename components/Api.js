/*const cat_data = [{
    "id": 1,
    "title": "Ante egestas ligula ultricies sed lacinia ipsum mauris tincidunt egestas.",
    "userId": 1,
    "content": "Elit vehicula adipiscing ut dolor quam amet augue mattis congue a tincidunt praesent lorem egestas viverra ut congue lectus sed ante lorem donec mattis nec donec mollis vitae lectus consectetur porta ante enim consectetur congue tortor sit ut amet ipsum adipiscing consectetur sed eget adipiscing libero a consectetur augue donec.",
    "likes": 2,
    "hits": 345,
    "categoryId": 4,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
}, {
    "id": 2,
    "title": "Consectetur lacinia nam maecenas quam et amet lorem.",
    "userId": 2,
    "content": "Lorem adipiscing ipsum a mollis hendrerit a lorem ut sed viverra tincidunt viverra amet eget ut augue ut lorem dolor ipsum a tincidunt tortor et libero ut nam elit et donec adipiscing nam donec ipsum ut amet lacinia amet vitae non congue donec libero ac lacinia sit donec ipsum ante.",
    "likes": 21,
    "hits": 240,
    "categoryId": 2,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
}, {
    "id": 3,
    "title": "Ipsum non hendrerit lectus libero sit donec vehicula viverra consectetur.",
    "userId": 2,
    "content": "Diam libero porta dolor consectetur amet libero sed viverra eget non ut maecenas mattis ut ligula adipiscing mattis hendrerit ipsum nec consectetur non lectus diam mauris sed libero donec lorem donec lorem diam mauris amet vehicula augue congue diam tortor donec congue eget et hendrerit consectetur libero maecenas consectetur congue.",
    "likes": 21,
    "hits": 45,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
}, {
    "id": 4,
    "title": "Vehicula enim ipsum et ipsum sit lorem donec mattis ut.",
    "userId": 3,
    "content": "Nam lorem eget a amet sit nam eget non vitae arcu lorem hendrerit libero mattis praesent ligula a tortor quam consectetur amet ut tincidunt vehicula sed et mattis libero quam libero quam lacinia nam a lorem tortor enim non libero sit ante donec non vehicula mollis elit tortor vitae ut.",
    "likes": 23,
    "hits": 62,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
}]



export default cat_data;*/





import axios from 'axios';
import React, { Component } from 'react'

import {View ,
     Text , 
     StyleSheet,
     TouchableOpacity,
    Image,
    FlatList
 } from 'react-native';

export default class Api extends Component {

    constructor(props){
        super(props)
        this.state={
            
            items:[]
        }
    }

    componentDidMount(){
        this.getDataFromApi()
    }

    getDataFromApi = async () => {
      const endPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=20'
    //const endPoint = 'https://api.thecatapi.com/v1/images/search' 
      const res = await fetch(endPoint)
       //const res = await axios.get(endPoint)
        const data = await res.json()
        this.setState({items:data})
    }

    _renderItem = ({item,index}) => {

        let {cardText,card,cardImage} = styles
        return(
            <View>
            <TouchableOpacity style={card}>
            <Image style={cardImage} source={{uri:
                
            //   'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_960_720.jpg'
            item.url
            }}/>
            <Text style={cardText}>{item.title}</Text>
            </TouchableOpacity>
            </View>
        )
    }


    render() {
       // let {container} = styles
        let {items} = this.state

        return (
            <FlatList
            nestedScrollEnabled={true}
            
            //style={styles.container}
            //style={styles.container}
            data={items}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={this._renderItem}
            
            />
           
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems:'center',
        justifyContent:'center'

    },
    cardText:{

        fontSize:16,
        padding:10

    },
    card:{
        backgroundColor:'#fff',
        marginBottom:10,
        marginLeft:'2%',
        width:"80%",
        shadowColor:'#000',
       /* shadowOpacity:1,
        shadowOffset:{
            height:3,
            width:3
        }*/

    },
    cardImage:{
        width:'100%',
        height:200,
        resizeMode:'cover'
    }
})