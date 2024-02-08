import React from 'react';

import { Header } from '../../layouts/Header';

import './style.css';

type User = {
  name: string;
};

export const Home: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <main>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h1>Home Page</h1>
      </section>
    </main>
  );
};
