import React, { useEffect, useState } from "react"
import 'dotenv/config'

import MediaList from "../../components/MediaList"
import SearchBar from "../../components/SearchBar"
import capitalize from "../../utils/utils"
import styles from './home.module.css'


export default function Home({mediaType}) {

	const [trending, setTrending] = useState([])
	const [popular, setPopular] = useState([])

	useEffect(() => {
		fetchTrendingData(mediaType)
        fetchPopularData(mediaType)
	}, [mediaType])

    async function fetchTrendingData(type) {
        await fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.SECRET_API_KEY}`)
		.then(response => response.json())
		.then(response => setTrending(response.results))       
    }
    
    async function fetchPopularData(type) {
        await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.SECRET_API_KEY}`)
		.then(response => response.json())
		.then(response => setPopular(response.results))
    }

    return (
        <main className={styles['main']}>
            <section className={styles['main__section']}>
                <label htmlFor="searchbar"><h1 className={styles['main__section-title']}>Search for something specific</h1></label>
                <SearchBar/>
            </section>
            <section className={styles['main__section']}>
                <h1 className={styles['main__section-title']}>Most trending {capitalize(mediaType) + 's'}</h1>
                <MediaList medias={trending} mediaType={mediaType}/>
            </section>            
            <section className={styles['main__section']}>
                <h1 className={styles['main__section-title']}>Most popular {capitalize(mediaType) + 's'}</h1>
                <MediaList medias={popular} mediaType={mediaType}/>
            </section>
        </main>
    )
}