type Props = { repoName: string; repoBio: string; repoLink: string };

function RepoCard({ repoName, repoBio, repoLink }: Props) {
	console.log(repoLink);
	return (
		<div className="w-64">
			<a
				href={repoLink}
				className="block cursor-pointer hover:scale-105 transition duration-500 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{repoName}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{repoBio || "N/A"}
				</p>
			</a>
		</div>
	);
}

export default RepoCard;
