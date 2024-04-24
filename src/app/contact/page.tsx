export default function ContactPage() {
  return (
    <div className="container mx-auto h-screen py-12 max-w-4xl">
      <h1 className="text-4xl mb-8">Contact</h1>

      <div className="text-lg">
        If your looking for a sponsored video or just want to reach out and ask
        me a question, feel free to send me an email or join my discord{" "}
        <a
          className="hover:underline text-blue-400 hover:text-blue-500"
          href="mailto:webdevcody@gmail.com"
        >
          webdevcody@gmail.com
        </a>
      </div>
    </div>
  );
}
