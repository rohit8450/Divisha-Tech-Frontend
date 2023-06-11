import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");



	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://divisha-tech-backend.onrender.com/api/seller/login";
			const res = await axios.post(url, data);
			console.log(res)

			Swal.fire({
				title: `Logged in Sucessfully`,
				icon: 'success',
				showCloseButton: true
		    });
			
			setTimeout(() => {
				localStorage.setItem("token", res.data.data);
				localStorage.setItem("sellerId", res.data.seller);
			   window.location = "/";	
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
		<div className="login_container">
		<div className="container right-panel-active">
	
		
	
		<div className="container__form container--signin" >
			<form action="#" className="form" id="form2" onSubmit={handleSubmit}>
			<h1>Login to Your Account</h1>
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
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="btn">
							Sign In
						</button>
			</form>
		</div>
	
	
		<div class="container__overlay">
		<div class="overlay">
			
		</div>
	</div>
	</div>
			</div>
	);
};

export default Login;