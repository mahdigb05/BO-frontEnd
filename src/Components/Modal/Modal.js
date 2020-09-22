import React, {useContext} from 'react'
import ReactDom from 'react-dom'
import { CourrierContext } from '../contexts/CourrierContext'

const MODAL_STYLES = {
	position : 'fixed',
	top :'52%',
	left:'50%',
	width:'100%',
	transform : 'translate(-50%,-50%)',
	zIndex :1000
}

const OVERLAY_STYLES = {
	position:'fixed',
	top:0,
	left:0,
	right:0,
	buttom:0,
	backgroundColor : 'rgba(0, 0, 0, .7)',
	width:'100%',
  	height: '100%',
	zIndex:1000
}

const ModalWrapper = ({displayModal, children, setDisplayModal}) => {

	const {setOperationalCourrier, setCurrentOperation, setPage ,page} = useContext(CourrierContext)

	const handleClose = () => {
		if(page === 2) setPage(1)
		setOperationalCourrier({})
		setCurrentOperation('')
		setDisplayModal(false)
	}

	if (!displayModal) return null;

	return ReactDom.createPortal(
		<>
				<div className="uk-animation-slide-top-small" style={OVERLAY_STYLES}>
					<i class="fas fa-times fa-lg mr-3 mt-3" onClick={() => {handleClose()}} style={{color:"white",float:"right",cursor:'pointer'}}></i>
					<div className="" style={MODAL_STYLES}>
						{children}
					</div>
				</div>
		</>,
		document.getElementById("portal")
	)

}

export default ModalWrapper;