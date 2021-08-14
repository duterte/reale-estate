import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

it('renders without crashing', () => {
  const div: HTMLDivElement = document.createElement('div');
  ReactDOM.render(<Layout />, div);
})