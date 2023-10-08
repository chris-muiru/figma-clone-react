import React from "react"

const DashBoard = () => {
	return (
		<main className="mt-20">
			<section className="section">
				<div className="bg-red-200 w-11/12 m-auto">
					<img src="images/smily.webp" alt="a smilly face" />
				</div>
				<p className="font-bold uppercase mt-6">Figma for Education</p>
				<h2 className="text-4xl font-bold my-6">
					Free best-in class tools for the classroom
				</h2>
				<p className="leading-6 font-medium">
					Figma and FigJam are design and collaboration software used by
					professional designers, engineers, and makers of all kinds. Use
					them to ideate, create, and share work—all free, as a student or
					teacher.
				</p>
				<div className="flex justify-center my-7">
					<button className="text-white bg-black px-6 py-2 rounded-lg font-bold">
						Get Verified
					</button>
				</div>
			</section>

			<section className="bg-[#f0e3ff] section ">
				<div className="space-y-10">
					<h1 className="text-2xl font-semibold py-10">
						Tools for the classroom
					</h1>
					<div className="grid grid-cols-1 space-y-10">
						<div>
							<img src="images/tools.webp" alt="" />
						</div>
						<div>
							<h2 className="font-bold my-3 text-md">
								Explore ideas together with FigJam
							</h2>
							<p>
								FigJam is an online whiteboard where possibilities turn
								into plans. Teachers can facilitate collaborative group
								learning while encouraging active participation from
								students. It’s best suited for classroom discussions,
								brainstorms, and group work.
							</p>
						</div>
						<div>
							<img src="images/chess.webp" alt="" />
						</div>
						<div className="pb-10">
							<h2 className="font-bold my-3 text-md">
								Bring ideas to life with Figma
							</h2>
							<p>
								Figma is a multiplayer, intuitive design tool used by
								professionals. Create graphics, presentations,
								prototypes, and more—all with real-time collaboration
								and feedback. Figma and FigJam live side by side so that
								students can turn their ideas into reality, faster.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section mt-10">
				<div>
					<h2 className="font-bold  text-2xl">Bring learning to life</h2>
					<p className="my-5">
						Use industry-leading design tools to create a collaborative
						environment that helps students of all ages thrive in the
						classroom.
					</p>
				</div>
				<div>
					<div className="">
						<img src="images/draw.webp" alt="" />
						<div className="space-y-10">
							<h2 className="font-bold  text-2xl">K-12 educators</h2>
							<p>
								Get students excited about learning by empowering them
								to imagine and design together—all in a fun, interactive
								space.
							</p>
							<a href="">Learn more</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default DashBoard
