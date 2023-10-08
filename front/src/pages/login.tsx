import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Lógica de login aqui, por exemplo, enviar solicitação para um servidor
  };

  return (
    <>
      <Header />
      <div className="sm:max-h-screen md:min-h-screen flex p-2 items-center justify-center">
        <div className="max-w-md w-full p-6 rounded-md border bg-white shadow-lg mt-6 md:mt-0">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
              Bem-vindo
            </h2>
            <p className="text-gray-600">Faça login na sua conta</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email-address"
                className="block text-gray-600 font-semibold mb-2"
              >
                E-mail
              </label>
              <div className="relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                  placeholder="Seu e-mail"
                />
                <FaUser className="absolute text-gray-500 left-3 top-3" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-semibold mb-2"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                  placeholder="Sua senha"
                />
                <FaLock className="absolute text-gray-500 left-3 top-3" />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="mt-4 text-md md:text-lg text-center">
            <p className=" text-gray-600">
              Ainda não tem uma conta?{" "}
              <Link href="/register" className="text-blue-500">
                Crie uma agora.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
