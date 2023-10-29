import { useState } from "react"

const Faq = () => {
	const [toggleIconState, setToggleIconState] = useState<boolean>(false)

	const toggleNavIcon = () => {
		setToggleIconState((prevState) => !prevState)
	}
	return (
		<div className="text-xl font-bold">
			<div className="flex gap-2 ">
				<button className="" onClick={toggleNavIcon}>
					{toggleIconState ? (
						<img
							src="images/openNav.svg"
							alt=""
							className="text-white w-3 h-5"
						/>
					) : (
						<img
							src="images/closedNav.svg"
							alt=""
							className="text-white w-3 h-5"
						/>
					)}
				</button>
				<div className="relative w-10/12">
					<p>Who qualifies for the Education plan</p>
				</div>
			</div>
			<div className="text-sm font-normal mt-3">
				{toggleIconState && (
					<p className="px-10">
						Figma offers 2 ways of accessing our tools, depending on the
						age of your students.
						<br />
						1. Teachers and students over 13 years old can get started on
						their own by signing up for our free Education Plan at
						Figma.com/education/apply, verifying their education status,
						and creating an Education team. Review our step-by-step
						instructions here. This will give you free access to the Figma
						Professional tier. To qualify for the self-serve Education
						Plan, you must be
					</p>
				)}
			</div>
		</div>
	)
}

export default Faq
