import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Photo from './resources/6428.jpg'


function App() {
  return (
   <>
   <Navbar/>
   <div className='grid content-center justify-center '>

    <img src={Photo} className="rounded-md border-4 mt-6"/>
   </div>
   <div className='w-[55rem] flex justify-center content-center text-center mx-auto font-serif text-orange-700 hover:text-emerald-700 mt-11'>
     Welcome to My Website , My Skill Lies in Python , Java , C++ , C# , Dart , Flutter , JavaScript , TypeScript , CoffeScript , OCMlyaml , Reason , Kotlin , Scala , Reddis , Postgres , Tailwind , Next JS , Solidity , Redux 
   </div>
   <footer className='bg-slate-800 text-white text-center h-11 w-screen fixed bottom-0'>
      Made With Love By Deepak Gupta
   </footer>
   </>
  );
}

export default App;
