import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
	const title = 'The jungle home'
	return (
		<div className='lmj-banner'>
			<img src={logo} alt='The jungle home' className='lmj-logo' />
			<h1 className='lmj-title'>{title}</h1>
		</div>
	)
}

export default Banner