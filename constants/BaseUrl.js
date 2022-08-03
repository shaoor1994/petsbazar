import { Platform } from "react-native";

export default configuration = {

    url :
    Platform.OS == 'android' ?
   //'http://10.0.2.2:4000' : ||
     'http://192.168.77.12:4000' : 
   'http://localhost:4000'
}

