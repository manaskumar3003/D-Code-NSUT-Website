export default function Table() {
    return (
        <div>
            <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Department</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Topic</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">level</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr>
              <td className="bg-blue-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-800">web Dev</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">React</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Link</button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">CPP</td>
              <td className="bg-orange-100 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-800">C++</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">4</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Link</button>
              </td>
            </tr>

            <tr>
              <td className="bg-red-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-800">AIML</td>
              <td className="bg-blue-100 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-800">into to AI</td>
              <td className="bg-blue-100 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-800">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}