import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LoginForm from './Components/Login-Components/LoginForm';
import {BrowserRouter, Route} from 'react-router-dom'
import ListCourriers from './Components/Data-Display-Components/listCourriers';
import UtilisateurContextProvider from './Components/contexts/UtilisateurContext'
import CourrierContextProvider from './Components/contexts/CourrierContext';

function App() {
	return (
		<BrowserRouter>
				<UtilisateurContextProvider>
					<div className="App">
						<Route exact path='/login' component={LoginForm} />
						<CourrierContextProvider>
							<Route exact path='/list-courrier' component={ListCourriers} />
						</CourrierContextProvider>
					</div>
				</UtilisateurContextProvider>
		</BrowserRouter>
	);
}

export default App;
