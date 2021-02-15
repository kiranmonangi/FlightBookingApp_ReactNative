import React,{useState} from 'react';   
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Flightstyles';

const FlightSearch = (props)=>{

    const [startDate, setStartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [source, setSource] = useState('');
    const [destination, setdestination] = useState('');
    const [passengers, setpassengers] = useState('');


    return(
        <View style={styles.FlightSearchContainer}>
            <View style={styles.FlightSearchHeader}>
                <Text style={styles.FlightSearchHeaderText}>Happy Journey</Text>
            </View>
            
            <TextInput 
                style={styles.FlightSearchToTextInput}     
                onChangeText={(startDate) => setStartDate(startDate)}
                value={startDate}       
                placeholder='dd/mm/yyyy'
                placeholderTextColor='#142a52' 
             />
              <TextInput 
                    style={styles.FlightSearchFromTextInput}  
                    onChangeText={(endDate) => setendDate(endDate)}
                    value={endDate}            
                    placeholder='dd/mm/yyyy'
                    placeholderTextColor='#142a52'        
             />
             <View style={styles.contentCenter}>
                    <TextInput 
                        style={styles.FlightSearchSourceTextInput}     
                        onChangeText={(source) => setSource(source)}
                        value={source}         
                        placeholder='Source station'
                        placeholderTextColor='#142a52'        
                    />
                    <TextInput 
                        style={styles.FlightSearchDestinationTextInput}   
                        onChangeText={(destination) => setdestination(destination)}
                        value={destination}           
                        placeholder='Destination station' 
                        placeholderTextColor='#142a52'        
                    />
                    <TextInput 
                        style={styles.FlightSearchPassengersTextInput} 
                        onChangeText={(passengers) => setpassengers(passengers)}
                        value={passengers}             
                        placeholder='Number of passengers' 
                        placeholderTextColor='#142a52'        
                    />
             </View>
             <TouchableOpacity style={styles.FlightSearchsubmit} onPress={()=>props.navigation.navigate('ResultFlight',{startDate,endDate,source,destination,passengers})}>
                 <Text style={styles.ButtonText}>Submit</Text>
             </TouchableOpacity>
        </View>
    );
};
export default FlightSearch;