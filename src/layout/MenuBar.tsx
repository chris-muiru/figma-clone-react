import { FcMenu } from "react-icons/fc"
import figmaLogo from "@/assets/images/logo.svg"
import { TiArrowSortedDown } from "react-icons/ti"
const MenuBar = () => {
	const menuLinks: string[] = [
		"Products",
		"Enterprise",
		"Pricing",
		"Resources",
		"Community",
		"Contact Sales",
	]
	return (
		<section className="flex flex-row justify-between items-end h-12 mt-6 section xl:px-[6rem]">
			<div className="">
				<img src={figmaLogo} className="w-[2rem] h-[3rem]" />
			</div>
			<div className="flex flex-row items-center space-x-4 h-full">
				{/* For large screens */}
				<div className="hidden xl:flex xl:space-x-6">
					{menuLinks.map((link, key) => {
						return (
							<div className="flex items-center" key={key}>
								<h2>{link}</h2>
								<TiArrowSortedDown />
							</div>
						)
					})}
					<div>Login</div>
				</div>

				{/* for small screens */}
				<div className="flex space-x-3 xl:hidden">
					<button className="bg-[#5551ff] text-white font-bold px-6 py-2 rounded-xl h-full">
						Get Started
					</button>
					<div className="">
						<FcMenu className="text-4xl" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default MenuBar
