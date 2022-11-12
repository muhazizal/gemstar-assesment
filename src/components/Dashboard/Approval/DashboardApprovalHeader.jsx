import { TbPlus } from 'react-icons/tb'

import CoreButton from 'components/Core/CoreButton'

export default function DashboardApprovalHeader(props) {
	const { title, subtitle } = props
	return (
		<div className='flex flex-auto flex-col lg:flex-row lg:justify-between lg:items-center'>
			<div className='text-secondary mb-4 lg:mb-0'>
				<h2 className='font-bold text-xl'>{title}</h2>
				<span className='text-sm md:text-base'>{subtitle}</span>
			</div>
			<CoreButton
				rounded
				classButton='bg-primary text-white w-fit'
				label='Create new approval'
				classLabel='ml-2.5 font-bold'
				prependIcon={<TbPlus></TbPlus>}
			></CoreButton>
		</div>
	)
}
