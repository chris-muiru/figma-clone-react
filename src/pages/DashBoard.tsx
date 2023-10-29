import EducationCard from "../components/EducationCard"
import SchoolFeatures from "../components/SchoolFeatures"
import UseFigma from "../components/UseFigma"
import Faq from "../components/Faq"

const DashBoard = () => {
	return (
		<main className="mt-20">
			<section className="section flex flex-1 flex-col sm:flex-row sm:gap-10 sm:items-baseline sm:section-sm">
				<div
					className="m-auto sm:order-2 flex justify-center"
					style={{ flex: 0.6 }}
				>
					<img
						src="images/smily.webp"
						alt="a smilly face"
						className="sm:w-[70%]"
					/>
				</div>
				<div style={{ flex: 0.4 }}>
					<p className="font-bold uppercase mt-6">Figma for Education</p>
					<h2 className="text-4xl font-bold my-6 sm:text-5xl sm:leading-snug">
						Free best-in-class tools for the classroom
					</h2>
					<p className="leading-6 font-medium">
						Figma and FigJam are design and collaboration software used by
						professional designers, engineers, and makers of all kinds.
						Use them to ideate, create, and share work—all free, as a
						student or teacher.
					</p>
					<div className="flex justify-center my-7 sm:justify-start">
						<button className="text-white bg-black px-6 py-2 rounded-lg font-bold">
							Get Verified
						</button>
					</div>
				</div>
			</section>

			<section className="bg-[#f0e3ff] section sm:section-sm">
				<div className="space-y-10">
					<h1 className="text-2xl font-semibold py-10 sm:text-3xl">
						Tools for the classroom
					</h1>
					<div className="flex flex-col space-y-10">
						<div className="flex flex-1 flex-col sm:flex-row gap-10 items-center">
							<div className="sm:flex-[0.7]">
								<img
									src="images/tools.webp"
									alt=""
									className="sm:h-[16rem] sm:w-[90%] object-cover"
								/>
							</div>
							<div className="sm:flex-[0.3]">
								<h2 className="font-bold my-3 text-lg">
									Explore ideas together with FigJam
								</h2>
								<p>
									FigJam is an online whiteboard where possibilities
									turn into plans. Teachers can facilitate
									collaborative group learning while encouraging active
									participation from students. It’s best suited for
									classroom discussions, brainstorms, and group work.
								</p>
							</div>
						</div>
						<div className="flex flex-1 flex-col sm:flex-row gap-10 items-center">
							<div className="sm:flex-[0.7]  sm:order-2">
								<img
									src="images/chess.webp"
									alt=""
									className="sm:h-[16rem] sm:w-[90%] object-cover"
								/>
							</div>
							<div className="sm:flex-[0.3] sm:order-1">
								<h2 className="font-bold my-3 text-md">
									Bring ideas to life with Figma
								</h2>
								<p>
									Figma is a multiplayer, intuitive design tool used by
									professionals. Create graphics, presentations,
									prototypes, and more—all with real-time collaboration
									and feedback. Figma and FigJam live side by side so
									that students can turn their ideas into reality,
									faster.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section mt-10 sm:section-sm">
				<div className="sm:w-2/3 sm:text-lg">
					<h2 className="font-bold  text-2xl">Bring learning to life</h2>
					<p className="my-5">
						Use industry-leading design tools to create a collaborative
						environment that helps students of all ages thrive in the
						classroom.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row gap-10">
					<EducationCard
						cardContent="Get students excited about learning by empowering them
                to imagine and design together—all in a fun, interactive
                space."
						cardHeader="K-12 educators"
						cardImage="images/draw.webp"
						urlToLearnMore=""
					/>
					<EducationCard
						cardContent="Get students excited about learning by empowering them
                to imagine and design together—all in a fun, interactive
                space."
						cardHeader="Higher Education Faculty"
						cardImage="images/draw.webp"
						urlToLearnMore=""
					/>
					<EducationCard
						cardContent="Get students excited about learning by empowering them
                to imagine and design together—all in a fun, interactive
                space."
						cardHeader="Student"
						cardImage="images/shadow.webp"
						urlToLearnMore=""
					/>
				</div>
			</section>
			<section className="bg-[#f5f5f5] section py-6 sm:section-sm">
				<h2 className="text-2xl font-semibold py-10">
					New-school features from every grade level
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					<SchoolFeatures
						cardContent="Brainstorm group ideas with your class using sticky notes, stamps, images, videos, and more."
						cardExt="FIGJAM"
						cardHeader="Level up lessons"
						cardImage="images/draw.webp"
					/>
					<SchoolFeatures
						cardContent="Encourage a new way for students to collaborate in real time with audio chat, cursor chat, voting, and comments."
						cardExt="FIGJAM"
						cardHeader="Share with the class"
						cardImage="images/tools.webp"
					/>
					<SchoolFeatures
						cardContent="Brainstorm group ideas with your class using sticky notes, stamps, images, videos, and more."
						cardExt="FIGJAM"
						cardExtStyles="bg-[#ff7575]"
						cardHeader="Level up lessons"
						cardImage="images/shadow.webp"
					/>
					<SchoolFeatures
						cardContent="Brainstorm group ideas with your class using sticky notes, stamps, images, videos, and more."
						cardExt="FIGJAM"
						cardExtStyles="bg-[#ff7575]"
						cardHeader="Learn from the pros"
						cardImage="images/shadow.webp"
					/>
				</div>
			</section>
			<section className="bg-[#F0E3FF] section py-6">
				<h2 className="font-bold my-3 text-2xl px-14 py-2">
					Start using Figma with your class
				</h2>
				<div className="flex flex-col sm:flex-row gap-10">
					<UseFigma
						cardContent="Use your student or teacher email address to sign up for Figma"
						cardHeader="1. Create an account"
						cardImage="images/wow.webp"
						cardLink=""
					/>
					<UseFigma
						cardContent="Once you’ve created your Figma account, verify that you are a student or educator by clickin"
						cardHeader="2. Get verified"
						cardImage="images/wow.webp"
						cardLink=""
					/>
					<UseFigma
						cardContent="Create, upgrade, or join an existing team to start collaborating and get access to all professional paid tools."
						cardHeader="3. Create an account"
						cardImage="images/wow.webp"
						cardLink=""
					/>
				</div>
			</section>
			<section className="section py-7 space-y-10 flex flex-col sm:flex-row flex-1 items-center">
				<div className=" flex-[0.4] flex flex-col gap-10 sm:text-xl">
					<h2 className="font-semibold ">
						Bring Figma and FigJam to your entire school district
					</h2>
					<p>
						Figma and Google are teaming up to help students transform
						ideas into reality by bringing Figma and FigJam to Chromebooks
						in the US—for free.
					</p>
					<button className="bg-black text-white px-8 py-2 rounded-xl font-bold sm:w-[13rem]">
						Learn more
					</button>
				</div>
				<div className="flex-[0.6] ">
					<img src="images/hand.webp" alt="" className="w-[23rem]" />
				</div>
			</section>

			<section className="section bg-black text-white py-10">
				<h2 className="text-center text-2xl font-semibold sm:my-8 sm:text-4xl">
					Education plan FAQ
				</h2>

				<div className="flex flex-col gap-y-5 mt-3">
					<Faq />
					<hr />
					<Faq />
					<hr />
					<Faq />
					<hr />
					<Faq />
					<hr />
					<Faq />
				</div>
			</section>
			<section className="section bg-[#F5F5F5] ">
				<div className=" flex flex-col items-center py-10 space-y-6 mx-6">
					<h2 className="font-bold text-center text-xl">
						Improve your Figma skills and connect with other educators and
						students
					</h2>
					<button className="bg-black py-2 px-4 rounded-lg text-white font-semibold ">
						Sign up for a Figma workshop
					</button>
				</div>
			</section>
			<footer></footer>
		</main>
	)
}

export default DashBoard
