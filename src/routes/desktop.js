import App from '../desktop/containers/App';
import Posts from '../desktop/containers/Posts';
import PostDetail from '../desktop/containers/PostDetail';
import Comments from '../desktop/containers/Comments';
import Profile from '../desktop/containers/Profile';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Posts,
        exact: true,
      },
      {
        path: '/posts',
        component: Posts,
        exact: true,
      },
      {
        path: '/posts/:id',
        component: PostDetail,
        exact: true,
      },
      {
        path: '/comments',
        component: Comments,
        exact: true,
      },
      {
        path: '/profile',
        component: Profile,
        exact: true,
      },
    ],
  },
];

export default routes;
