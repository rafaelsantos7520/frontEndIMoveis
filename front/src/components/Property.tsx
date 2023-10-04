import React from "react";
import Image from "next/image";
import {
  FaBed,
  FaWhatsapp,
  FaLocationArrow,
  FaShower,
  FaBuilding,
  FaHSquare,
  FaCar,
  FaRuler,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import IProperty from "@/interfaces/propertie.interface";

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card  md:p-0 border shadow-xl rounded-xl">
      <div className="row">
        <div className="col-md-4">
          <Carousel
            showThumbs={false}
            transitionTime={800}
            showArrows={true}
            className=""
          >
            {property.imgUrls.map((url, index) => (
              <div key={index} className="carousel-image">
                <div className="h-44">
                  <Image
                    priority
                    src={url}
                    alt={`Property ${property.id} - ${index + 1}`}
                    quality={100}
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="col-md-8 p-4 md:p-6 ">
          <div className="property-details">
            <h2 className="font-semibold text-xl mb-4">{property.titulo}</h2>
            <p className="text-zinc-500 text-lg md:h-28">
              {property.descricao}
            </p>
            <div className="mt-5">
              <div className="flex gap-6 items-center mb-6">
                <FaLocationArrow />
                <p>{`${property.cidade}, ${property.bairro}`}</p>
              </div>
              <div className="property-icons flex gap-2">
                <div className="flex gap-2 items-center">
                  <FaBed className="text-blue-500" />
                  {property.quartos}
                </div>
                <div className="flex gap-2 items-center">
                  <FaShower className="text-blue-500" />
                  {property.banheiros}
                </div>
                <div className="flex gap-2 items-center">
                  <FaCar className="text-blue-500" />
                  {property.vagas_garagem}
                </div>
                <div className="flex gap-2 items-center">
                  <FaRuler className="text-blue-500" />
                  {`${property.tamanho}m²`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
