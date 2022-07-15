function Status() {
    return (
      <div class="dropdown">
        <label tabindex="0" class="btn m-1">
        Status
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Pending</a>
          </li>
          <li>
            <a>Accepted</a>
          </li>
          <li>
            <a>Rejected</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Status;
  