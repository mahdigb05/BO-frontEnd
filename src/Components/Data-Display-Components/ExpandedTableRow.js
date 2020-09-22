import React from 'react'


const ExpandedTableRow = ({isExpanded}) => {

    return (isExpanded)?(
        <tr>
			<td colSpan="4">
				<div><p>hello ddddddddddddddddddddddddddddddddddddddddddddd</p></div>
			</td>
		</tr>
    ):null;
    
}

export default ExpandedTableRow