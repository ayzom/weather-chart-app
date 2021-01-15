import './App.css';
import Clock from "../Chart/Chart"

const App = () => {
  function componentDidMount() {
    console.log("Mounted");
  };

  return (
    <div className="App grid grid-cols-11 h-screen relative">
      <aside className="hidden md:block menu md:col-span-4 lg:col-span-2 border-r border-gray-300 border-solid px-4 py-5 bg-gray-100">
        <section className="mb-4">
          <div>
            <img className="text-sm bg-blue-600 rounded px-4 py-1 text-white shadow-md focus:outline-none focus:shadow-outline" src="https://static.wixstatic.com/media/dcecb8_2f6687f84192433887675d6e40c5ed5f~mv2.png/v1/fill/w_189,h_50,al_c,q_85,usm_0.66_1.00_0.01/Slim%20Horizontal_White.webp"/>
          </div>
        </section>
        <section className="py-3 border-b text-gray-900">
          <section className="menu__menu-item hover:text-gray-700 text-sm mb-2 cursor-pointer flex">
            Home
          </section>
        </section>
       
      </aside>
      <section className="col-span-11 md:col-span-7 lg:col-span-9 py-5">
        <header>
          <div className="flex justify-center mb-8 px-8">
            <h1 className="flex items-center text-2xl font-bold">
              Weather
            </h1>
          </div>
          
          <img className='mb-4 w-full banner-image' src='https://ltheme.com/wp-content/uploads/2019/03/JUX-Weather-Forecast.png' alt='' role='presentation'/>
        </header>
        <main className="grid grid-cols-4 px-8 lg:pb-20">
          <Clock />
        </main>
      </section>
    </div>
  )
}



export default App;
