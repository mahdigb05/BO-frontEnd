import React,{useState, useContext} from 'react'
import { CourrierContext } from '../../contexts/CourrierContext';
import FileUpload from '../files-Components/FileUpload';
import CourrierInputForm from './CourrierInputForm';

const CourrierForm = ({setDisplayModal}) => {


	const {setOnUpload,setCurrentOperation,setOperationalCourrier} = useContext(CourrierContext)
	const [page,setPage] = useState(1);

	const handleCancelandBack = () =>{
		
		if(page === 2){
			setPage(1);
		}
		else{
			setOperationalCourrier({})
			setCurrentOperation('')
			setDisplayModal(false)
		}
	}

	const handleSubmit = () => {
		(page === 1)? setPage(2) : setOnUpload(true);
	}

	const btn1 = (page === 1) ? 'Annuler' : 'Precedent';
	const btn2 = (page === 1) ? 'suivant' : 'Enregistrer';

	return(
		<form className="mt-4">

			{(page === 1)?(
				<CourrierInputForm />
			):(<FileUpload className="row"/>)}
			<div className='row justify-content-end mt-5'>
					<button type="button" className="btn btn-secondary col-lg-2 col-sm-3" onClick={() => {handleCancelandBack()}}> {btn1} </button>
					<button type="button" onClick={() => {handleSubmit()}} className="btn btn-primary col-lg-2 col-sm-3 ml-md-3"> {btn2} </button>
			</div>
		</form>
	)
}


export default CourrierForm;