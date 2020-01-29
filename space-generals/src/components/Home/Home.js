import React from "react";
import space from "../../space-spiral.gif";
import "../../App.css";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
	return (
		<Container className="homebackground">
		<Row>
			<Col xs={{ offset: 0 }} lg={{ offset: 2 }}>
				<img src={space} alt="space-man"/>
			</Col>
		</Row>
		</Container>
	)
};

export default Home;