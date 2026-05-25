import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { AboutPage } from '@/pages/about/AboutPage';
import { ContactPage } from '@/pages/contact/ContactPage';
import { GalleryAllPage } from '@/pages/gallery-all/GalleryAllPage';
import { GalleryPage } from '@/pages/gallery/GalleryPage';
import { GetInvolvedPage } from '@/pages/get-involved/GetInvolvedPage';
import { HomePage } from '@/pages/home/HomePage';
import { ImpactReportsPage } from '@/pages/impact-reports/ImpactReportsPage';
import { NewsPage } from '@/pages/news/NewsPage';
import { ProgramsPage } from '@/pages/programs/ProgramsPage';
import { VolunteerPage } from '@/pages/volunteer/VolunteerPage';
import { ROUTES } from './paths';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.programs} element={<ProgramsPage />} />
        <Route path={ROUTES.impactReports} element={<ImpactReportsPage />} />
        <Route path={ROUTES.getInvolved} element={<GetInvolvedPage />} />
        <Route path={ROUTES.volunteer} element={<VolunteerPage />} />
        <Route path={ROUTES.news} element={<NewsPage />} />
        <Route path={ROUTES.gallery} element={<GalleryPage />} />
        <Route path={ROUTES.galleryAll} element={<GalleryAllPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path='*' element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
}
