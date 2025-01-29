import { useState } from "react";

export default function Shift() {
  const [shift, setShift] = useState("");
  const [reason, setReason] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!employeeId.trim()) newErrors.employeeId = "Employee ID is required.";
    if (!shift) newErrors.shift = "Please select a shift.";
    if (!reason.trim()) newErrors.reason = "Reason for shift change is required.";
    return newErrors;
  };

  const handleReset = () => {
    setShift("");
    setReason("");
    setEmployeeId("");
    setAdditionalNotes("");
    setErrors({});
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert(`Shift Change Requested for Employee ID: ${employeeId}\nNew Shift: ${shift}\nReason: ${reason}\nAdditional Notes: ${additionalNotes}`);
  };

  return (
    <div className="flex mx-auto  justify-center min-h-[500px]bg-gray-100 p-4 w-[400px]">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Shift Change Request</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Employee ID</label>
            <input className="w-full p-2 border rounded" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Enter Employee ID" />
            {errors.employeeId && <p className="text-red-500 text-sm">{errors.employeeId}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Select New Shift</label>
            <select className="w-full p-2 border rounded" value={shift} onChange={(e) => setShift(e.target.value)}>
              <option value="">Choose a shift</option>
              <option value="day">Day Shift</option>
              <option value="night">Night Shift</option>
            </select>
            {errors.shift && <p className="text-red-500 text-sm">{errors.shift}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Reason for Shift Change</label>
            <textarea className="w-full p-2 border rounded" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter reason" />
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Additional Notes</label>
            <textarea className="w-full p-2 border rounded" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} placeholder="Any additional information" />
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handleReset} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Reset</button>
            <button onClick={handleSubmit} className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">Submit Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}
