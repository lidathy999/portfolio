
import { Button } from '@mui/material';
import './App.css';

function App() {
  const menus = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];
  return (
    <div className="App h-screen bg-amber-50">
      <div className='flex justify-between flex-col h-[100%]'>
        <div className='flex flex-row gap-2 justify-end pr-5 pt-3'>
          {menus.map((menu) => <Button variant='outlined' color='warning' className='p-2'>{menu}</Button>)}
        </div>
        <div className="flex h-[100%] justify-center items-start flex-col pl-[20%]">
          <div className='flex flex-col items-center'>
            <div className='w-28 h-28'><img className='rounded-full' src='../../images/avarta.png' /></div>
            <div>
              <h1 className="text-3xl font-bold">
                Hello, I'm Lyda!
              </h1>
              <p className="text-lg">
                I'm a <span className='text-amber-500'>Front-end Developer</span>
              </p>
            </div>
          </div>
          <div>Detail-oriented Front-End Developer with more than 5 years experience working with HTML, CSS, Javascript, JQuery, and TypeScript. Highly adept at both independent and collaborative projects, with an emphasis on landing page and website development.</div>

        </div>
      </div>
    </div>
  );
}

export default App;
