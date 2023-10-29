import { FaInstagram, FaYoutube } from "react-icons/fa"
import { BiLogoTwitter } from "react-icons/bi"
import { AiFillFacebook } from "react-icons/ai"
import { TfiWorld } from "react-icons/tfi"

const Footer = () => {
	// statement to print hello world
	return (
		<footer className="grid w-full leading-10 gap-y-4 section">
			<div className="flex justify-between">
				<h2 className="text-2xl font-semibold">Figma</h2>
				<div className="flex space-x-3">
					<BiLogoTwitter className="text-2xl" />
					<FaYoutube className="text-2xl" />
					<FaInstagram className="text-2xl" />
					<AiFillFacebook className="text-2xl" />
				</div>
			</div>
			<div className="min-w-full">
				<h2 className="font-bold">Use case</h2>
				<div className="grid grid-cols-2 w-full">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Online whiteboard</p>
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
				<div className="grid grid-cols-2 w-full">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Online whiteboard</p>
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
				<div className="grid grid-cols-2 w-full">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Online whiteboard</p>
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
				<div className="grid grid-cols-2 w-full">
					<p>Wireframing</p>
					<p>Diagramming</p>
					<p>Brainstorming</p>
					<p>Online whiteboard</p>
				</div>
			</div>

			<div className="flex items-center space-x-3">
				<TfiWorld className="text-2xl" />
				<h2 className="text-bold">English</h2>
			</div>
		</footer>
	)
}

export default Footer
