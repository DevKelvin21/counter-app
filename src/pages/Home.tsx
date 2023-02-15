import { Counter } from '../components/Counter';
import Photo from '../assets/img/photo.jpeg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import '../App.scss';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <main>
      <div className="container">
        <h1>Han pasado ...</h1>

        <Counter />

        <p>Desde el dia que te vi por primera vez</p>

        <button><Link to='/history'>clic me 😃</Link></button>
      </div>

      <img src={Photo} alt="couple-photo" className='photo'/>
    </main>
  );
};
