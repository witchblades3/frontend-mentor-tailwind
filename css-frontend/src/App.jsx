import { IconMenuClose } from "./assets/images/icon-menu-close";
import { IconMenu } from "./assets/images/icon-menu";
function App() {
	return (
		<>
			<header className="container h-max mx-auto flex items-center px-5 py-10 font-inter sm:px-0">
				<img
					src="../src/assets/images/logo.svg"
					className="mr-auto"
					alt="logo"
				/>
				<button className="md:hidden">
					<IconMenu />
				</button>
				<nav className="hidden list-none gap-10 md:flex text-secondary-darkGrayishBlue text-base">
					<button className="hidden">
						<IconMenuClose />
					</button>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">New</a>
					</li>
					<li>
						<a href="">Popular</a>
					</li>
					<li>
						<a href="">Trending</a>
					</li>
					<li>
						<a href="">Categories</a>
					</li>
				</nav>
			</header>
			<main className="container mx-auto px-5 font-inter sm:px-0">
				<div className="md:flex flex-row gap-5 place-items-start sm:block">
					<div className="grid-rows-2 md:gap-y-0 lg:grid">
						<img
							className="col-span-2 py-6"
							src="../src/assets/images/image-web-3-desktop.jpg"
							alt=""
						/>
						<h1 className="text-6xl font-bold md:text-7xl lg:py-0">
							The Bright Future of Web 3.0?
						</h1>
						<div className="flex h-48 flex-col justify-between py-2 sm:h-36 md:h-56 lg:py-0">
							<p className="text-secondary-darkGrayishBlue text-base">
								We dive into the next evolution of the web that claims to put
								the power of the platforms back into the hands of the people.
								But is it really fulfilling its promise?
							</p>
							<button className="h-30 w-3/5 bg-red-400 p-5 text-center text-base font-extrabold uppercase tracking-widest">
								Read more
							</button>
						</div>
					</div>
					<div className="-mt-8">
                        <div className="bg-secondary-veryDarkBlue my-14 divide-y p-5"> {/* Aqui */}
                            <div>
                                <h2 className="pb-5 text-3xl font-bold text-primary-softOrange">
                                    New
                                </h2>
                                <h3 className="pt-6 text-lg font-bold text-white">
                                    Hydrogen VS Electric Cars
                                </h3>
                                <p className="text-secondary-grayishBlue pb-10 pt-2 text-base">
                                    Will hydrogen-fueled cars ever catch up to EVs?
                                </p>
                            </div>
                            <div>
                                <h3 className="pt-6 text-lg font-bold text-white">
                                    The Downsides of AI Artistry
                                </h3>
                                <p className="text-secondary-grayishBlue pb-10 pt-2 text-base">
                                    WWhat are the possible adverse effects of on-demand AI image
                                    generation?
                                </p>
                            </div>
                            <div>
                                <h3 className="pt-6 text-lg font-bold text-white">
                                    Is VC Funding Drying Up?
                                </h3>
                                <p className="text-secondary-grayishBlue pb-10 pt-2 text-base">
                                    Private funding by VC firms is down 50% YOY. We take a look at
                                    what that means.
                                </p>
                            </div>
                        </div>
                    </div>
				</div>
                <div className="font-inter block lg:flex  mt-0 xl:-mt-32">
					<div className="flex pb-10">
						<img
							className="mr-5 w-24"
							src="../src/assets/images/image-retro-pcs.jpg"
							alt=""
						/>
						<div>
							<h2 className="text-[30px] text-xl font-bold text-primary-softRed">
								01
							</h2>
							<h3 className="text-secondary-veryDarkBlue py-2 font-extrabold">
								Reviving Retro PCs
							</h3>
							<p className="text-secondary-darkGrayishBlue text-base">
								What happens when old PCs are given modern upgrades?
							</p>
						</div>
					</div>
					<div className="flex pb-10">
						<img
							className="mr-5 w-24"
							src="../src/assets/images/image-top-laptops.jpg"
							alt=""
						/>
						<div>
							<h2 className="text-[30px] text-xl font-bold text-primary-softRed">
								02
							</h2>
							<h3 className="text-secondary-veryDarkBlue py-2 font-extrabold">
								Reviving Retro PCs
							</h3>

							<p className="text-secondary-darkGrayishBlue text-base">
								Our best picks for various needs and budgets.
							</p>
						</div>
					</div>
					<div className="flex pb-10">
						<img
							className="mr-5 w-24"
							src="../src/assets/images/image-gaming-growth.jpg"
							alt=""
						/>
						<div>
							<h2 className="text-[30px] text-xl font-bold text-primary-softRed">
								03
							</h2>
							<h3 className="text-secondary-veryDarkBlue py-2 font-extrabold">
								Reviving Retro PCs
							</h3>

							<p className="text-secondary-darkGrayishBlue text-base">
								How the pandemic has sparked fresh opportunities.
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
