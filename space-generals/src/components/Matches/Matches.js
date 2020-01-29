import React, { useState, useEffect } from "react";
import axios from "axios";

const Matches = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		if(data.length === 0) {
			axios.create({
  				baseURL: "",
  				withCredentials: true,
  				crossDomain: true,
  			});
  			axios.get('http://www.localhost:5000/api/users')
  				.then(res => {
  					console.log(res);
  				})
  				.catch(err => {
  					console.log(err);
  				})
		}
	}, [data])

	return (
		<h1>logged in</h1>
	)
};

export default Matches;