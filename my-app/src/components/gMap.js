import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import db from '../firebase'
import { query, updateDoc, collection, getDocs, orderBy, doc, startAt, endAt, getDoc, arrayUnion, arrayRemove, QuerySnapshot, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from 'react';


const Info = (props) => {
    return (
        <div>
            <h2>
                Name: {props.name}
            </h2>
            <h2>
                Rating: {props.rating}
            </h2>
            <h2>
                Commnents: {props.comments}
            </h2>
        </div>
    )
}

const MapContainer = (props) => {


    const [markersList, setMarkers] = useState([]);
    useEffect(() =>
        onSnapshot(collection(db, "locations"), (snapshot) =>
            setMarkers(snapshot.docs.map(doc => doc.data()))
        ), []);

    const mapStyles = {
        height: "100vh",
        width: "60%",
        float: "left"
    };

    const defaultCenter = {
        lat: 34.38, lng: -118.11
    }


    return (
        <LoadScript
            googleMapsApiKey='AIzaSyAajugH6tY0IEwW8nWM1vs1LSHSJyTxk0U'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}>

                {
                    markersList.map(mark => {
                        let Color;
                        if (mark.rating >= 4) { Color = "http://maps.google.com/mapfiles/ms/icons/green.png" }
                        else if (mark.rating == 3) { Color = "http://maps.google.com/mapfiles/ms/icons/yellow.png" }
                        else { Color = "http://maps.google.com/mapfiles/ms/icons/red.png" }
                        return (
                            <Marker
                                onClick={() => props.setter(<div><Info name={mark.doctorName} rating={mark.rating} comments={mark.comments}
                                /></div>)
                                } icon={Color} key={mark.name} position={{ lat: mark.coordinate[0], lng: mark.coordinate[1] }} />
                        )
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;