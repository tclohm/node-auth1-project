import React from "react";
import "../../App.css";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

export const Register = () => {
	return (
		<Container>
		<Row>
		<Col xs={{ size: 12 }} lg={{ size: 3, offset: 8 }}>
		<Form className="form-spread">
			<Input type="text" name="username" placeholder="username" />
			<Input type="password" name="password" placeholder="password" />
			<Button color="primary">Register</Button>
		</Form>
		</Col>
		</Row>
		</Container>
	);
};