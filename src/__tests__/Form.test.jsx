/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../component/Form.jsx';
import { cleanup } from '@testing-library/react';
import { beforeEach } from 'vitest';


afterEach(cleanup);

const clickSubmitButton = async () => {
  const submitBtn = screen.getByRole("button", { name: /submit/i });
  await userEvent.click(submitBtn);
}

describe("Form Tests", () => {
  beforeEach(() => {
    render(<Form />)
  })

  describe("Init & Success", () => {
    // init, type, click
    test('all imputs should be empty in initial form', () => {    
      // find elements with matcher
      const emailElement = screen.getByRole("textbox", { name: /email/i });
      const passwordElement = screen.getByLabelText("password");
      const confirmPasswordElement = screen.getByLabelText("confirm password");
    
      // assertion , expectation
      expect(emailElement).toHaveValue("");
      expect(passwordElement).toHaveValue("");
      expect(confirmPasswordElement).toHaveValue("");
    })

    test('should be able to type an email', async () => {
      // find elements with matcher
      const emailElement = screen.queryByRole("textbox", { name: /email/i });
    
      // type email
      await userEvent.type(emailElement, "esrafil.elahi@gmail.com");

      // assertion , expectation
      expect(emailElement).toHaveValue("esrafil.elahi@gmail.com");
    })
    test("should be able to type a password", async () => {
      // find element
      const passwordElement = screen.queryByLabelText("password");
    
      // type password
      await userEvent.type(passwordElement, "123456")
    
      // assertion
      expect(passwordElement).toHaveValue("123456")
    
    })
    test('should be able to type a confirm password', async () => {
      // find element
      const confirmPasswordElement = screen.queryByLabelText("confirm password");
    
      // type confirm password
      await userEvent.type(confirmPasswordElement, "123456");
    
      // assertion
      expect(confirmPasswordElement).toHaveValue("123456")
    
    })
  })

  describe("Error", () => {
    // Email
    test('email empty error', async () => {
      // email error => empty
      const emailErrorMessageEmpty = screen.queryByText('Email is required');
      // email error => invalid
      const emailErrorMessageInvalid = screen.queryByText('Invalid email format');
      
      // assertion empty & invalid
      expect(emailErrorMessageEmpty).not.toBeInTheDocument();
      expect(emailErrorMessageInvalid).not.toBeInTheDocument();
        
      // submit empty
      await clickSubmitButton();

      // assertion empty
      const emailErrorMessageEmpty2 = screen.queryByText('Email is required');
      expect(emailErrorMessageEmpty2).toBeInTheDocument();
    
    
    })
    test('email invalid error', async () => {    
      // email element
      const emailElement = screen.getByRole('textbox', { name: /email/i });
      
      // type invalid email
      await userEvent.type(emailElement, 'invalid_email@email');
      
      // submit invalid
      await clickSubmitButton();

      // assertion invalid
      const emailErrorMessageInvalid2 = screen.queryByText("Invalid email format");
      expect(emailErrorMessageInvalid2).toBeInTheDocument();
    })
    
    // Password
    test('password empty error', async () => {    
      // password error => empty
      const passwordErrorMessageEmpty = screen.queryByText("Password is required");
      // password error => invalid
      const passwordErrorMessageInvalid = screen.queryByText("Password must be at least 6 characters long");
    
      // assertion empty & invalid
      expect(passwordErrorMessageEmpty).not.toBeInTheDocument();
      expect(passwordErrorMessageInvalid).not.toBeInTheDocument();
    
      // submit empty
      await clickSubmitButton();

      // assertion empty
      const passwordErrorMessageEmpty2 = screen.getByText("Password is required");
      expect(passwordErrorMessageEmpty2).toBeInTheDocument();
    })
    test("password invalid error", async () => {    
      // find password element
      const passwordElement = screen.queryByLabelText("password");
    
      // type invalid password
      await userEvent.type(passwordElement, "1234");
    
      // submit invalid
      await clickSubmitButton();

      // assertion invalid
      const passwordErrorMessageInvalid2 = screen.queryByText("Password must be at least 6 characters long");
      expect(passwordErrorMessageInvalid2).toBeInTheDocument();
    })
    
    // confirm Password
    test('confirm password empty error', async () => {    
      // password error => empty
      const confirmPasswordErrorMessageEmpty = screen.queryByText("Please confirm your password");
      // password error => invalid
      const passwordErrorMessageInvalid = screen.queryByText("Passwords don't match");
    
      // assertion empty & invalid
      expect(confirmPasswordErrorMessageEmpty).not.toBeInTheDocument();
      expect(passwordErrorMessageInvalid).not.toBeInTheDocument();
    
      // submit empty
      await clickSubmitButton();

      // assertion empty
      const confirmPasswordErrorMessageEmpty2 = screen.queryByText("Please confirm your password");
      expect(confirmPasswordErrorMessageEmpty2).toBeInTheDocument();
    })
    test("confirm password invalid error", async () => {    
      // find password & confirm password element
      const passwordElement = screen.queryByLabelText("password");
      const confirmPasswordElement = screen.queryByLabelText("confirm password");
    
      // type invalid password
      await userEvent.type(passwordElement, "12345");
      await userEvent.type(confirmPasswordElement, "1234");
    
      // submit invalid
      await clickSubmitButton();

      // assertion invalid
      const passwordErrorMessageInvalid2 = screen.queryByText("Passwords don't match");
      expect(passwordErrorMessageInvalid2).toBeInTheDocument()
    })
  })
})
