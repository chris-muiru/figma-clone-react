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
		<div>
			<img src={cardImage} alt="" className="my-6" />
			<div className="space-y-5">
				<button
					className={twMerge(
						`bg-[#a259ff] font-bold px-3 py-1 rounded-md ${cardExtStyles}`
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
