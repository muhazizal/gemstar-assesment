import MainNavigationList from './MainNavigationList'

export default function MainNavigation(props) {
	const { label, list } = props
	return (
		<div>
			<span className='block text-[11px] tracking-[.16em] uppercase'>
				{label}
			</span>
			<MainNavigationList list={list}></MainNavigationList>
		</div>
	)
}
