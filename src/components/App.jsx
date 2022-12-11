import { FeedbackPage } from 'pages/FeedbackPage';
import { Footer } from './Footer';
import React from 'react';
import GlobalStyle from 'styles/globalStyle';
import { ThemeProvider } from "styled-components";
import theme from 'styles/theme';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FeedbackPage />
        <Footer />
      </ThemeProvider>
    </>
  );
};
