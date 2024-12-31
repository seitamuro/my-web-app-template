import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.REACT_APP_USER_POOL_ID!,
      userPoolClientId: import.meta.env.REACT_APP_USER_POOL_CLIENT_ID!,
      identityPoolId: import.meta.env.REACT_APP_IDENTITY_POOL_ID!,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <Authenticator>
    <StrictMode>
      <App />
    </StrictMode>
  </Authenticator>
);
