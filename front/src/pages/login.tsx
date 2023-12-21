import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "@/contexts/userContext";


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { loginUser, loading, user } = useContext(UserContext);
  console.log(user)

  const [errors, setErrors] = useState({
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

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = { ...errors };

    if (formData.email === '') {
      formValid = false;
      newErrors.email = true;
    }

    if (formData.password === '') {
      formValid = false;
      newErrors.password = true;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }


    loginUser(formData)
    setFormData({
      email: '',
      password: '',
    });
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
                  value={formData.email}
                  onChange={(e) => handleFormEdit(e, 'email')}
                  className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10`}
                  placeholder="Seu e-mail"
                />
                <FaUser className="absolute text-gray-500 left-3 top-3" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  O e-mail é obrigatório.
                </p>
              )}
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
                  value={formData.password}
                  onChange={(e) => handleFormEdit(e, 'password')}
                  className={`w-full px-4 py-2 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10`}
                  placeholder="Sua senha"
                />
                <FaLock className="absolute text-gray-500 left-3 top-3" />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  campo obrigatorio
                </p>
              )}
            </div>
            <div className="text-center">
              <Button color="primary" radius="md" fullWidth={true} type="submit">
                Login
              </Button>
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
      <ToastContainer />
    </>
  );
};

export default Login;
