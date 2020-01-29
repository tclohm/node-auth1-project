import React, { useState } from "react";
import "../../App.css";
import logo from "./assets/astro.png";

import { 
	TabContent, 
	TabPane, 
	Nav, 
	NavItem, 
	NavLink, 
	Card, 
	CardTitle, 
	CardText, 
	Button, 
	Form, 
	Input, 
	Container, 
	Row, 
	Col,
	Spinner,
	Alert 
} from "reactstrap";

import classnames from 'classnames';

export const Register = () => {

	const [activeTab, setActiveTab] = useState('1');
	const [userToRegister, setUserToRegister] = useState({username: "", password: ""});
	const [userToLogin, setUserToLogin] = useState({username: "", password: ""});

	const [isFetching, setIsFetching] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [throwError, setThrowError] = useState(false);

	const toggle = tab => {
    	if(activeTab !== tab) setActiveTab(tab);
  	}

  	const changeLoginUser = (event) => {
  		return setUserToLogin({...userToLogin, [event.target.name]: event.target.value});
  	}

  	const changeRegisterUser = (event) => {
  		return setUserToRegister({...userToRegister, [event.target.name]: event.target.value});
  	}

  	const register = () => {
  		if (userToRegister.username !== "" && userToRegister.password !== "") {
	  		setIsFetching(true);
	  		let fetch = () => setTimeout(function() {
	  			setIsFetching(false);
	  			toggle('2');
	  		}, 1000);
	  		fetch();
	  		clearTimeout(fetch);
	  		registrationwork();
  		} else {
  			setThrowError(true)
  			let errorTimer = () => setTimeout(function () {
  				setThrowError(false);
  			}, 3000)
  			errorTimer();
  			clearTimeout(errorTimer);
  		}
  	}

  	const registrationwork = () => {
  		setIsRegistered(true);
  		let scss = () => setTimeout(function() {
  			setIsRegistered(false)
  		}, 4000);
  		scss();
  		clearTimeout(scss);
  	}

  	const login = () => {
  		if (userToLogin.username !== "" && userToLogin.password !== "") {
  			
  		} else {
	  		setIsFetching(true);
	  		let fetch = () => setTimeout(function () {
	  			setIsFetching(false)
	  		}, 2000)
	  		fetch();
	  		clearTimeout(fetch);
  		}
  	}

	return (
		<Container>
			<Row>
				<Col>
					<img src={logo} alt="astronaut" height="200" width="200"/>
				</Col>
				{isFetching ?
					<Col xs={{ offset: 6 }}>
						<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="light" />
					</Col>
					:
					<></>
				}
				{isRegistered && !isFetching ? 
					<Col xs={{ offset: 6 }}>
						<Alert color="success">Registration success, please login.</Alert>
					</Col>
					:
					<></>
				}
				{throwError ?
					<Col xs={{ offset: 2 }}>
						<Alert color="danger">🤔, something went wrong. Please try again.</Alert>
					</Col>
					:
					<></>
				}
			</Row>
			<Row>
				<Col xs={{ size: 12 }} lg={{ size: 4, offset: 7 }}>
					<Nav tabs>
        				<NavItem>
          					<NavLink
            					className={classnames({ active: activeTab === '1' })}
            					onClick={() => { toggle('1'); }}
          					>
            					Sign up
          					</NavLink>
        				</NavItem>
        				<NavItem>
          					<NavLink
            					className={classnames({ active: activeTab === '2' })}
            					onClick={() => { toggle('2'); }}
          					>
            					Log In
          					</NavLink>
        				</NavItem>
      				</Nav>
      			</Col>
      		</Row>

      		<TabContent activeTab={activeTab}>
	        <TabPane tabId="1">
				<Row>
					<Col xs={{ size: 12 }} lg={{ size: 4, offset: 7 }}>
						<Form className="form-spread">
							<Input type="text" name="username" value={userToRegister.username} onChange={changeRegisterUser} placeholder="username" />
							<Input type="password" name="password" value={userToRegister.password} onChange={changeRegisterUser} placeholder="password" />
							<Button color="primary" onClick={register}>Register</Button>
						</Form>
					</Col>
				</Row>
	        </TabPane>
	        <TabPane tabId="2">
	        	<Row>
					<Col xs={{ size: 12 }} lg={{ size: 4, offset: 7 }}>
						<Form className="form-spread">
							<Input type="text" name="username" value={userToLogin.username} onChange={changeLoginUser} placeholder="username" />
							<Input type="password" name="password" value={userToLogin.password} onChange={changeLoginUser} placeholder="password" />
							<Button color="warning" onClick={login}>Log In</Button>
						</Form>
					</Col>
				</Row>
	        </TabPane>
	      </TabContent>
		</Container>
	);
};