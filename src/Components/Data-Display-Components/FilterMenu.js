import React from 'react'

const FilterMenu = () =>{
    return(
        // <div class="uk-inline float-right mr-md-3 pl-2">
        //     <button class="btn btn-primary btn-sm pr-sm-3 " type="button"><i class="fas fa-filter pr-sm-2"></i>Filter</button>
        //     <div uk-dropdown="boundary: .boundary">
        //         <ul class="nav-pills pill nav flex-column">
        //             <li class="nav-item"><a href="#" className='nav-link'>Courrier Départ</a></li>
        //             <li class="nav-item"><a href="#" className='nav-link'>Courrier Arivée</a></li>
        //             <li class="nav-item"><a href="#" className='nav-link'>Courrier Intern</a></li>
        //         </ul>
        //     </div>
        // </div>
        <>
        <button class="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
  aria-haspopup="true" aria-expanded="false">Basic dropdown</button>

            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
            </div>
    </>
        )
}


export default FilterMenu;