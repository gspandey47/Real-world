import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Update Employee Records", status: "Pending" },
    { id: 2, task: "Review Leave Applications", status: "In Progress" },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, task: newTask, status: "Pending" }]);
      setNewTask("");
    }
  };

  const analyticsData = {
    labels: ["Total Employees", "On Leave", "Present Today"],
    datasets: [
      {
        label: "Employee Metrics",
        data: [100, 10, 90],
        backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
      },
    ],
  };

  return (
    <div className="min-h-screen mx-auto bg-gray-100 p-6 min-w-full flex flex-col gap-6">
      {/* Key Metrics / Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Key Metrics / Analytics</h2>
        <div className="w-full overflow-x-auto">
          <Bar data={analyticsData} />
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Quick Actions</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">Add Employee</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto">Approve Leave</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full sm:w-auto">Manage Shifts</button>
        </div>
      </div>

      {/* Task Management Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Task Management</h2>
        <ul className="mb-4 space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="p-2 border-b flex justify-between flex-col sm:flex-row gap-2">
              <span>{task.task}</span>
              <span className={`px-2 py-1 rounded text-white text-sm ${task.status === "Pending" ? "bg-red-500" : "bg-green-500"}`}>{task.status}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="New Task"
            className="p-2 border rounded w-full"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">Add</button>
        </div>
      </div>
    </div>
  );
}
