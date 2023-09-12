import React, {useState} from "react";
import {ethers} from "ethers";

const SignUpComponent = () => {
  const [formType, setFormType] = useState("lawyer"); // Default form type is lawyer
  const [fullName, setFullName] = useState("");
  const [religion, setReligion] = useState("");
  const [nationality, setNationality] = useState("");
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [aadharUID, setAadharUID] = useState("");
  const [pan, setPan] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [signingUpAs, setSigningUpAs] = useState("lawyer");

  const connectMetamaskWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setWalletAddress(account);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (
      !fullName ||
      !religion ||
      !nationality ||
      !sex ||
      !dob ||
      !contactNumber ||
      !aadharUID ||
      !pan ||
      !walletAddress
    ) {
      alert("Please fill in all the required fields.");
      return; // Prevent form submission
    }

    const formData = {
      fullName,
      religion,
      nationality,
      sex,
      dob,
      contactNumber,
      aadharUID,
      pan,
      walletAddress,
      signingUpAs,
    };
    console.log("Submitted data :", formData);

    // If all required fields are filled, you can proceed with form submission logic here
  };

  const renderFormFields = () => {
    switch (formType) {
      case "lawyer":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Religion</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              >
                <option value="">Select Religion</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Nationality</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Sex</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">DOB</label>
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-full"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </>
        );
      case "client":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Religion</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              >
                <option value="">Select Religion</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Nationality</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Sex</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">DOB</label>
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-full"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </>
        );
      case "judge":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Religion</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              >
                <option value="">Select Religion</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Nationality</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Sex</label>
              <select
                className="border rounded-lg py-2 px-4 w-full"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">DOB</label>
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-full"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="bg-white p-8 font-montserrat w-1/2">
        <h1 className="text-3xl font-montserrat mb-4 text-center">
          Sign up for E-Vault{" "}
          {/* {formType === "lawyer"
            ? "Lawyer"
            : formType === "client"
            ? "Client"
            : "Judge"} */}
        </h1>
        <div className="mb-4 flex justify-center space-x-4">
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
              formType === "lawyer" ? "bg-blue-600" : "bg-blue-300"
            }`}
            onClick={() => {
              setFormType("lawyer");
              setSigningUpAs("lawyer");
            }}
          >
            Sign up as a lawyer
          </button>
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
              formType === "client" ? "bg-blue-600" : "bg-blue-300"
            }`}
            onClick={() => {
              setFormType("client");
              setSigningUpAs("client");
            }}
          >
            Sign up as a client
          </button>
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
              formType === "judge" ? "bg-blue-600" : "bg-blue-300"
            }`}
            onClick={() => {
              setFormType("judge");
              setSigningUpAs("judge");
            }}
          >
            Sign up as a judge
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {renderFormFields()}
          {/* Rest of the common form fields */}

          <div className="mb-4">
            <label className="block mb-2">Contact Number</label>
            <input
              type="text"
              className="border rounded-lg py-2 px-4 w-full"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Aadhar UID</label>
            <input
              type="text"
              className="border rounded-lg py-2 px-4 w-full"
              value={aadharUID}
              onChange={(e) => setAadharUID(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">PAN</label>
            <input
              type="text"
              className="border rounded-lg py-2 px-4 w-full"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Wallet Address</label>
            <div className="flex">
              <input
                type="text"
                className="border rounded-lg py-2 px-4 w-3/4"
                value={
                  walletAddress.slice(0, 6) +
                  "..." +
                  walletAddress.slice(30, 42)
                }
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button
                type="button"
                className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={connectMetamaskWallet}
              >
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="text-center mt-4 w-full">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-1/2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;