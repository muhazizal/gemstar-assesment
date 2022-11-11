import MainNavigationItem from './MainNavigationItem'

export default function MainNavigation(props) {
	const { label, list } = props
	const listItems = list.map((item, index) => (
		<MainNavigationItem
			key={index}
			icon={item.icon}
			label={item.label}
		></MainNavigationItem>
	))
	return (
		<div>
			<span className='block text-[11px] tracking-[.16em] uppercase'>
				{label}
			</span>
			<ul className='mt-3 grid gap-y-[10px]'>{listItems}</ul>
		</div>
	)
}
