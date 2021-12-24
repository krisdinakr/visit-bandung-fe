const RouteParams = {
  id: ':id',
};

export const USER_ROUTES = {
  ROOT: '/',
  ATTRACTIONS: ':attraction',
  CULTURE_ART: '/culture-art',
  SHOPPING: '/shopping',
  NATURE: '/nature',
  CULINARY: '/culinary',
  HISTORY_HERITAGE: '/history-heritage',
  ABOUT_BANDUNG: '/about-bandung',
  HISTORY_BANDUNG: '/history-to-bandung',
  GETTING_TO_BANDUNG: '/getting-to-bandung',
};

export const ADMIN_ROUTES = {
  ROOT: '/admin/dashboard',
  LOGIN: '/admin/login',
  ATTRACTION_LIST: '/admin/attractions',
  ATTRACTION_DETAILS: `/admin/attractions/${RouteParams.id}`,
  ATTRACTION_CREATE: '/admin/attractions/create',
  ATTRACTION_UPDATE: `/admin/attractions/update/${RouteParams.id}`,
};
