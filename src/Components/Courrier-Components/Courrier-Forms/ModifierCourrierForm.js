import React,{useState, useContext} from 'react'
import { CourrierContext } from '../../contexts/CourrierContext';
import CourrierInputForm from './CourrierInputForm';

const ModifierCourrierForm = ({courrier, setCourrier}) => {

	return(
		<form className="mt-4">
			<CourrierInputForm courrier={courrier} setCourrier={setCourrier} />
			<div className='row justify-content-end mt-5'>
					<button className="btn btn-secondary col-lg-2 col-sm-3">annuler</button>
					<button className="btn btn-primary col-lg-2 col-sm-3 ml-md-3">valider</button>
			</div>
		</form>
	)
}


export default ModifierCourrierForm;