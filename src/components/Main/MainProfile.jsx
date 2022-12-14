import ownerAvatar from '../../assets/images/avatar/owner-avatar.png'

export default function MainProfile() {
	const fullname = 'Radhika Dhawan Puri'
	const occupation = 'Senior Client Services'
	return (
		<div>
			<img className='max-w-[66px]' src={ownerAvatar} alt='Profile'></img>
			<div className='text-secondary'>
				<span className='block font-bold mt-3'>{fullname}</span>
				<span className='text-sm'>{occupation}</span>
			</div>
		</div>
	)
}
