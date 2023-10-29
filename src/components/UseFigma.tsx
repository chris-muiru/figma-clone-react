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
		<div className="space-y-6 flex flex-col flex-1">
			<div className="">
				<img src={cardImage} alt="" className=""/>
			</div>
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
