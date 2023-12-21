import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { LoginData, UseResponseData, UseRequestData } from "../../schemas/users.schemas";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface IUserProviderData {
    createUser: (data: UseRequestData) => Promise<void>;
    loginUser: (data: LoginData) => Promise<void>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user: UseResponseData | null;
}

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<UseResponseData | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("user_id");
            if (token && userId) {
                const response = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);

            }
        } catch (error: any) {
            // Tratamento de erros
            if (error.response) {
                // O servidor respondeu com um código de status fora do intervalo de 2xx
                // Exemplo: toast.error(error.response.data.message);
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta
                // Exemplo: toast.error("Ops... Ocorreu algo de errado! Tente novamente mais tarde");
            } else {
                // Erro na configuração da requisição que acionou um erro
                // Exemplo: toast.error("Ops... Ocorreu algo de errado! Tente novamente mais tarde");
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchUserData();
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loginUser = async (loginData: LoginData) => {

        try {
            const response = await api.post("/login", loginData);

            // Exemplo de sucesso

            const token = response.data.token;
            localStorage.setItem("token", token);
            localStorage.setItem("user_id", response.data.user.id);
            setUser(response.data.user);
            router.push('/');

        } catch (error: any) {
            // Tratamento de erros
            if (error.response) {
                // A requisição foi feita e o servidor respondeu com um código de status
                // que cai fora do intervalo de 2xx
                toast.error(error.response.data.message);
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta
                console.log(error.request);
                toast.error("Ops... Ocorreu algo de errado! Tente novamente mais tarde");
            }
        }
    };

    const createUser = async (registerData: UseRequestData) => {
        try {
            setLoading(true);
            const response = await api.post("/users", registerData);
            toast.success("cadastro realizado com sucesso ");
        } catch (error: any) {
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
                console.log("Error", error.message);
                toast.error("Ops... Ocorreu algo de errado! Tente novamente mais tarde");
            }
        } finally {
            setLoading(false);
        }
    };

    // const logout = () => {
    //     localStorage.clear();
    //     window.location.reload();
    // };

    return (
        <>
            <UserContext.Provider
                value={{
                    loginUser,
                    createUser,
                    loading,
                    setLoading,
                    user,
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    );
};

export default UserProvider;
