import { useState } from "react";

export default function Leave() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!fromDate) newErrors.fromDate = "From date is required.";
    if (!toDate) newErrors.toDate = "To date is required.";
    if (!leaveType) newErrors.leaveType = "Please select leave type.";
    if (!reason) newErrors.reason = "Please select a reason.";
    return newErrors;
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setLeaveType("");
    setReason("");
    setFile(null);
    setComments("");
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    alert("Leave request submitted successfully!");
  };

  return (
    <div className="flex mx-auto justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Employee Leave Request</h2>
        {submitted && <p className="text-green-600 font-bold text-center">Leave request submitted successfully!</p>}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">From Date</label>
            <input type="date" className="w-full p-2 border rounded" value={fromDate} onChange={(e) => setFromDate(e.target.value)} disabled={submitted} />
            {errors.fromDate && <p className="text-red-500 text-sm">{errors.fromDate}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">To Date</label>
            <input type="date" className="w-full p-2 border rounded" value={toDate} onChange={(e) => setToDate(e.target.value)} disabled={submitted} />
            {errors.toDate && <p className="text-red-500 text-sm">{errors.toDate}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Leave Type</label>
            <select className="w-full p-2 border rounded" value={leaveType} onChange={(e) => setLeaveType(e.target.value)} disabled={submitted}>
              <option value="">Select Leave Type</option>
              <option value="full">Full Day</option>
              <option value="half">Half Day</option>
            </select>
            {errors.leaveType && <p className="text-red-500 text-sm">{errors.leaveType}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Reason</label>
            <select className="w-full p-2 border rounded" value={reason} onChange={(e) => setReason(e.target.value)} disabled={submitted}>
              <option value="">Select Reason</option>
              <option value="medical">Medical</option>
              <option value="personal">Personal</option>
              <option value="social">Social Function</option>
              <option value="other">Other</option>
            </select>
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Attach File (Optional)</label>
            <input type="file" className="w-full p-2 border rounded" onChange={(e) => setFile(e.target.files[0])} disabled={submitted} />
          </div>
          <div>
            <label className="block text-sm font-medium">Additional Comments</label>
            <textarea className="w-full p-2 border rounded" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Any additional information" disabled={submitted} />
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handleReset} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded" disabled={submitted}>Reset</button>
            <button onClick={handleSubmit} className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded" disabled={submitted}>Apply Leave</button>
          </div>
        </div>
      </div>
    </div>
  );
}
