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

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import IProperty from "@/interfaces/propertie.interface";

interface PropertyCardProps {
  property: IProperty;
}

  const handleClick = () => {
    window.open(`https://wa.me/+5521999281052`, "_blank");
  };


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
                <div className="h-44 flex items-center justify-center">
                  <Image
                    priority
                    src={url}
                    alt={`Property ${property.id} - ${index + 1}`}
                    quality={100}
                    width={800}
                    height={600}
                    style={{
                      boxShadow: "initial",
                      borderRadius: "10px  10px",
                      width: "97%",
                      height: "95%",
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
            <p className="text-zinc-500 text-lg md:h-52 mb-2 leading-normal">
              {property.descricao}
            </p>
            <div className="mt-6">
              <div className="flex gap-6 items-center mb-2">
                <FaLocationArrow className="text-blue-500" />
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
                {/* <div className="flex gap-2 items-center">
                  <FaRuler className="text-blue-500" />
                  {`${property.tamanho}m²`}
                </div> */}
              </div>
              <button
                onClick={handleClick}
                className="w-[100%] border border-blue-500 rounded-md mt-3 p-1 bg-blue-500 text-white font-semibold hover:bg-white hover:text-blue-500"
              >
                mais informações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
