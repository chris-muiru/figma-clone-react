import React from "react"

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
		<div className="space-y-6">
			<img src={cardImage} alt="" />
			<div className="space-y-5">
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
