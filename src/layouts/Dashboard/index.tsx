import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

import './style.css';

type User = {
  name: string;
};

export const Dashboard: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <main className="app-main">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <div className="app-container">
        <section className="sidebar">
          <Sidebar
            user={user}
          />
        </section>
        <section className="content">
          <Outlet />
        </section>
      </div>
    </main>
  );
};
