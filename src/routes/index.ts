const RouteParams = {
  id: ':id',
};

export const USER_ROUTES = {
  ROOT: '/',
  CATEGORY: '/:category',
  ATTRACTIONS: '/attractions',
  CULTURE_ART: '/culture-art',
  SHOPPING: '/shopping',
  NATURE: '/nature',
  CULINARY: '/culinary',
  HISTORY: '/history',
  ABOUT_BANDUNG: '/about-bandung',
  HISTORY_BANDUNG: '/history-to-bandung',
  GETTING_TO_BANDUNG: '/getting-to-bandung',
};

export const ADMIN_ROUTES = {
  ROOT: '/admin/dashboard',
  LOGIN: '/admin/login',
  PLACE_LIST: '/admin/places',
  PLACE_DETAILS: `/admin/places/${RouteParams.id}`,
  PLACE_CREATE: '/admin/places/create',
  PLACE_UPDATE: `/admin/places/update/${RouteParams.id}`,
};
