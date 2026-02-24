import { Outlet } from 'react-router-dom';
import { SiteNavbar } from '@/components/layout/SiteNavbar';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

export function SiteLayout() {
  return (
    <div className='min-h-screen bg-white'>
      <ScrollToTop />
      <SiteNavbar />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
