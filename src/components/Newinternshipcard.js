import { useState } from "react";
import axios from "axios";

function Newinternshipcard() {

    const [input,setInput] = useState({
        title: '',
        position: '',
        link: '',
        status: ''
});

    function handleChange(event) {
        const { name, value } = event.target;
        
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault();
        const newInternship = {
            title: input.title,
            position: input.position,
            link: input.link,
            status: input.status
        }
        console.log(newInternship)

        axios.post('http://localhost:3001/create', newInternship)
    }


  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          

          <div>
            <p class="py-4">
              <p>Title</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
                onChange={handleChange}
                value = {input.title}
                name="title"
              />
              <p>Position</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
                onChange={handleChange}
                value = {input.position}
                name="position"
              />
              <p>Link</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
                onChange={handleChange}
                value = {input.link}
                name="link"
              />
              <select onChange={handleChange} class="select w-full max-w-xs" value={input.status} name="status">
                <option disabled selected>
                  Status
                </option>
                <option>...</option>
                <option name="Pending">Pending</option>
                <option name="Accepted">Accepted</option>
                <option name="Rejected">Rejected</option>
              </select>
            </p>
            <button onClick={handleSubmit} class="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Newinternshipcard;
