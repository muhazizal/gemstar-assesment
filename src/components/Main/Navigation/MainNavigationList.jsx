import MainNavigationItem from './MainNavigationItem'

export default function MainNavigationList(props) {
	const { list } = props
	const listItems = list.map((item, index) => (
		<MainNavigationItem
			key={index}
			icon={item.icon}
			label={item.label}
		></MainNavigationItem>
	))
	return <ul className='mt-3 grid gap-y-[10px]'>{listItems}</ul>
}
