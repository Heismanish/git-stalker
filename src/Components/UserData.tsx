import { RepoInterface, UserDataInterface } from "../App";
import RepoCard from "./RepoCard";

interface UserDataProps {
	userInfo: UserDataInterface | null;
	repos: RepoInterface[] | null;
}

function UserData(props: UserDataProps) {
	return (
		<div>
			<header className="m-8 flex sm:flex-row flex-col gap-12 justify-center items-center">
				<img
					className="rounded-full w-32 h-32 border border-gray-200"
					src={
						props.userInfo?.avatar ||
						"https://as2.ftcdn.net/v2/jpg/03/46/93/61/1000_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
					} // Added optional chaining
					alt="Extra large avatar"
				/>
				<div className="flex flex-col gap-4 py-2  text-center sm:text-left sm:ml-4  ">
					<div>
						<h2 className="cursor-pointer font-medium text-gray-800 white dark:text-gray-100 text-2xl mb-1 ">
							<a href={props.userInfo?.githubLink}>
								{props.userInfo?.name || "Name"}
							</a>
						</h2>
						<p className="font-medium text-gray-600 dark:text-gray-300">
							{props.userInfo?.bio || "Bio"}
						</p>
					</div>
					<div className="flex flex-wrap justify-center sm:justify-start gap-2">
						<a className="font-semibold dark:text-gray-100 text-gray-700 dark:decoration-slate-700 decoration-slate-200 py-2 px-4 dark:bg-gray-900 bg-gray-200 rounded-xl">
							followers:
							<span className="font-medium ">
								{props.userInfo?.followers || "N/A"}
							</span>
						</a>
						<a className="font-semibold dark:text-gray-100 text-gray-700 dark:decoration-slate-700 decoration-slate-200 py-2 px-4 dark:bg-gray-900 bg-gray-200 rounded-xl">
							following:
							<span className="font-medium ">
								{props.userInfo?.following || "N/A"}
							</span>
						</a>
						<a className="font-semibold dark:text-gray-100 text-gray-700 dark:decoration-slate-700 decoration-slate-200 py-2 px-4 dark:bg-gray-900 bg-gray-200 rounded-xl">
							public_repo:
							<span className="font-medium ">
								{props.userInfo?.repoCount || "N/A"}
							</span>
						</a>
						<a className="font-semibold dark:text-gray-100 text-gray-700 dark:decoration-slate-700 decoration-slate-200 py-2 px-4 dark:bg-gray-900 bg-gray-200 rounded-xl">
							public_gists:
							<span className="font-medium ">
								{props.userInfo?.gistCount || "N/A"}
							</span>
						</a>
					</div>
				</div>
			</header>

			<div className="flex flex-wrap justify-around gap-2 mb-4">
				{props.repos?.map((r) => {
					console.log(r.repoLink);
					return (
						<RepoCard
							key={r.name}
							repoName={r.name}
							repoBio={r.description}
							repoLink={r.repoLink}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default UserData;
