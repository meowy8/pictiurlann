const ContactForm = () => {
  return (
    <form action="submit" className="flex flex-col w-full">
      <label htmlFor="" className="flex flex-col">
        Name:
        <input type="text" placeholder="Enter full name here" className="text-black"/>
      </label>
      <label htmlFor="" className="flex flex-col">
        Email:
        <input type="text" placeholder="Enter email here" className="text-black"/>
      </label>
      <label htmlFor="" className="flex flex-col">
        Message:
        <input type="text" className=" flex resize h-32 text-black" placeholder="Enter your message here"/>
      </label>
      <button type="submit" className="flex underline py-4">Submit</button>
    </form>
  )
}

export default ContactForm