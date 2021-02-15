import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image,TextInput } from 'react-native';
import styles from '../styles/Flightstyles';

const UserDetails =(props)=>{
   
    const People=props.navigation.getParam('Passengers', 'no-passengers');
    const Cost=props.navigation.getParam('cost', 'costd');
    const Costd=props.navigation.getParam('costd', 'no-costd');
    
    console.log(People);
  
        return(
            <View style={styles.FlightSearchContainer}>
                <View style={styles.FlightSearchHeader}>
                    <Text style={styles.FlightSearchHeaderText}>Book your Journey</Text>
                </View>
              
                <Text style={styles.UserDetailsTextPassengers}>Number of passengers:{People}</Text>
                <Text style={styles.UserDetailsTextCost}> Totalcost:{Cost*People + Costd*People}</Text>
                <TextInput 
                        style={styles.UserDetailsTextInput}            
                        placeholder='User Name' 
                        placeholderTextColor='black'        
                />
                <TextInput 
                        style={styles.UserDetailsAgeTextInput}            
                        placeholder='Age' 
                        placeholderTextColor='black'        
                />
                 <TextInput 
                        style={styles.UserDetailsPassportTextInput}            
                        placeholder='PassPort' 
                        placeholderTextColor='black'        
                />
                <TouchableOpacity style={styles.Paysubmit} onPress={()=>props.navigation.navigate('ConformationPage')}>
                 <Text style={styles.ButtonText}>pay</Text>
             </TouchableOpacity>
            </View>
        );
};
export default UserDetails;