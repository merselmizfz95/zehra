import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingForm } from "./BookingForm";
import { getServices } from "@/lib/data";

export const metadata = {
  title: "Book Appointment | Zehra Glam",
  description: "Schedule your beauty treatment at Zehra Glam.",
};

export default async function BookingPage() {
  const services = await getServices();
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <BookingForm services={services} />
      </main>
      <Footer />
    </>
  );
}
