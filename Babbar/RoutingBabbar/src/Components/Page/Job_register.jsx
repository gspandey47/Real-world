import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Job= () => {
  const [image, setImage] = useState(null); // Fix: Add state for image
    const [error, setError] = useState(""); // Fix: Add state for error message
  
    const [resume, setResume] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // Added loading state for next and submit button

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true); // Show submitting message
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    console.log("Form Submitted Successfully!", data);
    alert("Form Submitted Successfully!");
    setLoading(false); // Remove submitting message after process
  };

  const nextStep = () => {
    setLoading(true); // Show submitting message
    setTimeout(() => {
      setStep(step + 1);
      setLoading(false); // Hide submitting message after next step
    }, 1000);
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setError("Please select an image.");
      return;
    }

    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      setError("Only JPG and PNG files are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be less than 2MB.");
      return;
    }

    setError("");
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };


  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };


  return (
    // <div className="flex mx-auto justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white px-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Registration Form</h2>
        
        {loading && <div className="text-center text-purple-700 font-bold">Submitting...</div>} {/* Display message */}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section 1 */}
          {step === 1 && (
            <div>
              <label className="block">Name:</label>
              <input
              value=""
              name="name"
                {...register("name", { required: "Name is required", minLength: { value: 5, message: "Min length is 5" } })}
                type="text"
                className={`w-full p-2 border rounded mb-2 ${errors.name ? "border-red-600" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

              <label className="block">Email:</label>
              <input
              value=""
              name="email"
                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
                type="email"
                className={`w-full p-2 border rounded mb-2 ${errors.email ? "border-red-600" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

              <label className="block">Mobile:</label>
              <input
              value=""
              name="mobile"
                {...register("mobile", { required: "Mobile is required", pattern: { value: /^\d{10}$/, message: "Must be 10 digits" } })}
                type="text"
                className={`w-full p-2 border rounded ${errors.mobile ? "border-red-600" : ""}`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
              <label className="block">Date:</label>
              <input
                {...register("Date", { required: "date is required" })}
                type="datetime-local"
                className={`w-full p-2 border rounded ${errors.Date ? "border-red-600" : ""}`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.Date.message}</p>}
            </div>
          )}

          {/* Section 2 */}
          {step === 2 && (
            <div>
              <label className="block">Age:</label>
              <input
                {...register("age", { required: "Age is required", min: { value: 18, message: "Must be at least 18" } })}
                type="number"
                className={`w-full p-2 border rounded mb-2 ${errors.age ? "border-red-600" : ""}`}
              />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}

              <label className="block">Gender:</label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className={`w-full p-2 border rounded ${errors.gender ? "border-red-600" : ""}`}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}


              <label className="block">Adhaar:</label>
              <input
                {...register("Adhaar", { required: "Adhar is required", pattern: { value: /^\d{12}$/, message: "Must be 12 digits" } })}
                type="text"
                className={`w-full p-2 border rounded ${errors.Adhaar ? "border-red-600" : ""}`}
              />
              {errors.Adhaar && <p className="text-red-500 text-sm mt-1">{errors.Adhaar.message}</p>}



              <label className="block">PAN No:</label>
              <input
                {...register("pan", { required: "Mobile is required", pattern: { value: /^\d{16}$/, message: "Must be 10 digits" } })}
                type="text"
                className={`w-full p-2 border rounded ${errors.pan ? "border-red-600" : ""}`}
              />
              {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan.message}</p>}



            </div>
          )}

          {/* Section 3 */}
          {step === 3 && (
            <div>

<label className="block">Account No:</label>
              <input
                {...register("account", { required: "Account no. is required", pattern: { value: /^\d{14}$/, message: "Must be 14 digits" } })}
                type="text"
                className={`w-full p-2 border rounded ${errors.account ? "border-red-600" : ""}`}
              />
              {errors.account && <p className="text-red-500 text-sm mt-1">{errors.account.message}</p>}


              <label className="block">DOB:</label>
              <input
                {...register("Date", { required: "date is required" })}
                type="datetime-local"
                className={`w-full p-2 border rounded ${errors.Date ? "border-red-600" : ""}`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.Date.message}</p>}



              <label className="block">Address:</label>
              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                className={`w-full p-2 border rounded mb-2 ${errors.address ? "border-red-600" : ""}`}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}

              <label className="block">City:</label>
              <input
                {...register("city", { required: "City is required" })}
                type="text"
                className={`w-full p-2 border rounded ${errors.city ? "border-red-600" : ""}`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
              <label className="block">Nominee:</label>
              <input
                {...register("Nominee", { required: "Nominee is required" })}
                type="text"
                className={`w-full p-2 border rounded ${errors.Nominee ? "border-red-600" : ""}`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.Nominee.message}</p>}
            </div>
          )}

          {/* Section 4 */}
          {step === 4 && (
            <div>
              <label className="block">Password:</label>
              <input
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min length is 6" } })}
                type="password"
                className={`w-full p-2 border rounded mb-2 ${errors.password ? "border-red-600" : ""}`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

              <label className="block">Confirm Password:</label>
              <input
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) => value === watch("password") || "Passwords do not match",
                })}
                type="password"
                className={`w-full p-2 border rounded ${errors.confirmPassword ? "border-red-600" : ""}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}


{/* Employee Photo Upload */}
<label className="block mt-4 font-semibold">Upload Passport Size Photo:</label>
              <input type="file" accept="image/jpeg, image/png" onChange={handleImageUpload} className="block w-full p-2 border border-gray-300 rounded-lg" />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              {/* Image Preview */}
              {image && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-600">Preview:</p>
                  <img src={image} alt="Uploaded Preview" className="mt-2 w-32 h-40 object-cover border border-gray-300 rounded-md" />
                </div>
              )}

<label className="block text-gray-700 font-semibold mb-2">
        Upload Resume (Optional):
      </label>
      <input
      value=""
              name="name"
        type="file"
        accept=".pdf, .doc, .docx"
        onChange={handleResumeUpload}
        className="block w-full p-2 border border-gray-300 rounded-lg"
      />
 {resume && (
        <p className="mt-2 text-sm text-gray-600">
          Selected file: <span className="font-semibold">{resume.name}</span>
        </p>
      )}
            </div>



            
          )}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 bg-gray-500 text-white rounded">
                Back
              </button>
            )}
            {step < 4 ? (
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded" disabled={loading } >
                {loading ? "Submitting..." : "Next"}
              </button>
            ) : (
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    // </div>
  );
};

export default Job;
