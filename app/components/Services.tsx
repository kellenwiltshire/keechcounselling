import { UserIcon } from '@heroicons/react/24/outline'

const Services = () => {
	return (
		<section id='services'>
			<div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
				<div className='mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2'>
					<div className='flex p-px lg:col-span-4'>
						<div className='w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl'>
							<div className='p-10'>
								<h3 className='text-xl font-semibold'>
									Specialties and Expertise
								</h3>
								<p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
									Top Specialties
								</p>
								<ul className='list-disc columns-1 space-y-2 py-2 md:columns-3'>
									<li>Infertility</li>
									<li>Anxiety</li>
									<li>Coping Skills</li>
								</ul>
								<p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
									Expertise
								</p>
								<ul className='list-disc columns-2 space-y-2 md:columns-3'>
									<li>ADHD</li>
									<li>Body Image</li>
									<li>Depression</li>
									<li>Emotional Disturbance</li>
									<li>Family Conflict</li>
									<li>First Responders</li>
									<li>Grief</li>
									<li>Life Coaching</li>
									<li>Life Transitions</li>

									<li>Mood Disorders</li>
									<li>Peer Relationships</li>
									<li>Pregnancy, Prenatal, Postpartum</li>
									<li>Relationship Issues</li>
									<li>School Issues</li>
									<li>Self Esteem</li>
									<li>Stress</li>
									<li>Trauma and PTSD</li>
									<li>Women's Issues</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='flex p-px lg:col-span-2'>
						<div className='w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl'>
							<div className='p-10'>
								<h3 className='text-xl font-semibold'>Finances</h3>
								<p className='mt-2 max-w-lg text-sm/6 text-gray-600'>Fees</p>
								<p className='mt-2 max-w-lg'>Individual Sessions $130</p>
								<p className='mt-2 max-w-lg'>Couple Sessions $160</p>
								<p className='mt-2 max-w-lg'>
									Sliding Scale: apply if you may be eligible
								</p>
								<p className='mt-2 max-w-lg italic'>
									My goal is to make therapy as accessible as possible, we can
									discuss payment options prior to your first session. I can
									provide you with a receipt for reimbursement through your
									insurance provider after our session.
								</p>
							</div>
						</div>
					</div>
					<div className='flex p-px lg:col-span-2'>
						<div className='w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl'>
							<div className='p-10'>
								<h3 className='text-xl font-semibold'>Client Focus</h3>
								<ul className='mt-4 max-w-lg space-y-4'>
									<li>Preteen, Teen, Adults, Elders (65+)</li>
									<li>Individuals, Couples</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='flex p-px lg:col-span-4'>
						<div className='w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl'>
							<div className='p-10'>
								<h3 className='text-xl font-semibold'>Treatment Approach</h3>
								<p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
									Types of Therapy
								</p>
								<p className='mt-2 max-w-lg'>
									<ul className='grid list-disc grid-cols-2 gap-x-6 gap-y-2 pl-5'>
										<li>Cognitive Behavioural (CBT)</li>
										<li>Dialectical Behavior (DBT)</li>
										<li>Emotionally Focused</li>
										<li>Mindfulness-Based (MBCT)</li>
										<li>Person-Centered</li>

										<li>Psychodynamic</li>
										<li>Solution Focused Brief (SFBT)</li>
										<li>Strength-Based</li>
										<li>Trauma Based</li>
									</ul>
								</p>
								<p className='mt-2 max-w-lg italic'>
									I utilize a client-centered, trauma-informed approach in my
									therapy practice, tailoring treatment to each individual's
									unique needs. Drawing from evidence-based modalities such as
									CBT, DBT and EFT, I prioritize creating a safe, collaborative
									environment that fosters trust, empowerment, and healing at
									each client's own pace.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
