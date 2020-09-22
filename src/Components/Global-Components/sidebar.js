import  React,{Component} from 'react'

class Sidebar extends Component{


		render(){
			return(
					<nav class="col-2 d-md-block bg-light collapse">
						<div class="sidebar-sticky pt-lg-4">
							<ul class="nav flex-column pl-sm-3 font-weight-normal nav-pills pill">
								<li class="nav-item">
								<a class="nav-link" href="#"><i class="fas fa-home pr-2"></i>Menu principal</a>
									
								</li>
								<li className="nav-item ">
									<a class="nav-link " href="#"><i class="fas fa-mail-bulk pr-2"></i>Gestion de courriers</a>
								</li>
								<li className="nav-item">
									<a class="nav-link" href="#"><i class="fas fa-chart-pie pr-2"></i>Statistiques</a>
								</li>
							</ul>
						</div>
				</nav>		
			)
		}

}

export default Sidebar