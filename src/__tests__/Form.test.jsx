/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../component/Form.jsx';


// init
test('all imputs should be empty in initial form', () => {
  // render
  render(<Form />);

  // find elements with matcher
  const emailElement = screen.getByRole("textbox", { name: /email/i });
  const passwordElement = screen.getByLabelText("password");
  const confirmPasswordElement = screen.getByLabelText("confirm password");

  // assertion , expectation
  expect(emailElement).toHaveValue("");
  expect(passwordElement).toHaveValue("");
  expect(confirmPasswordElement).toHaveValue("");
})

// init - types
test('should be able to type an email', async () => {
  // render
  render(<Form />);

  // find elements with matcher
  const emailElement = screen.getByRole("textbox", { name: /email/i });

  // type email
  await userEvent.type(emailElement, "esrafil.elahi@gmail.com");

  // assertion , expectation
  expect(emailElement).toHaveValue("esrafil.elahi@gmail.com");
})

test("should be able to type a password", async () => {
  // render
  render(<Form />);

  // find element
  const passwordElement = screen.getByLabelText("password");

  // type password
  await userEvent.type(passwordElement, "123456")

  // assertion
  expect(passwordElement).toHaveValue("123456")

})

test('should be able to type a confirm password', async () => {
  // render
  render(<Form />);

  // find element
  const confirmPasswordElement = screen.getByLabelText("confirm password");

  // type confirm password
  await userEvent.type(confirmPasswordElement, "123456");

  // assertion
  expect(confirmPasswordElement).toHaveValue("123456")

})

// ============================== error handling ==============================