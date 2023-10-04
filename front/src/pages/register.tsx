import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Header/>
    <div className="sm:max-h-screen p-4  md:min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-6 rounded-md bg-white shadow-lg border">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-black
           mb-2">
            Crie uma nova conta
          </h2>
          <p className="text-gray-600"></p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-semibold mb-2"
            >
              Nome
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                placeholder="Seu nome"
              />
              <FaUser className="absolute text-blue-700 left-3 top-3" />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email-address"
              className="block text-gray-600 font-semibold mb-2"
            >
              Endereço de E-mail
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
              <FaEnvelope className="absolute text-gray-500 left-3 top-3" />
            </div>
          </div>
          <div className="mb-6">
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
                autoComplete="new-password"
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
              Cadastre-se
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-blue-500">
              Faça login agora.
            </Link>
          </p>
        </div>
      </div>
    </div>    
    </>

  );
};

export default Register;
