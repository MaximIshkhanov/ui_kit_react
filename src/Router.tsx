import React, { useState } from 'react';
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

const AppRouter = () => {
  const [selected, setSelected] = useState('Dropdown');

  const router = createBrowserRouter([
    {
      path: RoutesPath.MAIN,
      element: (
        <ul className={style.list}>
          {routesList.map(([_, value], index) => (
            <li key={index} className={style.item}>
              <NavLink to={value}>{value.replace('/', '')}</NavLink>
            </li>
          ))}
        </ul>
      ),
    },
    {
      path: RoutesPath.DROPDOWN,
      element: <Dropdown selected={selected} setSelected={setSelected} />,
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
      element: (
        <Accordion title="Accordion title"
          content="Wise men speak because they have something to say; fools because they have to say something."
        />
      ),
    },
    {
      path: RoutesPath.TABLE,
      element: <Table />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
