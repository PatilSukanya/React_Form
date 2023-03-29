import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Sukanya"
          value={formData.firstName}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        />

        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Patil"
          value={formData.lastName}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        />

        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abz123@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"        
          />

        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"        
          >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <label htmlFor="streetAddress"className="block mb-2 text-sm font-medium text-gray-900">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"        
          />

        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"        
          />

        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State / Province</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
          />

        <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-900">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="border mb-3 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"        
          />
        <fieldset>
          <legend className="block mb-2 text-sm font-medium text-gray-900">By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="flex items-center h-5"
            />
            <div className="ml-2 text-sm">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-900">Comments</label>
              <p className="text-xs font-normal text-gray-500">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="flex items-center h-5"
            />
            <div className="ml-2 text-sm">
              <label htmlFor="candidates" className="block text-sm font-medium text-gray-900">Candidates</label>
              <p className="text-xs font-normal text-gray-500">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="flex items-center h-5"
            />
            <div className="ml-2 text-sm">
              <label htmlFor="offers" className="block text-sm font-medium text-gray-900">Offers</label>
              <p className="mb-3 text-xs font-normal text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend className="block text-sm font-medium text-gray-900">Push Notifications</legend>
          <p className="mb-2 text-sm text-xs font-normal text-gray-500">These are delivered via SMS to your mobile phone.</p>
         
         <div className="flex items-center mb-4">
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="pushEverything" className="block ml-2 text-sm font-medium text-gray-900"> Everything</label>
          </div>

          <div className="flex items-center mb-4">
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="pushEmail" className="block ml-2 text-sm font-medium text-gray-900">Same as email</label>
          </div>

          <div className="flex items-center mb-4">
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="pushNothing" className="block ml-2 text-sm font-medium text-gray-900">No Push Notifications</label>
          </div>
        </fieldset>

        <button
        className="font-bold mb-4 px-5 py-2 text-xs font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >Save</button>

      </form>

    </div>
  );
}

export default App;
