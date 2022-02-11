import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import 'dotenv/config'

import CastList from "../../components/CastList"
import MediaList from "../../components/MediaList"
import styles from './media.module.css'


export default function Media() {
    
    const {id, mediaType} = useParams()
    const [media, setMedia] = useState({})
    const [genres, setGenres] = useState([])
    const [cast, setCast] = useState([])
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetchMedia(mediaType, id)
        fetchCast(mediaType, id)
        fetchSimilar(mediaType, id)
    }, [id, mediaType])

    async function fetchMedia(type, mediaId) {
        await fetch(`https://api.themoviedb.org/3/${type}/${mediaId}?api_key=${process.env.SECRET_API_KEY}`)
		.then(response => response.json())
		.then(response => {
            setMedia(response)
            setGenres(response.genres)
        })
    }
   
    async function fetchCast(type, mediaId) {
        await fetch(`https://api.themoviedb.org/3/${type}/${mediaId}/credits?api_key=${process.env.SECRET_API_KEY}`)
		.then(response => response.json())
		.then(response => setCast(response.cast.splice(0, 20)))
    }
    
    async function fetchSimilar(type, mediaId) {
        await fetch(`https://api.themoviedb.org/3/${type}/${mediaId}/similar?api_key=${process.env.SECRET_API_KEY}`)
		.then(response => response.json())
		.then(response => setSimilar(response.results))
    }

    return (
        <main  className={styles['main']}>
            <section 
                className={styles['backdrop']}
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${media.backdrop_path})`}}
            >
                <div className={styles['backdrop__overlay']}>
                    <img 
                        className={styles['backdrop__poster']}
                        src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} 
                        alt={`${media.title} poster`}
                    />
                    <article>
                        <h1 className={styles['backdrop__title']}>{media.title}</h1>
                        <fieldset className={styles['backdrop__fieldset']}>
                            <legend><h3 className={styles['backdrop__fieldset-legend']}>Overview</h3></legend>
                            <h2 className={styles['backdrop__fieldset-overview']}>{media.overview}</h2>
                        </fieldset>
                    </article>
                </div>
            </section>
            
            <section className={styles['details']}>
                <article className={styles['details__title-article']}>
                    <h1 className={styles['details__title']}>{media.title}</h1>
                    <fieldset>
                        <legend><h3 className={styles['details__fieldset-legend']}>Overview</h3></legend>
                        <h2 className={styles['details__overview']}>{media.overview}</h2>
                    </fieldset>
                    <div className={styles['divider']}/>            
                </article>
                <article className={styles['info']}>
                    <div>
                        <h4>Status:{' '}</h4>
                        <h2>{media.status}</h2>
                    </div>
                    <div>
                        <h4>Rating:{' '}</h4>
                        <h2>{media.vote_average}</h2>
                    </div>
                    <div>
                        <h4>Runtime:{' '}</h4>
                        <h2>{media.runtime} min</h2>
                    </div>
                    <div>                        
                        <h4>Genres:{' '}</h4>
                        <h2>{
                            genres.map(genre => (
                                genres.indexOf(genre) !== (genres.length-1) ?
                                `${genre.name}, ` :
                                `${genre.name}`
                            ))    
                        }</h2>
                    </div>
                </article>
                <div className={styles['divider']}/>
                <article className={styles['list']}>
                    <h2>Cast</h2>
                    <CastList
                        cast={cast}
                    />
                </article>
                <div className={styles['divider']}/>
                <article className={styles['list']}>
                    <h2>Similar</h2>
                    <MediaList
                        medias={similar}
                    />
                </article>
            </section>            
        </main>
    )
}