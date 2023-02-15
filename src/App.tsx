import { Counter } from './components/Counter';
import Photo from './assets/img/photo.jpeg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

export const App = () => {
  const notify = () =>
    toast.info('Inscrição confirmada com sucesso!', {
      closeButton: false,
      theme: 'colored',
    });

  return (
    <main>
      <div className="container">
        <h1>Han pasado ...</h1>

        <Counter />

        <p>Desde el dia que te vi por primera vez</p>

        <button onClick={notify}>clic me</button>

        <ToastContainer
          theme="dark"
          position="top-center"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </div>

      <img src={Photo} alt="couple-photo" className='photo'/>
    </main>
  );
};
