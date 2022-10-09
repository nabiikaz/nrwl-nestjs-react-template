import { useState } from 'react';

export type CurrentUser =
  | {
      uid: string;
    }
  | undefined;

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    uid: 'uid',
  });

  return { currentUser };
};
