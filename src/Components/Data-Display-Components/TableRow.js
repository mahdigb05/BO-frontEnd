import React,{useState, useContext} from 'react'
import { CourrierContext } from '../contexts/CourrierContext';
import ExpandedTableRow from './ExpandedTableRow'

const TableRow = ({courrier,setDisplayModif}) => {

	const [isExpanded, setIsExpanded] = useState(false);
	const {setOperationalCourrier ,setCurrentOperation} = useContext(CourrierContext)
	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	}

	const handleModification = () =>{
		
		setOperationalCourrier(courrier);
		setCurrentOperation('Modifier Courrier')
		setDisplayModif(true);
	}
	
	return(
		<>
			<tr onClick={() => {toggleExpand()}}>
				<td>hello sir</td>
				<td>hello sir</td>
				<td>hello sir</td>
				<td>hello sir</td>
				<td>hello sir</td>
				<td>hello sir</td>
				<td>
					<div class="uk-inline">
						<button class="btn btn-primary-outline" type="button"><i class="fas fa-ellipsis-h"></i></button>
						<div uk-dropdown="pos: bottom-justify; mode: click">
							<ul class="uk-nav uk-dropdown-nav">
								<li class=""><a href="#" onClick={() => {handleModification()}}><i class="far fa-edit mr-sm-2"></i>Modifier</a></li>
								<li class=""><a href="#"><i class="far fa-paper-plane mr-sm-2"></i>transferer</a></li>
								<li class=""><a href="#"><i class="far fa-trash-alt mr-sm-2"></i>supprimer</a></li>
								<li class=""><a href="#"><i class="fas fa-print mr-sm-2"></i>imprimer</a></li>
							</ul>
						</div>
					</div>
				</td>
			</tr>
			<ExpandedTableRow isExpanded={isExpanded}/>
		</>
	)

}

export default TableRow