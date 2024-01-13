import ContactForm from "./ContactForm"
import PageHeading from "./PageHeading"

const Contact = () => {
  return (
    <section className="w-full">
      <PageHeading>Contact Info</PageHeading>
      <div className="flex flex-col gap-4 py-8">
        <div>
          <p>Email:</p>
          <span>example@example.com</span>
        </div>
        <div>
          <p>Phone:</p>
          <span>555-555-5555</span>
        </div>
        <div>
          <p className="flex">Address:</p>
          <span className="flex flex-col">
            <span>123 Main Street,</span>
            <span>London,</span>
            <span>SW1A 1AA,</span>
            <span>United Kingdom</span>
          </span>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}

export default Contact