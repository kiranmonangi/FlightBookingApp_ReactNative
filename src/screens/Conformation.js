import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image,TextInput } from 'react-native';
import styles from '../styles/Flightstyles';

const Conformation = (props)=>{
       return(
        <View style={styles.FlightSearchContainer}>
            <View style={styles.FlightSearchHeader}>
                <Text style={styles.FlightSearchHeaderText}>Book your Journey</Text>
            </View>
            <Text style={styles.ConformationText}>Your payment is completed </Text>
            <Text style={styles.ConformationText}>Your transanction id is 9856742 </Text>
          
            <TouchableOpacity style={styles.ConformationSubmit} onPress={()=>props.navigation.navigate('Home')}>
                 <Text style={styles.ButtonText}>Visit again</Text>
             </TouchableOpacity>
           </View>
       );
};
export default Conformation;