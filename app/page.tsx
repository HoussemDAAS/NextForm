import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h1 className="mb-6 text-center text-3xl font-bold">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}
