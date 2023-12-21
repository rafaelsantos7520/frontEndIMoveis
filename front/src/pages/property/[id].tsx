import React from 'react';
import IProperty from '@/interfaces/propertie.interface';
import { properties } from '@/moks/properties.mok';
import Image from 'next/image';



interface PropertyPageProps {
  property: IProperty;
}





const PropertyDetailPage: React.FC<PropertyPageProps> = ({ property }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:col-span-2 lg:col-span-3">
          <h1 className="text-3xl font-semibold mb-4">{property.titulo}</h1>
          <div className="mb-4">
            {property.imgUrls.map((url, index) => (
              <div key={index} className="mb-2">
                <Image
                  src={url}
                  alt={`Property ${property.id} - ${index + 1}`}
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
          <div className="text-lg">{property.descricao}</div>
        </div>
        <div className="lg:col-span-1">
          <div className="text-lg">
            <p>Quartos: {property.quartos}</p>
            <p>Banheiros: {property.banheiros}</p>
            <p>Preço: R$ {property.preco}</p>
            <p>Cidade: {property.cidade}</p>
            <p>Bairro: {property.bairro}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

// A função getServerSideProps permanece a mesma conforme mencionado anteriormente.


// Esta função é usada para gerar as páginas dinâmicas com base no ID da propriedade
export async function getServerSideProps(context: { query: { id: any; }; }) {
  const { id } = context.query;
    const property = properties.find((property) => property.id === parseInt(id));
    console.log(id)

  if (!property) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      property,
    },
  };
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 