import React,{useState} from 'react'
import FilesList from './FilesList';

const FileUpload = () => {

	const [files,setFiles] = useState([]);

	const addFiles = (file) =>{
		setFiles([...file])
	}

	const handleChange = (e) => {
		
		let fs = [...e.target.files];
		let i = 0;
		fs.forEach(f => {
			f.id = i;
			i++;
		})
		setFiles(fs)
	}

	const deleteFile = (id) => {
		setFiles(files.filter(file => id !== file.id))
	}
	return(

		<div class="from-group col">
				<div>
					<input type="file" className="custom-file-input" multiple data-show-upload="true" id="customFile" onChange={(e) => {handleChange(e)}} />
					<label className="custom-file-label" for="customFile">choisir fichier(s)</label>
				</div>
				<div>	
					<FilesList files={files} deleteFile={deleteFile} className="row"/>
				</div>
		</div>
		
	)

}

export default FileUpload