import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { ImpactReportsPage } from '@/pages/ImpactReportsPage';
import { GetInvolvedPage } from '@/pages/GetInvolvedPage';
import { DonatePage } from '@/pages/DonatePage';
import { NewsPage } from '@/pages/NewsPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { GalleryAllPage } from '@/pages/GalleryAllPage';
import { ContactPage } from '@/pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/impact-reports' element={<ImpactReportsPage />} />
        <Route path='/get-involved' element={<GetInvolvedPage />} />
        <Route path='/donate' element={<DonatePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/gallery/all' element={<GalleryAllPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

