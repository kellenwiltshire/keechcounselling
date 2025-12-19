/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const About = () => {
	return (
		<section id='about' className='relative overflow-hidden'>
			<div className='relative mx-auto max-w-7xl px-6 pt-0 md:py-8 lg:px-8'>
				<div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
					<div className='relative lg:col-start-2 lg:row-start-1'>
						<div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
							<figure>
								<img
									alt='Photo of Kaitlyn Keech'
									src='/kaitlynkeech.jpeg'
									width={1184}
									height={1376}
									className='w-full rounded-lg object-cover shadow-lg md:aspect-12/7 lg:aspect-auto'
								/>
							</figure>
						</div>
					</div>
					<div className='mt-8 lg:mt-0'>
						<div className='mx-auto flex h-full flex-col justify-center gap-8 text-base/7'>
							<div className='py-4 text-center'>
								<h3 className='mt-2 text-3xl/8 tracking-tight sm:text-4xl'>
									Kaitlyn Keech
								</h3>
								<div className='mt-1 text-gray-500'>
									Registered Psychotherapist (Qualifying), RSSW, MACP, BA Soc
								</div>
							</div>
							<p className='text-lg/7'>
								Having lived and worked in Kingston, Frontenac, Lennox, and
								Addington (KFL&A) my entire life, I have a deep understanding of
								our community’s unique challenges and strengths. With over nine
								years of experience in social work, I’ve had the privilege of
								witnessing the incredible resilience and potential within
								individuals, even in the face of adversity.
							</p>
							<p className='text-lg/7'>
								I am currently accepting new clients and would love the
								opportunity to get to know you and explore how I can provide
								support as you tackle life's challenges. Please email or call me
								to book a consultation or appointment. I look forward to the
								opportunity to work with you.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
