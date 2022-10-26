import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { UserData } from "../types/userData";
import { checkLoginInfoAndState } from "../utils/checkLoginInfoAndState";
import { Loader } from "@navikt/ds-react";
export interface UserStateInterface {
  name: string;
  navIdent: string;
}

export const UserStateContext = createContext<UserStateInterface>({
  navIdent: "",
  name: "",
});

export const UserStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserStateInterface>({
    name: "",
    navIdent: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function getLoggedInUser() {
      setIsLoading(true);
      const retrieveduser: UserData = await checkLoginInfoAndState();
      if (retrieveduser) {
        setUser(retrieveduser);
      }
      setIsLoading(false);
    }
    getLoggedInUser();
  }, [router]);

  if (isLoading) {
    return <Loader variant="neutral" size="large" title="venter..." />;
  }

  const { name, navIdent } = user;

  return (
    <UserStateContext.Provider
      value={{
        name,
        navIdent,
      }}
    >
      {children}
    </UserStateContext.Provider>
  );
};
