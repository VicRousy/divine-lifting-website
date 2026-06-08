import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#d8d2c4]">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with Divine Lifting International School. Reach out for admissions, inquiries, or general information — we'd love to hear from you." />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
}
