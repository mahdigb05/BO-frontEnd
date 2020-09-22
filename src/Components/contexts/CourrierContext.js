import axios from 'axios';
import React,{ createContext, useState} from 'react';

export const CourrierContext = createContext();

const CourrierContextProvider = (props) => {

    const [onUpload, setOnUpload] = useState(false);
    
    const [courriers,setCourriers] = useState('');
    
    const [operationalCourrier, setOperationalCourrier] = useState({})
    
    const [currentOperation, setCurrentOperation] = useState([])

    const toggleOnUpload = () => {
        setOnUpload(!onUpload);
    }

    const getDatafromDb = async () =>{
        const retrievedData = await axios.get('http://localhost:8080/login');
        setCourriers(retrievedData.data);
    }

    return(
        <CourrierContext.Provider value = {{onUpload, toggleOnUpload,courriers, setCourriers,
         operationalCourrier, setOperationalCourrier,
         currentOperation, setCurrentOperation, getDatafromDb}}>
            {props.children}
        </CourrierContext.Provider>
    )
}


export default CourrierContextProvider;