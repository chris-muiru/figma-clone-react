import React from "react"
interface UseFigmaInterface {
	cardImage: string
	cardHeader: string
	cardContent: string
	cardLink: string
}
const UseFigma = ({
	cardImage,
	cardHeader,
	cardLink,
	cardContent,
}: UseFigmaInterface) => {
	return (
		<div className="space-y-6">
			<img src={cardImage} alt="" />
			<div className="space-y-5">
				<h2 className="font-bold  text-2xl">{cardHeader}</h2>
				<p>
					{cardContent}
					&nbsp;
					<a href={cardLink} className="underline">
						here
					</a>
				</p>
			</div>
		</div>
	)
}

export default UseFigma
