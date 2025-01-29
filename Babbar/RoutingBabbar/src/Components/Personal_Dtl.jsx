import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function Personal() {
  const [employees, setEmployees] = useState([
    {
      name: "Krunal",
      gender: "Male",
      mobile: "9876543210",
      date: "2025-01-29",
      age: 30,
      panNo: "ABCDE1234F",
      accountNo: "123456789012",
      dateOfBirth: "1994-05-15",
      address: "123 Street, City",
      city: "amroli",
      photo: "https://via.placeholder.com/50",
      nominee: "Krunal",
    },
  ]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Employee Details", 14, 10);
    autoTable(doc, {
      head: [["Name", "Gender", "Mobile", "Date", "Age", "PAN No", "Account No", "DOB", "Address", "City", "Nominee"]],
      body: employees.map(emp => [
        emp.name, emp.gender, emp.mobile, emp.date, emp.age, emp.panNo, emp.accountNo, emp.dateOfBirth, emp.address, emp.city, emp.nominee
      ]),
    });
    doc.save("Employee_Details.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">Employee Details</h2>
      <div className="overflow-x-auto w-full max-w-5xl bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              {[
                "Name", "Gender", "Mobile", "Date", "Age", "PAN No", "Account No", "DOB", "Address", "City", "Photo", "Nominee", "Action"
              ].map((head) => (
                <th key={head} className="border border-gray-300 p-2 text-sm font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{emp.name}</td>
                <td className="border border-gray-300 p-2">{emp.gender}</td>
                <td className="border border-gray-300 p-2">{emp.mobile}</td>
                <td className="border border-gray-300 p-2">{emp.date}</td>
                <td className="border border-gray-300 p-2">{emp.age}</td>
                <td className="border border-gray-300 p-2">{emp.panNo}</td>
                <td className="border border-gray-300 p-2">{emp.accountNo}</td>
                <td className="border border-gray-300 p-2">{emp.dateOfBirth}</td>
                <td className="border border-gray-300 p-2">{emp.address}</td>
                <td className="border border-gray-300 p-2">{emp.city}</td>
                <td className="border border-gray-300 p-2">
                  <img src={emp.photo} alt="Employee" className="w-10 h-10 rounded-full" />
                </td>
                <td className="border border-gray-300 p-2">{emp.nominee}</td>
                <td className="border border-gray-300 p-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={downloadPDF} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Download as PDF
      </button>
    </div>
  );
}
