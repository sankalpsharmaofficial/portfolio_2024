import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Archivo } from 'next/font/google';

// Variable on width as well as weight: headings use it fully expanded
const sans = Archivo({
	subsets: ['latin'],
	axes: ['wdth'],
	variable: '--font-sans',
	display: 'swap'
});

function MyApp({ Component, pageProps }) {
	return (
		<div className={`${sans.variable} font-sans`}>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
