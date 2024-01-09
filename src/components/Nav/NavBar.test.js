import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders test test', () => {
    render(<NavBar />);
    const linkElement = screen.getByText('Here is a test');
    expect(linkElement).toBeInTheDocument();
  });
  