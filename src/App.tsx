
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  // Este componente agora atua como um "shell" de layout simples.
  // Os layouts específicos da página são tratados pelos componentes renderizados pelo router.
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
