import React from "react"
import { Link } from "react-router-dom"
import styles from './mediaList.module.css'

export default function MediaList({medias}) {    
    return (
        <ul className={styles['list']}>
            {
                medias.map(media => (
                    media.poster_path ?
                    <Link
                        key={media.id}
                        className={styles['list__link']}
                        to={{
                            pathname: `/media/${media.media_type}/${media.id}`
                        }}
                    >
                        <li className={styles['list__item']}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w342${media.poster_path}`} 
                                alt={`${media.title || media.name} poster`}
                                className={styles['list__item-poster']}
                            />
                            <div className={styles['list__item-title']}>
                                <h3>{media.title || media.name}</h3>
                            </div>
                        </li>
                    </Link>
                    : null
                ))
            }
            <Link
                className={styles['list__link-seeMore']}
                to='/notfound'
            >
                <li className={styles['list__item-seeMore']}>See more...</li>
            </Link>
        </ul>
    )
}