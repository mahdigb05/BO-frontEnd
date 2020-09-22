import React,{useContext} from 'react';
import { CourrierContext } from '../../contexts/CourrierContext';

const CourrierFormCard =  ({children}) => {

    const {currentOperation} = useContext(CourrierContext)
 
    return (
        <div className="container">
            <div class="row align-items-center">
                <div className="card col-md-7 mx-auto my-5">
                    <div className="card-body">
                        <h4 className='card-title'>{currentOperation}</h4>
                        <hr className="bg-primary" style={{width:"70px", height:"3px"}}/>
                        {children}
                    </div>
                </div>
            
            </div>
        </div>
    )

}

export default CourrierFormCard;