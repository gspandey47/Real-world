import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

function Attendence() {
  const [attendance, setAttendance] = useState([]);
  const employeeId = "1"; // Replace with actual employee ID

  const handleAttendance = async (type) => {
    if (!navigator.geolocation) return alert("Geolocation is not supported by your browser.");

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const res = await axios.post(`${API_URL}/attendance/${type}`, {
          employeeId,
          latitude,
          longitude,
        });
        alert(res.data.message);
        fetchAttendance();
      } catch (err) {
        alert("Error processing attendance");
      }
    }, () => alert("Location access denied"));
  };

  const fetchAttendance = async () => {
    try {
      const res = await axios.get(`${API_URL}/attendance/view/${employeeId}`);
      setAttendance(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div className="mx-auto">
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance PLease</h1>
      <div className="space-x-4">
        <button onClick={() => handleAttendance("in")} className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Attendance IN
        </button>
        <button onClick={() => handleAttendance("out")} className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
          Attendance OUT
        </button>
        <button onClick={fetchAttendance} className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          View Attendance
        </button>
      </div>

      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Attendance Records</h2>
        <ul className="space-y-2">
          {attendance.length === 0 ? (
            <p>No records found.</p>
          ) : (
            attendance.map((record, index) => (
              <li key={index} className="border-b pb-2">
                <p><strong>IN:</strong> {new Date(record.inTime).toLocaleString()}</p>
                <p><strong>OUT:</strong> {record.outTime ? new Date(record.outTime).toLocaleString() : "Pending"}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Attendence;
