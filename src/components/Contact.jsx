import { useState } from "react"
import ContactForm from "./ContactForm"
import PageHeading from "./PageHeading"

const Contact = () => {
  const [ formStatus, setFormStatus ] = useState('')

  return (
    <section className="w-full text-[#030637]">
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
      {!formStatus && <ContactForm setFormStatus={setFormStatus}/>}
      {formStatus && 
        <div>
          <p>Message Submitted!</p>
        </div>
      }
    </section>
  )
}

export default Contact