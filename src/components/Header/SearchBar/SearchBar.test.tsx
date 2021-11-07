import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

describe('it should be used to test snapshots', () => {
  it('should mach the snapshot', () => {
    const app = render(<SearchBar search="" onInput={() => {}} onSearch={() => {}}  />);
    expect(app).toMatchSnapshot(); 
  });
});

describe('Search component works', () => {
  it('should have a placeholder', () => {
    render(<SearchBar search="" onInput={() => {}} onSearch={() => {}} />);
    expect(screen.queryByPlaceholderText('Start search and press enter')).toBeInTheDocument();
  });
  it('should handle search', () => {
    const onChange = jest.fn();
    render(<SearchBar search="" onInput={onChange} onSearch={() => {}} />);
    userEvent.type(screen.getAllByPlaceholderText('Start search and press enter')[0], 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
