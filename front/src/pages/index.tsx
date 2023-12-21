import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertyCard from "@/components/Property";
import WhatsAppButton from "@/components/wattsAppButton";
import IProperty from "@/interfaces/propertie.interface";
import api from "../../services/api";
import { Card, Skeleton } from "@nextui-org/react";

const Home = () => {
  const [properties, setProperties] = useState<IProperty[]>([]); // Tipando o estado como um array de IProperty
  const [isLoading, setIsLoading,] = useState(true);
  

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await api.get("properties/");
        // if (response.status === 200) {
        console.log(response)
          setProperties(response.data as IProperty[]); // Definindo o tipo de dados como IProperty[]
        // } else {
        //   throw new Error("Erro ao buscar propriedades");
        // }
      } catch (err) {
        toast.error("Erro ao buscar propriedades. Por favor, tente novamente.");
      } finally {
        setIsLoading(false); // Define isLoading como falso após a busca, independentemente do resultado
      }
    }

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto mt-2 flex-grow">
        {isLoading ? ( // Verifica se está carregando
          <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-48 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        ) : properties.length === 0 ? ( // Verifica se não há propriedades
          <div className="flex justify-center items-center h-64">
            {/* Se não houver propriedades, exibe uma mensagem */}
            <p>Nenhuma propriedade encontrada.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6 gap-2 md:gap-6 overflow-x-auto">
            {properties.map((property: IProperty) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
      <WhatsAppButton phoneNumber={"+5521999281052"} />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
