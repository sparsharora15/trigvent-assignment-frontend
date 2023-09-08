import React, { useState, useEffect } from "react";
import { getTableData } from "../../Config/API";
import GetRule from "../../helper/getRule";
const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  async function getData() {
    const response = await getTableData(GetRule('table').rule);
    if (response.status === 200) {
      setTableData(response.data);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full">
      <div class="flex flex-col container mx-auto p-10 w-full justify-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" class=" px-6 py-4">
                      Population
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((element) => {
                    return (
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4">{element.population}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{element.year}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
