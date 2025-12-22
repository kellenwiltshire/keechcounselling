import Address from './Address'
import Form from './Form'

const Contact = () => {
	const date = new Date().getFullYear()
	return (
		<footer id='contact' className='mt-12 w-full'>
			<div className='mx-auto max-w-7xl'>
				<div className='mx-auto text-center'>
					<hgroup>
						<p className='mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl'>
							Get in touch with me
						</p>
					</hgroup>
					<p className='mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600'>
						I am available in person and virtually on Mondays and Wednesdays and
						in the evenings
					</p>
				</div>
				<div className='mt-12 flex w-full flex-col items-center justify-center border-t border-gray-900/10 pt-12 xl:grid xl:grid-cols-2 xl:gap-8'>
					<Address />
					<Form />
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
