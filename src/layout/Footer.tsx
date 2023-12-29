import { FaInstagram, FaYoutube } from "react-icons/fa"
import { BiLogoTwitter } from "react-icons/bi"
import { AiFillFacebook } from "react-icons/ai"
import { TfiWorld } from "react-icons/tfi"

const Footer = () => {
	// statement to print hello world
	return (
		<footer className="grid w-full leading-10 gap-y-4 section sm:grid-cols-4 sm:col-span-4 gap-20 capitalize">
			<div className="flex justify-between sm:col-span-4 py-7">
				<h2 className="text-2xl font-semibold">Figma</h2>
				<div className="flex space-x-3">
					<div className="flex flex-row items-center space-x-2">
						<BiLogoTwitter className="text-2xl" />
						<h2 className="hidden sm:block">Twitter</h2>
					</div>
					<div className="flex flex-row items-center space-x-2">
						<FaYoutube className="text-2xl" />
						<h2 className="hidden sm:block">Youtube</h2>
					</div>
					<div className="flex flex-row items-center space-x-2">
						<FaInstagram className="text-2xl" />
						<h2 className="hidden sm:block">Instagram</h2>
					</div>
					<div className="flex flex-row items-center space-x-2">
						<AiFillFacebook className="text-2xl" />
						<h2 className="hidden sm:block">Facebook</h2>
					</div>
				</div>
			</div>
			<div className="min-w-full">
				<h2 className="font-bold">Use case</h2>
				<div className="grid grid-cols-2 w-full sm:grid-cols-1">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Team collaboration</p>
					<p>Agile workflows</p>
					<p>Strategic planning</p>
					<p>Templates</p>
					<p>Remote design</p>
					<p>Remote design</p>
					<p>Agencies</p>
					<p>Figma for education</p>
				</div>
			</div>
			<div className=" min-w-full">
				<h2 className="font-bold">Explore</h2>
				<div className="grid grid-cols-2 w-full sm:grid-cols-1">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Team collaboration</p>
					<p>Agile workflows</p>
					<p>Strategic planning</p>
					<p>Templates</p>
					<p>Remote design</p>
					<p>Remote design</p>
					<p>Agencies</p>
					<p>Figma for education</p>
					<p>Agencies</p>
					<p>Figma for education</p>
				</div>
			</div>
			<div className="min-w-full">
				<h2 className="font-bold">Resources</h2>
				<div className="grid grid-cols-2 w-full sm:grid-cols-1">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Agile workflows</p>
					<p>Strategic planning</p>
					<p>Templates</p>
					<p>Templates</p>
					<p>Templates</p>
					<p>Team collaboration</p>
					<p>Remote design</p>
					<p>Remote design</p>
					<p>Remote design</p>
				</div>
			</div>
			<div className="min-w-full">
				<h2 className="font-bold">Compare</h2>
				<div className="grid grid-cols-2 w-full sm:grid-cols-1">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Online whiteboard</p>
				</div>
			</div>

			<div className="flex items-center space-x-3  sm:hidden">
				<TfiWorld className="text-2xl" />
				<h2 className="text-bold">English</h2>
			</div>
		</footer>
	)
}

export default Footer
