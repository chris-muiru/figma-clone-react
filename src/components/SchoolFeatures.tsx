import { twMerge } from "tailwind-merge"

interface SchoolFeatureProps {
	cardHeader: string
	cardExt: string
	cardContent: string
	cardImage: string
	cardExtStyles?: string
}
const SchoolFeatures = ({
	cardHeader,
	cardExt,
	cardExtStyles,
	cardContent,
	cardImage,
}: SchoolFeatureProps) => {
	return (
		<div className="flex flex-1 flex-col xl:w-[35rem]">
			<div className="flex-[0.6] overflow-hidden bg-red-200">
				<img
					src={cardImage}
					alt=""
					className="sm:h-[15rem] sm:w-full object-cover xl:h-[30rem]"
				/>
			</div>
			<div className="space-y-5 flex-[0.4]">
				<button
					className={twMerge(
						`bg-[#a259ff] font-bold px-3 py-2 my-2 rounded-md ${cardExtStyles}`
					)}
				>
					{cardExt}
				</button>
				<h2 className="font-bold text-xl">{cardHeader}</h2>
				<div className="text-semibold">{cardContent}</div>
			</div>
		</div>
	)
}

export default SchoolFeatures
