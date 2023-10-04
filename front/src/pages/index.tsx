import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertyCard from "@/components/Property";
import WhatsAppButton from "@/components/wattsAppButton";
import { properties } from "@/moks/properties.mok";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto mt-2 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6 gap-2 md:gap-6 overflow-x-auto">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      <WhatsAppButton phoneNumber={"+5521999281052"} />
      <Footer />
    </div>
  );
};

export default Home;
