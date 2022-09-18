import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  // global.fetch = (url) => {
  //   return Promise.resolve({
  //     json: () => Promise.resolve({ 
  //       id: '7h3oGtr0fxc',
  //       joke: 'Whiteboards ... are remarkable.',
  //       status: 200,
  //     })
  //   })
  // }

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtr0fxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    })
  })

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
})