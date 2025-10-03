import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md rounded-lg bg-stone-100 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-stone-800">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}
