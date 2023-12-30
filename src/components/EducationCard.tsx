interface EducationCardProps {
	cardHeader: string
	cardImage: string
	cardContent: string
	urlToLearnMore: string
}
const EducationCard = ({
	cardHeader,
	cardContent,
	cardImage,
	urlToLearnMore,
}: EducationCardProps) => {
	return (
		<div className="space-y-6 flex flex-1 flex-col">
			<div className="flex-[0.6] bg-red-50 overflow-hidden">
				<img src={cardImage} alt="" className="object-cover w-full h-full"/>
			</div>
			<div className="space-y-5 flex-[0.4]">
				<h2 className="font-bold  text-2xl">{cardHeader}</h2>
				<p>{cardContent}</p>
				<div>
					<a href={urlToLearnMore} className="underline">
						Learn more
					</a>
				</div>
			</div>
		</div>
	)
}

export default EducationCard
