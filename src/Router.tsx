import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';

import style from './Router.module.scss';

import {
  Accordion,
  Dropdown,
  Modal,
  Notification,
  Switch,
  Table,
} from './components';

export enum RoutesPath {
  MAIN = '/',
  DROPDOWN = '/dropdown',
  MODAL = '/modal',
  NOTIFICATION = '/notification',
  SWITCH = '/switch',
  ACCORDION = '/accordion',
  TABLE = '/table',
}

const [_, ...routesList] = Object.entries(RoutesPath);

const router = createBrowserRouter([
  {
    path: RoutesPath.MAIN,
    element: (
      <ul className={style.list}>
        {...routesList.map(([_, value], __) => (
          <li className={style.item}>
            <NavLink to={value}>{value.replace('/', '')}</NavLink>
          </li>
        ))}
      </ul>
    ),
  },
  {
    path: RoutesPath.DROPDOWN,
    element: <Dropdown />,
  },
  {
    path: RoutesPath.MODAL,
    element: <Modal />,
  },
  {
    path: RoutesPath.NOTIFICATION,
    element: <Notification />,
  },
  {
    path: RoutesPath.SWITCH,
    element: <Switch />,
  },
  {
    path: RoutesPath.ACCORDION,
    element: <Accordion />,
  },
  {
    path: RoutesPath.TABLE,
    element: <Table />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
