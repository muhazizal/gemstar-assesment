export default function MainNavigationItem(props) {
	const { icon, label } = props
	return (
		<li className='text-secondary flex flex-auto flex-row items-center cursor-pointer w-fit'>
			<span className='mr-3'>{icon}</span>
			<span className='font-bold'>{label}</span>
		</li>
	)
}
