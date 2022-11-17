import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import App from '../App';

describe('Test the Reservations', () => {
  test('Test the App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const linkElement = screen.getByText(/Space Travelers/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the reserved missions page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Profile'));
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });

  test('renders the reserved missions page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Profile'));
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
});

describe('Test the Reservations', () => {
  test('Test the App component', () => {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
