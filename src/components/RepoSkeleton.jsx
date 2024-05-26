
const RepoSkeleton = ({ count = 3 }) => (
  <div
    role="status"
    className="w-full space-y-4 animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
  >
    {[...Array(count).keys()].map((i) => (
      <div
        key={i}
        className="flex items-center justify-between border border-gray-200 rounded shadow p-4"
      >
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
    ))}
  </div>
)

export default RepoSkeleton