import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Services from './components/Services'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full max-w-7xl flex-col items-center justify-between p-16 sm:items-start'>
			<Hero />
			<About />
			<Testimonial />
			<Services />
		</main>
	)
}
