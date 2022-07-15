function Newinternshipcard() {
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
          <h3 class="text-lg font-bold"></h3>

          <div>
            <p class="py-4">
              <p>Title</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
              />
              <p>Position</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
              />
              <p>Link</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
              />
              <select class="select w-full max-w-xs">
                <option disabled selected>
                  Status
                </option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
            </p>
            <button class="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newinternshipcard;
