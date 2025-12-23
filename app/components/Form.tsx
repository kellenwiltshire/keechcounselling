'use client'

import { useForm } from '@formspree/react'

const Form = () => {
	const [state, handleSubmit] = useForm('xjgbjnon')
	return (
		<div>
			{state.succeeded ? (
				<div className='my-10 flex h-150 w-full justify-center'>
					<p>Thank you for contacting, I will reach out to you shortly!</p>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='first-name'
									className='block text-sm/6 text-gray-900'
								>
									First name
								</label>
								<div className='mt-2.5'>
									<input
										id='first-name'
										name='first-name'
										type='text'
										autoComplete='given-name'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='last-name'
									className='block text-sm/6 text-gray-900'
								>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										id='last-name'
										name='last-name'
										type='text'
										autoComplete='family-name'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm/6 text-gray-900'
								>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='phone-number'
									className='block text-sm/6 text-gray-900'
								>
									Phone number
								</label>
								<div className='mt-2.5'>
									<input
										id='phone-number'
										name='phone-number'
										type='tel'
										autoComplete='tel'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm/6 text-gray-900'
								>
									Reason for reaching out
								</label>
								<div className='mt-2.5'>
									<textarea
										id='message'
										name='message'
										rows={4}
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className='mt-8 flex justify-end'>
							<button
								type='submit'
								className='cursor-pointer rounded-md bg-[#383228] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#383228]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#383228]'
							>
								Send message
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	)
}

export default Form
