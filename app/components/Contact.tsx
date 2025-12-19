import Image from 'next/image'
import logo1 from '../../public/1.svg'
import {
	BuildingOfficeIcon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline'

const Contact = () => {
	const date = new Date().getFullYear()
	return (
		<footer id='contact' className='mt-12 w-full'>
			<div className='mx-auto max-w-7xl'>
				<div className='mx-auto text-center'>
					<hgroup>
						<p className='mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl'>
							Book your appointment with me
						</p>
					</hgroup>
					<p className='mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600'>
						I am available in person and virtually on Mondays and Wednesdays and
						in the evenings
					</p>
					<div className='mt-8 flex justify-center'>
						<a
							href='#'
							className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							JANE BOOKING BUTTON
						</a>
					</div>
				</div>
				<div className='mt-12 flex w-full flex-col items-center justify-center border-t border-gray-900/10 pt-12 md:flex-row xl:grid xl:grid-cols-2 xl:gap-8'>
					<Image
						alt='Kaitlyn Keech Counselling Logo'
						src={logo1}
						loading='lazy'
						fetchPriority='low'
					/>
					<div className='mt-12 sm:mt-16 md:mt-0'>
						<h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
							Contact Me
						</h2>
						<div className='mt-3'>
							<p className='text-lg text-gray-500'>
								Serving Kingston and Napanee
							</p>
						</div>
						<div className='mt-9'>
							<div className='flex items-center'>
								<div className='shrink-0'>
									<BuildingOfficeIcon
										aria-hidden='true'
										className='size-6 text-gray-400'
									/>
								</div>
								<div className='ml-3 text-base text-gray-500'>
									<p>
										Napanee Psycotherapy
										<br />
										Napanee, On
									</p>
								</div>
							</div>
							<div className='mt-6 flex'>
								<div className='shrink-0'>
									<PhoneIcon
										aria-hidden='true'
										className='size-6 text-gray-400'
									/>
								</div>
								<div className='ml-3 text-base text-gray-500'>
									<p>343 801 5776</p>
								</div>
							</div>
							<div className='mt-6 flex'>
								<div className='shrink-0'>
									<EnvelopeIcon
										aria-hidden='true'
										className='size-6 text-gray-400'
									/>
								</div>
								<div className='ml-3 text-base text-gray-500'>
									<a href='mailto:kaitlyn@keechcounselling.com'>
										kaitlyn@keechcounselling.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-12 flex justify-center border-t border-gray-900/10 pt-8'>
					<p className='pb-4 text-center text-sm/6 text-gray-600 md:order-1'>
						&copy; {date} Kaitlyn Keech Counselling Services. <br /> All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Contact
