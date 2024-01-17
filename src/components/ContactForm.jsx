import PropTypes from 'prop-types'

const ContactForm = ({ setFormStatus }) => {
  return (
    <form action="submit" onSubmit={() => setFormStatus('submitted')} className="flex flex-col w-full">
      <label htmlFor="name" className="flex flex-col">
        Name:
        <input type="text" id="name" placeholder="Enter full name here" className="text-black"/>
      </label>
      <label htmlFor="email" className="flex flex-col">
        Email:
        <input type="text" id="email" placeholder="Enter email here" className="text-black"/>
      </label>
      <label htmlFor="message" className="flex flex-col">
        Message:
        <input type="text" id="message" className=" flex resize h-32 text-black" placeholder="Enter your message here"/>
      </label>
      <button type="submit" className="flex underline py-4">Submit</button>
    </form>
  )
}

export default ContactForm

ContactForm.propTypes = {
  setFormStatus: PropTypes.func
}