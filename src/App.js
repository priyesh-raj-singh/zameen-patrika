import "./App.css";
import ZPLogo from "./assests/ZPLogo.png";
function App() {
  return (
    <div
      className="border-black  overflow-hidden flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1570815086038-21b7ad0c5f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2770&q=150')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="w-11/12 lg:w-1/2 md:w-2/3 flex flex-col items-center landingPage"
        style={{ minHeight: "60vh" }}
      >
        <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-14">
          <img
            src={ZPLogo}
            alt="#"
            style={{ width: "10vh", height: "10vh" }}
            className="mr-12"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-6xl underline">
            Zameen Patrika
          </h1>
        </div>
        <div className="h-full flex flex-col justify-center items-center mt-10 ">
          <form className="shadow-md rounded px-8 pt-6 pb-8 w-80 border-1 border-gray-800">
            <label className="text-center text-3xl underline mb-16">
              Register As Buyer
            </label>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight 
                  focus:outline-none focus:shadow-outline bg-transparent outline-none"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="age"
              >
                Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight 
                  focus:outline-none focus:shadow-outline bg-transparent outline-none"
                id="age"
                type="text"
                placeholder="Age"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight 
                  focus:outline-none focus:shadow-outline bg-transparent outline-none"
                id="city"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight 
                  focus:outline-none focus:shadow-outline bg-transparent outline-none"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="aadhar"
              >
                Aadhar Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight 
                  focus:outline-none focus:shadow-outline bg-transparent outline-none"
                id="aadhar"
                type="text"
                placeholder="Aadhar Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                for="pan"
              >
                PAN Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight 
                  focus:outline-none focus:shadow-outline bg-transparent outline-none"
                id="pan"
                type="text"
                placeholder="PAN Number"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-20 sm:w-3/4 lg:w-3/4 h-8 rounded-md mt-10 border-2 border-gray-900 
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 font-bold"
              >
                Register as buyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
