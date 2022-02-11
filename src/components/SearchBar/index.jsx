import React, { useState, useEffect } from 'react'
import 'dotenv/config'

import MediaList from '../MediaList'
import styles from './searchbar.module.css'

export default function SearchBar() {
	const [searchText, setSearchText] = useState('')
	const [results, setResults] = useState([])

	useEffect(() => {
		getSearchResults(searchText)
	}, [searchText])

	async function getSearchResults(query) {
		if(query.length === 0) {
			setResults([])
			return
		}
        await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.SECRET_API_KEY}&query=${query}`)
		.then(response => response.json())
		.then(response => setResults(response.results))
	}

	return (
		<>
			<input 
				list='search-results'
				value={searchText}
				className={styles['searchbar']}
				style={{marginBottom: results.length > 0 ? '10px' : 0}}
				placeholder='Something in specific?'
				onChange={({target}) => setSearchText(target.value)}
			/>
			{
				results.length > 0 ?
				<MediaList medias={results} mediaType={null}/>
				: null
			}
		</>
	)
}
