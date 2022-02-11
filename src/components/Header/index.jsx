import { Link } from 'react-router-dom'
import capitalize from '../../utils/utils'
import styles from './header.module.css'

export default function Header({setMediaType}) {

	const buttons = ['movie', 'tv']
	return (
		<header className={styles['header']}>
			<section className={styles['header__section']}>
				<Link to='/' className={styles['header__section-logo']}>
					<h1 style={{margin:0}}>Movie App</h1>
				</Link>
				<div className={styles['header__section-buttons']}>
					{
						buttons.map(btn => (
							
							<button					
								key={buttons.indexOf(btn)}				
								className={styles['header__button']}
								onClick={() => setMediaType(btn)}
							>
								<Link to='/' className={styles['header__button-link']}>
									{capitalize(btn) + 's'}
								</Link>							
							</button>
						))
					}
				</div>
			</section>
		</header>
	)
}
