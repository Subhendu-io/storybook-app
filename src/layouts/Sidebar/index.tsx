import React from 'react';

import './style.css';
import { Link } from 'react-router-dom';

type User = {
  name: string;
};

interface SidebarProps {
  user?: User;
}


export const Sidebar = ({ user }: SidebarProps) => {
const appMenus = [
  {
    title: 'Overview',
    path: 'overview'
  },
  {
    title: 'Orders',
    path: 'orders'
  },
  {
    title: 'Market Place',
    path: 'market-place'
  },
  {
    title: 'Supports',
    path: 'support'
  },
  {
    title: 'Feedbacks',
    path: 'feedBack'
  },
]

  return (
    <aside>
      <div className="app-sidebar">
        <ul className="app-sidebar-menu">
          {
            appMenus.map((menu: any) => (
              <li key={menu.path} className="app-sidebar-menu-item">
                <a className="app-sidebar-menu-button" >{menu.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  );
};
