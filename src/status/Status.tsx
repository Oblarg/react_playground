import React, {useState} from 'react';
import axios from 'axios';
import './status.css';
import {divIcon} from "leaflet";

interface OfflineProps {
    offline: boolean;
    color: string;
}

enum Colors {
    green = "#66ff33",
    red = "#ff3300",
}

export const Status = React.memo<OfflineProps>((props) => {

    const [offline, setOffline] = useState(false);
    const [color, setColor] = useState(Colors.red);

    axios.get('https://www.google.com/')
        .then((res) => {
            console.log(res.status);
            setOffline(false);
            setColor(Colors.green);
        }).catch((error) => {
            console.log(error);
            setOffline(true);
            setColor(Colors.red);
    })


    return (
        <div>
            <span className="circle" color={color}>
            </span>
        </div>
    )
})