import React from 'react';

const DynamicTable = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-gray-500 mt-4 text-center">No data to display.</p>;

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-blue-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-2 py-2 text-left font-semibold text-gray-800 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="px-2 py-2 text-gray-700">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
