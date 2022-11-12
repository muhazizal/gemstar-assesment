import { TbPlus } from 'react-icons/tb'

import CoreButton from 'components/Core/CoreButton'

export default function DashboardApprovalHeader(props) {
	const { title, subtitle } = props
	return (
		<div className='flex flex-auto flex-row justify-between items-center'>
			<div className='text-secondary'>
				<h2 className='font-bold text-xl'>{title}</h2>
				<span>{subtitle}</span>
			</div>
			<CoreButton
				rounded
				classButton='bg-primary text-white'
				label='Create new approval'
				classLabel='ml-2.5 font-bold'
				prependIcon={<TbPlus></TbPlus>}
			></CoreButton>
		</div>
	)
}
