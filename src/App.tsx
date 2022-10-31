import React, { useState } from "react";
import "./App.css";
import { CreateRecordForm } from "./components/CreateRecordForm";
import { Header } from "./components/Header";
import StudentTable from "./components/StudentTable";

function App() {
  const [tableData, setTableData] = useState<any>([]);
  const handleCreateRecord = (recordObj: any) => {
    if (tableData[0]) {
      const obj: any = tableData[tableData.length - 1];
      setTableData([
        ...tableData,
        ...[{ ...recordObj, id: (obj?.id || 0) + 1 }],
      ]);
    } else {
      setTableData([{ ...recordObj, id: 1 }]);
    }
  };

  const handleDelete = (id: any) => {
    setTableData([...tableData.filter((student: any) => student.id !== id)]);
  };

  return (
    <div className="App">
      <Header />
      <CreateRecordForm handleCreateRecord={handleCreateRecord} />
      <StudentTable tableData={tableData} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
