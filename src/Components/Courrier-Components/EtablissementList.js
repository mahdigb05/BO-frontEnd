import React from 'react'


const EtablissementList = ({etablissements,emetteur}) => {

    const list = etablissements.map(e => {
        return(
            <option> e.email + e.nom</option>
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