import { Link } from 'react-router-dom'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<section className={styles['footer__section']}>
				<Link to='/' className={styles['footer__section-logo']}>
					<h1>Movie App</h1>
				</Link>
				<a href='https://www.themoviedb.org' className={styles['footer__section-TMDBlink']}>
					<p style={{display:'none'}}>Link to The MovieDB website.</p>
					<img 
						className={styles['footer__section-TMDBlogo']}
						src="https://camo.githubusercontent.com/3473ad272177937efdaea24da61c7a9204540ef4a3eccace1fed89403805191c/68747470733a2f2f7777772e7468656d6f76696564622e6f72672f6173736574732f322f76342f6c6f676f732f343038783136312d706f77657265642d62792d72656374616e676c652d677265656e2d626234333031633130646463373439623465373934363338313161363861666562656165363665663433643137626366643866663065363064656437636539392e706e67" 
						alt="The Movie DB Logo" 
					/>
				</a>
			</section>
		</footer>
	)
}
