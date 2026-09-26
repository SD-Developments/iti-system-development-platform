import { RouterProvider } from 'react-router';
import router from './router';
import LenisProvider from './lib/lenis-provider';

function App() {
  return (
    <LenisProvider>
      <RouterProvider router={router} />
    </LenisProvider>
  );
}

export default App;
