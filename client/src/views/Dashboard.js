import React from "react";
import { useState, useEffect } from 'react'

import { getAllBooks } from '../Services/DashboardService'

import MovieCard from "./bookCard";
import SearchIcon from "./search.svg";
import "./app.css";

const API_URL = "http://localhost/api/user/bookIndex";

function Dashboard() {

	const [books, setBooks] = useState([]);
	// console.log("hi");
	// console.log(contacts);
	useEffect(() => {
		getAllBooks().then((data) => {
			console.log(data.data);
			setBooks(data.data.data);
		});
	}, []);

	const [searchTerm, setSearchTerm] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		searchMovies("Batman");
	}, []);

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};
const redirect=()=>{
	window.Location.href="/bookapply"
}
	return (
		<div className="app">
			<h1>GET YOUR BOOK</h1>

			<div className="search">
				<input
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Search for books or authors..."
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>

			{books?.length > 0 ? (
				<div className="container" >
					{books.map((book, index) => (
						<MovieCard movie={book} key={index}/>
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No results found</h2>
				</div>
			)}
		</div>
	);
};

export default Dashboard;;
