import { Route, Routes } from 'react-router-dom';
import { Result } from '../result/Result.tsx';
import { Home } from '../home/Home.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/results' element={<Result />} />
    </Routes>
  );
};

export default AppRouter;
