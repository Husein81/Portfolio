import { services } from "../../data/services";
import ServiceCard from "../services/ServiceCard";
import Section from "../ui/Section";

const Services = () => {
  return (
    <Section
      id="services"
      index="07"
      label="Services"
      title="What I build, and the fastest way to start."
      lede="From business systems to customer-facing applications, I build software designed around how your business actually works. Tap a service below to open WhatsApp with the details already filled in."
    >
      <ul className="grid-12">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </ul>
    </Section>
  );
};

export default Services;
