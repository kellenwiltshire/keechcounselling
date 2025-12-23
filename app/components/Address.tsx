import {
	BuildingOfficeIcon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo1 from '../../public/1.svg'

const Address = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
			<Image
				alt='Kaitlyn Keech Counselling Logo'
				src={logo1}
				loading='lazy'
				fetchPriority='low'
				height={300}
			/>
			<div className=''>
				<h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
					Contact Me
				</h2>
				<div className='mt-3'>
					<p className='text-lg text-gray-500'>
						Serving Kingston, Napanee, and the surrounding areas
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
								9 Commercial Court
								<br />
								Napanee, On
							</p>
						</div>
					</div>
					<div className='mt-6 flex'>
						<div className='shrink-0'>
							<PhoneIcon aria-hidden='true' className='size-6 text-gray-400' />
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
	)
}
export default Address
