import "../App.css";
import ZPLogo from "../assests/ZPLogo.png";
function LandingPage() {
  return (
    <div
      className="border-black w-screen overflow-hidden flex flex-col justify-center items-center"
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
        <div className="h-full flex flex-col justify-center items-center mt-20 w-80">
          <h1 className="text-xl sm:text-2xl lg:text-4xl mb-4">Select Role</h1>
          <select
            className="w-40 sm:w-11/12 lg:w-11/12 h-14 rounded-md bg-transparent border-y-2
           border-black outline-none appearance-none inline-block py-3 pl-3 pr-8 leading-tight text-center"
          >
            <option>Select Role</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          <button
            className="w-20 sm:w-3/4 lg:w-3/4 h-8 rounded-md mt-10 border-2 border-gray-900 
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 font-bold"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
