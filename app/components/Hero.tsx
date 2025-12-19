'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logo1 from '../../public/1.svg'

const open_sans_bold = Open_Sans({
	weight: '700',
	subsets: ['latin'],
})

const navigation = [
	{ name: 'About', href: '#about' },
	{ name: 'Services', href: '#services' },
	{ name: 'Contact', href: '#contact' },
]
const Hero = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > window.innerHeight * 0.1)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<>
			<header className='absolute inset-x-0 top-0 z-50'>
				<nav
					aria-label='Global'
					className='fixed flex w-full items-center bg-[#c7bfbb] p-6 text-black md:relative lg:justify-center lg:px-8 lg:py-2'
				>
					<div className='flex w-full lg:hidden'>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(true)}
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
						>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon aria-hidden='true' className='size-6 text-[#372c2c]' />
						</button>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -20 }}
							transition={{ duration: 0.3 }}
							className={`grow text-center text-xl ${open_sans_bold.className} ${scrolled ? 'text-[#372c2c]' : 'text-transparent'}`}
						>
							Kaitlyn Keech Counselling
						</motion.div>
					</div>
					<div className='hidden w-full items-center justify-center lg:flex lg:gap-x-12'>
						<a href='#'>
							<Image
								alt='Kaitlyn Keech Counselling Logo'
								src={logo1}
								loading='eager'
								fetchPriority='high'
								className='h-12 w-12'
							/>
						</a>
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className='text-sm/6'>
								{item.name}
							</a>
						))}
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className='lg:hidden'
				>
					<div className='fixed inset-0 z-50' />
					<DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#c7bfbb] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
						<div className='flex items-center justify-end'>
							<button
								type='button'
								onClick={() => setMobileMenuOpen(false)}
								className='-m-2.5 rounded-md p-2.5 text-gray-400'
							>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon aria-hidden='true' className='size-6' />
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/25'>
								<div className='space-y-2 py-6'>
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											onClick={() => setMobileMenuOpen(false)}
											className='-mx-3 block rounded-lg px-3 py-2 text-base/7 text-black hover:bg-gray-800'
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
			<div className='mt-12 flex w-full justify-center'>
				<Image
					alt='Kaitlyn Keech Counselling Logo'
					loading='eager'
					fetchPriority='high'
					src='/2.svg'
					width={600}
					height={600}
				/>
			</div>
		</>
	)
}

export default Hero
