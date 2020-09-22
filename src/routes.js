import Home from 'views/Home';
import Error404 from 'views/Error404';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/error-404',
    exact: true,
    component: Error404
  },
  {
    path: '*',
    component: Error404
  }
];

export default routes;