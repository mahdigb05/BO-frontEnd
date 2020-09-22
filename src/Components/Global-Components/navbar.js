import  React,{Component} from 'react'


class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar bg-primary">
                    <a className="navbar-brand text-white font-weight-bold pl-md-3">Bureau d'Ordre</a>
                    <div className="row">
                        <div className="col mr-lg-5 mt-sm-1 text-white">mahdibenmoumen@gmail.com</div>
                        <div className="col mr-sm-4"><button type="button" className="btn btn-outline-light btn-sm">Deconnexion<i class="fas fa-sign-out-alt pl-2"></i></button></div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar