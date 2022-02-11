import React from "react"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft, FiHome } from "react-icons/fi"
import styles from './notfound.module.css'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <main className={styles['main']}>
            <h1>404 - Not Found</h1>
            <div className={styles['main__buttons']}>
                <button className={styles['main__buttons-btn']} onClick={() => navigate(-1)}>
                    <FiArrowLeft size={20} className={styles['main__buttons-icon']}/>{' '}
                    Click here to go back to the previous page.
                </button>
                <button className={styles['main__buttons-btn']} onClick={() => navigate('/')}>
                    <FiHome size={20} className={styles['main__buttons-icon']}/>{' '}
                    Click here to go Home.
                </button>
            </div>
        </main>
    )
}