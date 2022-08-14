import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ArticlesPage from './pages/ArticlesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='articles' element={<ArticlesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
