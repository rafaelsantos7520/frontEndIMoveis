import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <header className="h-20  border py-1 p-2 shadow-md">
      <div className="container mx-auto flex  justify-between items-center">
        {/* <Image
          src={"/assets/Andreia.png"}
          alt={"logo image"}
          width={100}
          height={100}
          style={{
              width: "auto",
              height: "auto",
                    }}
        /> */}
        <h1 className="text-md md:text-3xl font-bold">Andrea Gomes</h1>
        <nav className="flex flex-wrap gap-4">
          {!isLoginPage && ( // Renderize o botão de login somente se não estiver na página de login
            <Link href="login" className="bg-transparent font-semibold p-2 rounded-md hover:underline underline-offset-4">Login</Link>
          )}
          <Link href="/" className="bg-transparent font-semibold p-2 rounded-md hover:underline underline-offset-4">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;



