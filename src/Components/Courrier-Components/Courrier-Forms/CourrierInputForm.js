import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import { CourrierContext } from '../../contexts/CourrierContext';


const CourrierInputForm = () => {

    const {operationalCourrier, setOperationalCourrier} = useContext(CourrierContext)
	
	return (
        <div>
				<div className="form-group row">
					<label className="col">Methode d'envoi</label>
					<input type="text"  value={operationalCourrier.methodeEnvoi} onChange={(e) => {setOperationalCourrier({...operationalCourrier,methodeEnvoi:e.target.value})}} className="form-control col-5" />
				</div>

				<div className="form-group row">
					<label className="col">Objet</label>
					<input type="text" value={operationalCourrier.objet} onChange={(e) => {setOperationalCourrier({...operationalCourrier,objet:e.target.value})}} className="form-control col-5"/>
				</div>

				<div className="form-group row">
					<label className="col">Nature du courrier</label>
					<input type="text" value={operationalCourrier.nature} onChange={(e) => {setOperationalCourrier({...operationalCourrier,nature:e.target.value})}} className="form-control col-5"/>
				</div>

				<div class="form-group row">
					<label className="col">Type du courrier</label>
					<select class="form-control col-5" value={operationalCourrier.type} onChange={(e) => {setOperationalCourrier({...operationalCourrier,type:e.target.value})}} id="exampleFormControlSelect1">
						<option>Arrivée</option>
						<option>Départ</option>
						<option>Intern</option>
					</select>
				</div>

				<div className="form-group row">
					<label className="col">Date d'envoi</label>
					<TextField
						type="datetime-local"
						className="form-control col-5"
						variant="outlined"
						size="small"
                        defaultValue={operationalCourrier.dateEnvoi}
                        onChange={(e) => {setOperationalCourrier({...operationalCourrier,dateEnvoi:e.target.value})}}
					/>
				</div>

				<div className="form-group row">
					<label className="col">Date Arrivée</label>
					<TextField
						type="datetime-local"
						defaultValue={operationalCourrier.dateReception}
						className="form-control col-5"
						variant="outlined"
						size="small"
                        onChange={(e) => {setOperationalCourrier({...operationalCourrier,dateReception:e.target.value})}}
					/>
				</div>
			</div>
    )
}

export default CourrierInputForm;