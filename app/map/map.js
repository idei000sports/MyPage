"use client"

import "leaflet/dist/leaflet.css";
import "./css.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet'
import { useState, useEffect, useCallback } from 'react';
import React from "react";
import OriginsAdd from "./origins_add";
import Add from "./add"



//import returnSelect from "./db";




export default function Map() {
    const [map, setMap] = useState(null)
    const [zoom, setZoom] = useState(6);
    const [center, setCenter] = useState([40.7035, -73.8196]);

    const [popups, setPopups] = useState([]);
    const [cityPopups, setCityPopups] = useState([]);

    const [origins, setOrigins] = useState([]);

    const [cities, setCities] = useState([{ county: "dummy", lattitude: 0, longitude: 0 }]);

    //const [position, setPosition] = useState("");

    const [nowPosition, setNowPosition] = useState("");

    const [testPopup, setTestPopup] = useState("");




    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/origin');
            const json = await response.json();
            /*
            const p = [];
            for (let i = 0; i < 1; i++) {
                p.push({ name: json[i].name, 緯度: 30, 経度: -70 })
            }
            setPopups(p);
            */
            setOrigins(json);
            console.log("origin 読み込んだ")
        };
        fetchNotes();
    }, []);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/cityName');
            const json = await response.json();

            const p = [];
            /*
            for (let i = 0; i < 10; i++) {
                //console.log(json[i])
                p.push(json[i]);
            }
            */
            setCities(json);
            console.log("city 読み込んだ")
        };
        fetchNotes();
    }, []);



    function NowCoodinates() {
        //現在地、ドラッグ終わったら発火
        const map = useMapEvents({
            dragend: (e) => {
                setNowPosition({ lat: e.target.getCenter().lat, lng: e.target.getCenter().lng });
            }
        });
        return null;
    }

    useEffect(() => {
        //現在地変わったら

        let 現在地周辺 = []
        let 表示したいバンド = []

        if (nowPosition.lat != undefined && nowPosition.lng != undefined) {

            for (let city in cities) {
                let latの差 = nowPosition.lat - cities[city].lattitude;
                let lngの差 = nowPosition.lng - cities[city].longitude;
                let 最小範囲 = -10;
                let 最大範囲 = 10;
                if (最小範囲 < latの差 && latの差 < 最大範囲 && 最小範囲 < lngの差 && lngの差 < 最大範囲) {
                    現在地周辺.push(
                        cities[city]
                    );
                }
            }

            for (let city in 現在地周辺) {

                let objct = {
                    county: 現在地周辺[city].county,
                    lattitude: 現在地周辺[city].lattitude,
                    longitude: 現在地周辺[city].longitude,
                    bandsArr: []
                }


                for (let origin in origins) {
                    //console.log(origins[origin]);
                    if (現在地周辺[city].county == origins[origin].county && 現在地周辺[city].state == origins[origin].state) {

                        let obj = {
                            name: origins[origin].name,
                            country: origins[origin].country,
                            state: origins[origin].state,
                            county: origins[origin].county,
                            formation: origins[origin].formation,
                            dissolution: origins[origin].dissolution,
                            //lattitude: 現在地周辺[city].lattitude,
                            //longitude: 現在地周辺[city].longitude,
                        }
                        objct.bandsArr.push(obj);
                    }
                }

                if (objct.bandsArr.length != 0) {
                    //console.log(objct)
                    表示したいバンド.push(objct);
                }

                //console.log(objct)
            }

            //console.log(表示したいバンド);

            let popups = [];


            for(let i = 0; i < 表示したいバンド.length; i++){
                表示したいバンド[i].names = "";
                for (let j = 0; j < 表示したいバンド[i].bandsArr.length; j++){
                    表示したいバンド[i].names = 表示したいバンド[i].names + 表示したいバンド[i].bandsArr[j].name + "," + "<br>"
                }

            }

            //console.log(表示したいバンド);



            
            setTestPopup(表示したいバンド.map((item, index) => (
                
                <Marker
                    icon={L.divIcon({
                        html: `${item.names}`,
                        className: 'divicon1',
                        iconSize: [150,10], 
                        //iconSize: [80, 30],
                        //iconAnchor: [0, 0],
                        //popupAnchor: [0, -10]
                    })}
                    key={index}
                    position={[item.lattitude, item.longitude]}
                >

                </Marker>
                    

            )))
            
        }






    }, [nowPosition]);

    //<p>lat: {nowPosition.lat} lng : {nowPosition.lng}</p>

    return (
        <div>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                ref={setMap}
                style={{ height: '100vh' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />

                {testPopup}
                <NowCoodinates />
            </MapContainer>


        </div>
    )
}

/*


            <MapContainer center={center} zoom={4} scrollWheelZoom={true} style={{ height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {popups.map((item, index) => (
                    <Popup
                        key={index}
                        position={[parseFloat(item.緯度), parseFloat(item.経度)]}
                        autoClose={false}
                        closeOnClick={false}
                        closeButton={false}
                        closeOnEscapeKey={false}
                    >{item.name}</Popup>
                ))}

                {cityPopups.map((item, index) => (
                    <Popup
                        key={index}
                        position={[parseFloat(item.lattitude), parseFloat(item.longitude)]}
                        autoClose={false}
                        closeOnClick={false}
                        closeButton={false}
                        closeOnEscapeKey={false}
                    >{item.county}</Popup>
                ))}


            </MapContainer>



                {cityPopups.map((item, index) => (
                    <Popup
                        key={index}
                        position={[item.lattitude, item.longitude]}
                        autoClose={false}
                        closeOnClick={false}
                        closeButton={false}
                        closeOnEscapeKey={false}
                    >{item.county}</Popup>
                ))}


{cityPopups.map((item, index) => (
    <Popup
        key={index}
        position={[parseFloat(item.緯度), parseFloat(item.経度)]}
        autoClose={false}
        closeOnClick={false}
        closeButton={false}
        closeOnEscapeKey={false}
    >{item.county}</Popup>
))}
*/