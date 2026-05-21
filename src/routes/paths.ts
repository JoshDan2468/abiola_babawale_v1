export const ROUTES = {
  home: '/',
  about: '/about',
  programs: '/programs',
  impactReports: '/impact-reports',
  getInvolved: '/get-involved',
  volunteer: '/volunteer',
  donate: '/donate',
  news: '/news',
  gallery: '/gallery',
  galleryAll: '/gallery/all',
  contact: '/contact',
} as const;

export const MAIN_NAV_ROUTES = [
  { label: 'Home', to: ROUTES.home },
  { label: 'About', to: ROUTES.about },
  { label: 'Programs', to: ROUTES.programs },
  { label: 'Impact Reports', to: ROUTES.impactReports },
  { label: 'Get Involved', to: ROUTES.getInvolved },
  { label: 'Gallery', to: ROUTES.gallery },
  { label: 'News', to: ROUTES.news },
  { label: 'Contact', to: ROUTES.contact },
] as const;

export const FOOTER_NAV_ROUTES = [
  { label: 'About', to: ROUTES.about },
  { label: 'Programs', to: ROUTES.programs },
  { label: 'Impact Reports', to: ROUTES.impactReports },
  { label: 'Gallery', to: ROUTES.gallery },
  { label: 'News', to: ROUTES.news },
  { label: 'Contact', to: ROUTES.contact },
] as const;
