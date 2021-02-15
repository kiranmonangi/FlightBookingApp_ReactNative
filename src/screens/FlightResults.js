import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Flightstyles';
import flightsdata from '../../Flights.json';


const FlightResults = (props)=>{
    const StartDate=props.navigation.getParam('startDate', 'no-startDate');
    const EndDate=props.navigation.getParam('endDate', 'no-endDate');
    const Source=props.navigation.getParam('source', 'no-source');
    const Destination=props.navigation.getParam('destination', 'no-destination');
    const Passengers=props.navigation.getParam('passengers', 'no-passengers');
    const [airline, setAirline] = useState('');
    const [cost, setCost] = useState('');
    const [plane, setplane] = useState('');
    const [airlined, setAirlined] = useState('');
    const [costd, setCostd] = useState('');
    

    const SearchByData = () =>{
        try{
                 let sourceFlights = flightsdata.filter(
                                             (flight => (flight.source === Source)&&
                                            (flight.date === StartDate)&&
                                            (flight.destination === Destination)&&
                                            (flight.seats >= Passengers)))   
                                            setAirline(sourceFlights[0].airline);
                                            setCost(sourceFlights[0].cost);
                                            setplane(sourceFlights[0].img);

                  let destinationFlights = flightsdata.filter(
                                                (flight => (flight.source === Destination)&&
                                                (flight.date === EndDate)&&
                                                (flight.destination === Source)&&
                                                (flight.seats >= Passengers)))   
                                                setAirlined(destinationFlights[0].airline);
                                                setCostd(destinationFlights[0].cost);
    }
    catch(error){
        props.navigation.navigate('Home');
        alert("sorry for the inconvenience....please provide another inputs...")
    }

      
         
    };

        return(
            <View style={styles.FlightSearchContainer} onLayout={SearchByData}>
                <View style={styles.FlightSearchHeader}>
                        <Text style={styles.FlightSearchHeaderText}>Book your Journey</Text>
                </View>
    
                <View style={styles.FlightResultAiline}>
                     <Text style={styles.ButtonText}>{airline}</Text>
                     <Text style={styles.ButtonText}>                                         --------)) </Text>
                     <Text style={styles.ButtonText}>Cost:{cost}</Text>
                     <Image
                        style={styles.planePic} 
                        source={{
                        uri: `${plane}`
                        }}
                  />
                </View>
                <View style={styles.FlightResultAilines} >
                     <Text style={styles.ButtonText}>{airlined}</Text>
                     <Text style={styles.ButtonText}>                                       ((-------- </Text>
                     <Text style={styles.ButtonText}>Cost:{costd}</Text>
                     <Image
                        style={styles.planePic} 
                        source={{
                        uri: `${plane}`
                        }}
                  />
                </View>
                <TouchableOpacity style={styles.FlightSearchsubmit} onPress={()=>props.navigation.navigate('DetailsUser',{Passengers, cost,costd})}>
                 <Text style={styles.ButtonText}>RoundTrip</Text>
             </TouchableOpacity>
                    

            </View>
        );
};

export default FlightResults;

    // console.log("Passengers:   "+ Passengers);
    // console.log(flightsdata[2].airline);
    // console.log("StartDate:   "+ StartDate);
    // console.log("EndDate:   "+ EndDate);
    // console.log("Source:   "+ Source);
    // console.log("Destination:   "+ Destination);
    //    console.log(flightsdata);  
    //    console.log( flightsdata.filter(flight => flight.source === Source));
    // console.log(user);
    // console.log(user[0].airline);
    // console.log(airline);
    // console.log(user[0].img);