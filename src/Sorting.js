import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const Sorting = () => {
  const data = [
    {
      firstName: "Sam",
      lastName: "Billings",
      age: 31,
    },
    {
      firstName: "Sai",
      lastName: "Yan",
      age: 30,
    },
    {
      firstName: "Shai",
      lastName: "Hope",
      age: 21,
    },
    {
      firstName: "Santa",
      lastName: "Clause",
      age: 89,
    },
  ];
  const [tableData, setTableData] = useState();
  useEffect(() => {
    setTableData(data);
  }, []);
  const sortTable = () => {
    const sortedList = data.sort((a, b) => a.age - b.age);
    setTableData(sortedList);
  };

  return (
    <>
      <p>I am sorting component</p>
      <Button size="lg" color="primary" className="mb-2" onClick={sortTable}>
        Sort Table
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => {
            return (
              <>
                <tr>
                  <td>{index}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.age}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Sorting;
