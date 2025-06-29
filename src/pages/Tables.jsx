import React, { useState, useEffect } from 'react';
import FileUploader from '../components/FileUploader';
import DynamicTable from '../components/DynamicTable';

const Tables = () => {
  const [data, setData] = useState([]);
  const initialFormState = {
    ID: "",
    Warehouse_block: "",
    Mode_of_Shipment: "",
    Customer_care_calls: "",
    Customer_rating: "",
    Cost_of_the_Product: "",
    Prior_purchases: "",
    Product_importance: "",
    Gender: "",
    Discount_offered: "",
    Weight_in_gms: "",
    Reached_on_Time_Y_N: ""
  };

  // Add static data in tables
  const staticEntries = [
    {
      id: 1,
      ID: "1001",
      Warehouse_block: "A",
      Mode_of_Shipment: "Road",
      Customer_care_calls: "2",
      Customer_rating: "4",
      Cost_of_the_Product: "250",
      Prior_purchases: "1",
      Product_importance: "high",
      Gender: "M",
      Discount_offered: "10",
      Weight_in_gms: "500",
      Reached_on_Time_Y_N: "Yes"
    },
    {
      id: 2,
      ID: "1002",
      Warehouse_block: "B",
      Mode_of_Shipment: "Ship",
      Customer_care_calls: "1",
      Customer_rating: "5",
      Cost_of_the_Product: "400",
      Prior_purchases: "0",
      Product_importance: "medium",
      Gender: "F",
      Discount_offered: "5",
      Weight_in_gms: "1200",
      Reached_on_Time_Y_N: "No"
    },
    {
      id: 3,
      ID: "1003",
      Warehouse_block: "C",
      Mode_of_Shipment: "Flight",
      Customer_care_calls: "3",
      Customer_rating: "3",
      Cost_of_the_Product: "150",
      Prior_purchases: "2",
      Product_importance: "low",
      Gender: "M",
      Discount_offered: "15",
      Weight_in_gms: "800",
      Reached_on_Time_Y_N: "Yes"
    }
  ];

  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [filterMode, setFilterMode] = useState("All");

  // Load from localStorage or use static data
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("entries"));
    if (stored && stored.length > 0) {
      setEntries(stored);
    } else {
      setEntries(staticEntries);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addEntry = () => {
    if (!form.ID.trim()) {
      alert("ID is required.");
      return;
    }
    setEntries((prev) => [
      { ...form, id: Date.now() },
      ...prev
    ]);
    setForm(initialFormState);
  };

  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const filteredEntries =
    filterMode === "All"
      ? entries
      : entries.filter((e) => e.Mode_of_Shipment === filterMode);

  const recentEntries = filteredEntries.slice(0, 10);

  return (
    <div className="p-2 flex-1 dark:bg-gray-900 min-h-screen">
      <style>{`
        .dark .bg-white { background-color: #1a202c !important; }
        .dark .text-gray-700 { color: #e5e7eb !important; }
        .dark .text-gray-500 { color: #9ca3af !important; }
        .dark .bg-gray-50 { background-color: #2d3748 !important; }
        .dark .bg-white { background-color: #1a202c !important; }
        .dark .border-gray-200 { border-color: #374151 !important; }
        .dark .border-gray-300 { border-color: #4b5563 !important; }
        .dark .focus\\:ring-blue-100:focus { box-shadow: 0 0 0 2px #2563eb33; }
        .dark .focus\\:border-blue-400:focus { border-color: #60a5fa !important; }
        .dark .hover\\:bg-gray-50:hover { background-color: #374151 !important; }
        .dark .hover\\:bg-red-50:hover { background-color: #7f1d1d11 !important; }
        .dark .bg-gradient-to-r { color: inherit; }
        .dark .bg-blue-600 { background-color: #2563eb !important; }
        .dark .hover\\:bg-blue-700:hover { background-color: #1d4ed8 !important; }
        .dark .rounded-lg { border-radius: 0.5rem; }
        .dark input, .dark select { background-color: #2d3748; color: #e5e7eb; border-color: #4b5563; }
        .dark table { color: #e5e7eb; }
        .dark th, .dark td { border-color: #374151; }
        /* Gradient text for both modes */
        .gradient-text {
          background: linear-gradient(to right, #fbbf24, #fb7185, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
       <h1 className="text-4xl font-bold text-center mb-3">
           <span className="text-black text1 dark:text-white">
            Shipment Records
          </span>
        </h1>
      <div className="bg-white rounded-lg shadow-sm p-4 dark:bg-gray-800">
        
        
        

        <div className="border border-gray-200 rounded-lg p-2 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 dark:border-gray-700">
          {Object.keys(initialFormState).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              value={form[key]}
              placeholder={key.replace(/_/g, " ")}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          ))}
          <button
            onClick={addEntry}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded transition-colors duration-200 sm:col-span-2 lg:col-span-3 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Add Entry
          </button>
        </div>

        <div className="mb-2 flex gap-2 items-center">
          <label className="text-gray-700 text-sm dark:text-gray-200">Filter by Mode of Shipment:</label>
          <select
            value={filterMode}
            onChange={(e) => setFilterMode(e.target.value)}
            className="border border-gray-300 text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          >
            <option>All</option>
            <option>Road</option>
            <option>Ship</option>
            <option>Flight</option>
          </select>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-x-auto dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {Object.keys(initialFormState).map((key) => (
                  <th key={key} className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    {key.replace(/_/g, " ")}
                  </th>
                ))}
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {recentEntries.length === 0 ? (
                <tr>
                  <td colSpan={Object.keys(initialFormState).length + 1} className="px-2 py-2 text-sm text-gray-500 text-center dark:text-gray-400">
                    No entries found
                  </td>
                </tr>
              ) : (
                recentEntries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    {Object.keys(initialFormState).map((key) => (
                      <td key={key} className="px-2 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-100">
                        {entry[key]}
                      </td>
                    ))}
                    <td className="px-2 py-2 whitespace-nowrap">
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 transition-colors duration-200 dark:text-red-400 dark:hover:bg-red-900/20"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-4 text-center">
        <span className="text-gray-500 dark:text-gray-400">OR</span>
      </div>

      <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Upload Data</h2>
      <div className="mb-2">
        <FileUploader setData={setData} />
        <DynamicTable data={data} />
      </div>
    </div>
  );
};

export default Tables;
