import React,{useState, useContext} from 'react';
import AjouterCourrierModal from '../Courrier-Components/Courrier-Modals/AjouterCourrierModal';
import FilterMenu from './FilterMenu';
import ModifierCourrierModal from '../Courrier-Components/Courrier-Modals/ModifierCourrierModal';
import Navbar from '../Global-Components/navbar'
import Sidebar from '../Global-Components/sidebar';
import TableRow from './TableRow'
import CourrierContextProvider, { CourrierContext } from '../contexts/CourrierContext';

const ListCourriers = () =>{

	const [displayAjout,setDisplayAjout] = useState(false);
	const [displayModif,setDisplayModif] = useState(false);
	const {setCurrentOperation} = useContext(CourrierContext);
	
	const tags = "numero, emetteur, recepteur, objet"

	return(
			<div>
				<ModifierCourrierModal displayModal={displayModif} setDisplayModal={setDisplayModif}/>
				<AjouterCourrierModal displayModal={displayAjout} setDisplayModal={setDisplayAjout}/>
				<Navbar/>
				<div className="row">
					<Sidebar/>
					<div className="col mt-lg-5 container">
						<div className="form-inline ml-4">
							<h2 className="font-weight-bold">Courriers</h2>
							<input className="form-control form-control-sm col-lg-4 searchbar" type="text" placeholder={tags}/>
							<FilterMenu/>
							<button type="button" onClick={() => {setCurrentOperation('Ajouter Courrier');setDisplayAjout(true)}} 
								className="btn btn-primary float-right mr-md-5 btn-sm " ><i class="fas fa-plus pr-sm-2">    
								</i>Ajouter courrier
							</button>
						</div>
						
						<table className="table  table-sm table-light tab ml-md-4">
							<thead className="font-weight-normal">
								<tr className="shadow-sm text-primary">
									<th>Numero</th>
									<th>Emetteur</th>
									<th>Recepteur</th>
									<th>Objet</th>
									<th>Type</th>
									<th>Transeferé</th>
									<th>Action</th>
								</tr>
							</thead>
						
							<tbody>
								<TableRow setDisplayModif={setDisplayModif} />
							</tbody>
						</table>
					</div>
				</div>
			</div>         
		)
}

export default ListCourriers