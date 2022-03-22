import React, { Component } from 'react'

import { VStack,Image,NativeBaseProvider } from 'native-base'
var pets = [
    
    {
    
    id :1,


    image:require('../assets/Hamster.png')
    
},
{
    id :2,

    image:require('../assets/Rabbit.png')
    
},
{

    id :3,

    image:require('../assets/Hen.png')
    
},
{

    id :4,

    image:require('../assets/Birds.png')
    
},
{

    id :5,

    image:require('../assets/Cat.png')
    
},
{

    id :5,

    image:require('../assets/Dog.png')
    
},
{

    id :6,

    image:require('../assets/Monkey.png')
    
},
{

    id :7,

    image:require('../assets/Lion.png')
    
}



]

export default class ArrayCode extends Component {
    
    constructor(props){
        super(props);
        this.state={
            petImages: pets
        }
    }
    render() {
        const {petImages} = this.state;
        return (
            <NativeBaseProvider>
            <VStack>
           {petImages.map( id=> <Image key={id} Image={image} resizeMode="cover"  
            
            source={require(pets.image)}

            />)}
            <Image 
            key={size} size={size} resizeMode="cover" 
            source={require('../assets/Cat.png')}

            />
            <Image 
            key={size} size={size} resizeMode="cover" 
            source={require('../assets/Cat.png')}

            />
            </VStack>
            </NativeBaseProvider>
        )
    }
}
