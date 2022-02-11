import React from "react"
import styles from './castList.module.css'

export default function CastList({cast}) {

    return (
        <ul className={styles.list}>
            {
                cast.map(actor => (
                    actor.profile_path ?
                    <li className={styles.list__item} key={actor.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} 
                            alt=""
                        />
                        <div className={styles.list__item_name}>
                            <h4 >{actor.name}</h4>
                        </div>
                    </li>
                    : null
                ))
            }
        </ul>
    )
}