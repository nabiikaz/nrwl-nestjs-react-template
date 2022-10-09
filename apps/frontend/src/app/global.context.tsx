import { createContext } from 'react';
import { CurrentUser } from '../core';

export type TGlobalContext =
  | {
      currentUser: CurrentUser;
    }
  | Record<string, never>;

export const GlobalContext = createContext<TGlobalContext>({});
