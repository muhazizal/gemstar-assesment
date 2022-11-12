export default function MainFooter() {
	const footerStyle = {
		width: '',
	}
	return (
		<footer
			className='flex flex-auto flex-row justify-end items-center h-[65px] bg-[#F5F6FA] ml-[295px] p-8'
			style={footerStyle}
		>
			<span className='text-secondary'>© Manning&Co. 2022</span>
		</footer>
	)
}
