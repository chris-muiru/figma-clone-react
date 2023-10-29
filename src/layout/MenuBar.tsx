import { FcMenu } from "react-icons/fc"
const MenuBar = () => {
	return (
		<section className="flex flex-row justify-between items-end h-12 mt-6 section">
			<div className="">
				<img src="images/logo.svg" className="w-full h-full" />
			</div>
			<div className="flex flex-row items-center space-x-4 h-full">
				<button className="bg-[#5551ff] text-white font-bold px-6 py-2 rounded-xl h-full">
					Get Started
				</button>
				<div className="">
					<FcMenu className="text-4xl" />
				</div>
			</div>
		</section>
	)
}

export default MenuBar
