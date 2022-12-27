import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import BaseLayout from '../layouts/BaseLayout';
import NotFound from '../pages/NotFound';
import SurahList, { surahListLoader } from '../pages/Surah';
import Ayat, { ayatLoader } from '../pages/Ayat';

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/surah',
        element: <SurahList />,
        loader: surahListLoader,
      },
      {
        path: '/surah/:noSurah',
        element: <Ayat />,
        loader: ayatLoader,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
