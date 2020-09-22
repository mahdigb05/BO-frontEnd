import React,{useState, useContext} from 'react';
import axios from 'axios';
import { UtilisateurContext } from '../contexts/UtilisateurContext';
var bg = require('../../imgs/Mail.png');

const LoginForm = (props) => {

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')
        const {setUserRole,setCurrentUser} = useContext(UtilisateurContext)
        
        const handleSubmit = async (e) =>{
            
            e.preventDefault()
            try{
                const res = await axios.post('http://localhost:8080/login',{email,password},{
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                setUserRole(res.data.role);
                setCurrentUser(email);    
                localStorage.setItem('token',res.data.token);
                props.history.push('/list-courrier')
                
            }
            catch(err){
                if(err.response.status === 400){
                    setError(err.response.data.message)
                    setTimeout(() => {
                        setError('')
                    }, 3000);
                }
            }
            
        }

        return(
            <div  className="fullScreen uk-background-cover uk-height-medium" style={{backgroundImage: "url("+bg+")"}} >
                <div className="uk-container uk-card-default uk-width-1-4 uk-align-center uk-animation-slide-top-medium">        
                    <form className="uk-form-stacked uk-width-1-1 loginForm" onSubmit={(e) => {handleSubmit(e)}}>
                        <div>
                            <br/>                        
                            <h2 className="uk-heading-xsmall uk-text-bold uk-margin-xsmall-buttom mt-sm-3">Bienvenue</h2>
                            <hr className="mb-4" style={{backgroundColor:'#0275d8', width:'25%', height:'2px'}}/>  
                            {(error)?
                                <div class="alert alert-danger" role="alert">
                                    {error}
                                </div>:null}
                            <label className="uk-form-label uk-text-normal">Adresse email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input mb-4" required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <label className="uk-form-label uk-text-normal">Mot de passe</label>
                            <div className="uk-form-controls">
                                <input type="password" className="uk-input mb-5" value={password} required onChange={(e) => {setPassword(e.target.value)}}/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block">connexion</button>
                            <br/>
                            <label className="uk-form-label uk-text-normal uk-text-muted">mot de passe oublié? vérifiez la boîte de réception de votre e-mail</label>
                        </div>
                    </form>
                    <br/>
                </div>
            </div>
        )
    }

export default LoginForm