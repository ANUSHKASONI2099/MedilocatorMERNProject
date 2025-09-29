import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import UserHeader from "./UserHeader";


const SearchShopsOnMap= () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const shapeRef = useRef(null);
    const [locationData, setLocationData] = useState([]);


    const FetchData = async (e) => {

        try {
            const serverResponse = await axios.get("http://localhost:4000/user/searchShops")

           // console.log(res.data.data);
           const serverdata=serverResponse.data.shop
            setLocationData(serverdata)

            console.log(locationData);



        } catch (error) {
            console.error("Error fetching worker location :", error)
        }
    }

    useEffect(() => {
        FetchData()
    }, [])
    const markerLayerGroup = useRef(null);

    useEffect(() => {
        mapInstance.current = L.map(mapRef.current).setView([20.5937, 78.9629], 5);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstance.current);

        markerLayerGroup.current = L.layerGroup().addTo(mapInstance.current);

        return () => {
            mapInstance.current.remove();
        };
    }, []);

    const handleSearch = () => {
        const query = document.getElementById("search").value;
        const radius = parseFloat(document.getElementById("radius").value) * 1000;

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
        )}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (!data.length) return alert("Location not found.");

                const { lat, lon } = data[0];
                const latNum = parseFloat(lat);
                const lonNum = parseFloat(lon);

                mapInstance.current.setView([latNum, lonNum], 13);

                markerLayerGroup.current.clearLayers();
                if (shapeRef.current) mapInstance.current.removeLayer(shapeRef.current);

                const circle = L.circle([latNum, lonNum], {
                    color: "blue",
                    fillColor: "#30c3fd",
                    fillOpacity: 0.3,
                    radius: radius || 1000,
                }).addTo(mapInstance.current);
                shapeRef.current = circle;

                // Add searched marker
                const searchIcon = L.divIcon({
                    className: "custom-fa-icon",
                    html: `<i class="fas fa-map-marker-alt" style="color: red; font-size: 24px;"></i>`,
                    iconSize: [24, 24],
                });
                L.marker([latNum, lonNum], { icon: searchIcon }).addTo(markerLayerGroup.current);

                // Add all location markers within radius
                locationData.forEach((loc) => {
                    const locLat = parseFloat(loc.locationLat);
                    const locLng = parseFloat(loc.locationLong);

                    const distance = mapInstance.current.distance([latNum, lonNum], [locLat, locLng]);

                    if (distance <= radius) {
                        const icon = L.divIcon({
                            className: "custom-fa-icon",
                            html: `<i class="fas fa-home" style="font-size: 20px; color: green;"></i>`,
                            iconSize: [20, 20],
                        });

                        const marker = L.marker([locLat, locLng], "fas fa-dna").addTo(markerLayerGroup.current);
                        marker.bindPopup(
                            `<strong>${loc["shopName"]}</strong><br>

               ${loc.address}<br>
               ${loc.phone}<br>
               
               `
                        );
                    }
                });
            })
            .catch((err) => console.error("Search error:", err));
    };

    return (
        
        
        <div>
       <UserHeader/>

            <div className="container"style={{marginTop:"5%"}}>
                <h1>Map View</h1>
                <div className="search-container" style={{ marginBottom: "10px" }}>
                    <input type="text" id="search" placeholder="Search location..." />
                    <input type="number" id="radius" placeholder="Radius in km" />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div ref={mapRef} style={{ height: "500px", width: "100%" }} />
            </div>
        </div>
    );
};

export default SearchShopsOnMap
