import React from 'react'
import ModifierCourrierForm from '../Courrier-Forms/ModifierCourrierForm'
import CourrierContextProvider from '../../contexts/CourrierContext'
import ModalWrapper from '../../Modal/Modal'
import CourrierFormCard from '../Courrier-Form-Containers/CourrierCardContainer'

const ModifierCourrierModal = ({displayModal, setDisplayModal, courrier, setCourrier}) =>{

    return(
         
            <ModalWrapper displayModal={displayModal} setDisplayModal={setDisplayModal}>
                <CourrierFormCard>
                    <ModifierCourrierForm courrier={courrier} setCourrier={setCourrier}/>
                </CourrierFormCard>
            </ModalWrapper>
        
    )


}

export default ModifierCourrierModal