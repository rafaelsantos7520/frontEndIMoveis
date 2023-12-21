import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import api from '../../services/api';
import Header from '@/components/Header';
import Link from 'next/link';
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = { ...errors };

    if (formData.name === '') {
      formValid = false;
      newErrors.name = true;
    }

    if (formData.email === '') {
      formValid = false;
      newErrors.email = true;
    }

    if (formData.password === '' || formData.password.length < 8) {
      formValid = false;
      newErrors.password = true;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await api.post('/users', formData);
      toast.success("cadastro realizado com sucesso ");
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    }
    catch (error: any) {

      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um código de status
        // que cai fora do intervalo de 2xx
        toast.error(error.response.data.message);
      } else if (error.request) {
        // A requisição foi feita, mas não houve resposta
        console.log(error.request);
        toast.error("Ops... Ocorreu algo de errado! Tente novamente mais tarde");
      } else {
        // Algo aconteceu na configuração da requisição que acionou um erro
        console.log('Error', error.message);
        toast.error("Ops... Ocorreu algo de errado! Tente novamente mais tarde");
      }

    }

  };

  return (
    <>
      <Header />
      <div className="sm:max-h-screen p-4 md:min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-full p-6 rounded-md bg-white shadow-lg border">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-black mb-2">
              Crie uma nova conta
            </h2>
            <p className="text-gray-600"></p>
          </div>
          <form onSubmit={handleForm}>
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
                  onChange={(e) => {
                    handleFormEdit(e, 'name');
                  }}
                  value={formData.name}
                  className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10`}
                  placeholder="Seu nome"
                />
                <FaUser className="absolute text-blue-700 left-3 top-3" />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  O nome é obrigatório.
                </p>
              )}
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
                  onChange={(e) => {
                    handleFormEdit(e, 'email');
                  }}
                  value={formData.email}
                  className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10`}
                  placeholder="Seu e-mail"
                />
                <FaEnvelope className="absolute text-gray-500 left-3 top-3" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  O e-mail é obrigatório.
                </p>
              )}
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
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    handleFormEdit(e, 'password');
                  }}
                  value={formData.password}
                  className={`w-full px-4 py-2 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10`}
                  placeholder="Sua senha"
                />
                <FaLock className="absolute text-gray-500 left-3 top-3" />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  A senha deve ter pelo menos 8 caracteres.
                </p>
              )}
            </div>
            <div className="text-center">
              <Button
                color="primary"
                radius="md"
                fullWidth={true}
                type="submit"
              >
                Cadastrar
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-blue-500">
                Faça login agora.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
