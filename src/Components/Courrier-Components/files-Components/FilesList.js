import React, { useContext, useEffect, useState } from 'react'
import { CourrierContext } from '../../contexts/CourrierContext';
import axios from 'axios'

const FilesList = ({files,deleteFile}) => {

	
	const [progress,setProgress] = useState(() => {return new Array(files.length).fill(0)});
	const {onUpload, setOnUpload} = useContext(CourrierContext);

	const modifyProgress = (id,prg) => {
		progress[id] = prg
		setProgress([...progress])
		console.log(progress)
	}

	useEffect(() => {

	 if(onUpload){ 
		if(files.length){

			files.forEach( async file => {

			console.log(file.id)
			let formPayload = new FormData();
			formPayload.append('file', file);
			await axios.post('http://localhost:8080/login',formPayload,{
				headers:{
					'Content-type':'multipart/form-data',
				},
				onDownloadProgress: progressEvent => {
					modifyProgress(file.id,parseInt(Math.floor((progressEvent.loaded/progressEvent.total) * 100)));
				}
			})
			})
			setOnUpload(false)
			}
		}   
	},[onUpload]
)

	const list = files.map(f => {
		return(
			<li key={f.id} className="list-group-item col">
					<div className="row">
						<span className="col-11"><i class="far fa-file mr-2"></i> {f.name} </span>
						<button type="button" className='btn btn-primary-outline col' onClick={()=>{deleteFile(f.id)}}><i class="fas fa-times"></i></button>
					</div>
					{(onUpload)?
					<div className="row">
						<div className="col ml-4">
							<progress className="uk-progress h-25" value={progress[f.id]} max="100"></progress>
						</div>
					</div>:null
					}                            
			</li>
		)
	})

	return(
		<ul className="list-group list-group-flush mt-5 ulOverflow">
			{list}
		</ul>
	)


}

export default FilesList