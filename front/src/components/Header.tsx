import React, { useContext, useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { UserContext } from "@/contexts/userContext";

export default function App() {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);


  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = async () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar className="shadow" >
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {!isLoggedIn ? null : (
            <>
              <NavbarItem >
                <Link href="#" aria-current="page">
                  Contato
                </Link>
              </NavbarItem>
              <NavbarItem >
                <Link href="/criarPoster" aria-current="page">
                  Novo anuncio
                </Link>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          {!isLoggedIn ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button as={Link} color="primary" variant="flat" href="/login">Login</Button>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="/register" variant="flat">
                  Cadastro
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <Button color="danger" onClick={handleLogout} variant="flat">
                  Logout
                </Button>
              </NavbarItem>
              <NavbarItem>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
}
