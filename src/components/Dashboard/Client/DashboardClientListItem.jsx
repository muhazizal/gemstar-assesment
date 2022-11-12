import CoreButton from 'components/Core/CoreButton'
import { TbDots } from 'react-icons/tb'

export default function DashboardClientListItem(props) {
	const { name, description, logo, classLogo } = props.client
	const classNameLogo = `${classLogo} flex flex-auto flex-col justify-center`
	const handleClickMenu = (evt) => {
		// click menu
	}
	return (
		<div className='bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)] rounded-[5px] p-4 max-w-[259px] relative'>
			<CoreButton
				classButton='absolute top-2.5 right-2.5'
				prependIcon={<TbDots className='text-secondary'></TbDots>}
				onClick={handleClickMenu}
			></CoreButton>
			<div className={classNameLogo}>
				<img src={logo} alt={`${name} Logo`}></img>
			</div>
			<div className='mt-2 text-secondary'>
				<h3 className='font-bold mb-1.5'>{name}</h3>
				<p className='text-[11px]'>{description}</p>
			</div>
		</div>
	)
}
