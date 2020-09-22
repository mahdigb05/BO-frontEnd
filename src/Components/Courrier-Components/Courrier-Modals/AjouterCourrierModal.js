import React from 'react'
import CourrierContextProvider from '../../contexts/CourrierContext'
import ModalWrapper from '../../Modal/Modal'
import CourrierFormCard from '../Courrier-Form-Containers/CourrierCardContainer'
import CourrierForm from '../Courrier-Forms/AjouterCourrierForm'


const AjouterCourrierModal = ({displayModal, setDisplayModal}) => {

    return( 
            <ModalWrapper displayModal={displayModal} setDisplayModal={setDisplayModal}>
                <CourrierFormCard>
                    <CourrierForm setDisplayModal={setDisplayModal}/>
                </CourrierFormCard>
            </ModalWrapper>
    )

}

export default AjouterCourrierModal;