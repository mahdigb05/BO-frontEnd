import React from 'react'


const PersonnelList = ({personnels,emetteur}) => {

    const list = personnels.map(p => {
        return(
            <option> p.email + p.nom</option>
        )
    })

    let label = (emetteur) ? 'Emetteur' : 'Recepteur'
    return(
        <div class="form-group row">
                <label className="col-sm-1">{label}</label>
                <select class="form-control col-5" id="exampleFormControlSelect1" onChange={(e) => setType(e.target.value)}>
                    {list}
                </select>
        </div>
    )
}

export default PersonnelList