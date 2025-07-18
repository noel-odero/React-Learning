import { useState } from "react";
import uuid from 'react-uuid';
import {TiTick, TiTrash} from 'react-icons/ti';

const Header = () => {
    return(
        <>
            <h1>My Bucket Lisy</h1>
        </>
    );
};

const BucketList = () => {
    const [state, setState] = useState([]);

    const[wish, setWish] = useState({
        title: "",
        by: ""    
    })
}
