export default function MainFooter() {
	const footerStyle = {
		width: '',
	}
	return (
		<footer
			className='flex flex-auto flex-row justify-end items-center h-[65px] bg-[#F5F6FA] lg:ml-[295px] p-4 lg:p-8'
			style={footerStyle}
		>
			<span className='text-secondary text-sm md:text-base'>
				© Manning&Co. 2022
			</span>
		</footer>
	)
}
