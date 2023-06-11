import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import  "./Register.css";

const Register = () => {

	const [data, setData] = useState({
		
		businessName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {

			const url = "https://divisha-tech-backend.onrender.com/api/seller/register";
			const { data: res } = await axios.post(url, data);

			Swal.fire({
				title: `User Created Sucessfully!`,
				icon: 'success',
				showCloseButton: true
		    });

			setTimeout(() => {
				navigate("/login");
			}, 1000);


			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				
				Swal.fire({
					title: `<strong>${error.response.data.message}</strong>`,
					icon: 'error',
					showCloseButton: true
				});
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="signup_container">
			<div className="container right-panel-active">
	
	<div className="container__form container--signup">
		<form action="#" className="form" id="form1" onSubmit={handleSubmit}>
		<h1 className="form__title">Create Account</h1>
						<input
							type="text"
							placeholder="Business Name"
							name="businessName"
							onChange={handleChange}
							value={data.businessName}
							required
							className="input"
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="ConfirmPassword"
							name="confirmPassword"
							onChange={handleChange}
							value={data.confirmPassword}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="btn">
							Sign Up
						</button>
		</form>
	</div>
	<div className="container__overlay">
		<div className="overlay">
			{/* <div className="overlay__panel overlay--left">
				<button className="btn" id="signIn">Sign In</button>
			</div> */}
			
		</div>
	</div>
		</div>
		</div>
	);
};

export default Register;