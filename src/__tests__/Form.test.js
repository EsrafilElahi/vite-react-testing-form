/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../component/Form';
import '@testing-library/jest-dom/extend-expect'; // Import this to extend Jest expect with @testing-library/jest-dom matchers

// success
it('all imputs should be empty in initial form', () => {
  // render
  render(<Form />);

  // find elements with matcher
  const emailElement = screen.getByRole('textbox', { name: /email/i});
  const passwordElement = screen.getByRole('textbox', {name: /password/i});
  const confirmPasswordElement = screen.getByRole('textbox', { name: /confirmPassword/i});

  // assertion , expectation
  expect(emailElement).toHaveValue('');
  expect(passwordElement).toHaveValue('');
  expect(confirmPasswordElement).toHaveValue('');

})
