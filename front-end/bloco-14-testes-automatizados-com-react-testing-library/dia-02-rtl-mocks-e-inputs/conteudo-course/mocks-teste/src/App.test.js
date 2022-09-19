import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// it('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  // global.fetch = (url) => {
  //   return Promise.resolve({
  //     json: () => Promise.resolve({ 
  //       id: '7h3oGtr0fxc',
  //       joke: 'Whiteboards ... are remarkable.',
  //       status: 200,
  //     })
  //   })
  // }

//   global.fetch = jest.fn().mockResolvedValue({
//     json: jest.fn().mockResolvedValue({
//       id: '7h3oGtr0fxc',
//       joke: 'Whiteboards ... are remarkable.',
//       status: 200,
//     })
//   })

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
// })

it('Verifica se ao renderizar a página a primeira piada é exibida na tela', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      joke: 'Did you hear about the cow who jumped over the barbed wire fence? It was udder destruction.',
    })
  })
  render(<App />);
  const joke = await screen.findByText('Did you hear about the cow who jumped over the barbed wire fence? It was udder destruction.');
  expect(joke).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      joke: "What do you call a duck that gets all A's? A wise quacker.",
    })
  })
  render(<App />);
  const newJoke = await screen.findByText("What do you call a duck that gets all A's? A wise quacker.")
  expect(newJoke).toBeInTheDocument();
  // expect(fetch).toHaveBeenCalledTimes(2);

})