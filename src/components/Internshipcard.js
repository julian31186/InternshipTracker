import axios from "axios";



function Internshipcard() {

  async function fetchData() {
    //should pull data from mongo or else it defeats the purpose of even using mongo 
    await axios.get("http://localhost:3001/create").then(
      (response) => {
        console.log(response.data);
      }
    )
  }



  return (
    <div className="flex  items-center justify-center  h-36 rounded-md bg-white border-slate-300 border-4">
      <div className="flex  mb-20 flex-row gap-96">
        <div>
          <h1 className="mt-12 font-bold">Title</h1>
          <p className="mt-8">rer</p>
        </div>

        <div>
          <h1 className="mt-12 font-bold">Position</h1>
          <p className="mt-8">TESTING</p>
        </div>



        <button onClick={fetchData}>test</button>





        <div>
          <h1 className="mt-12 font-bold">Link</h1>
          <p className="mt-8">TESTING</p>
        </div>

        <div>
          <h1 className="mt-12 font-bold">Status</h1>
          <p className="mt-8">TESTING</p>
        </div>
      </div>
    </div>
  );
}

export default Internshipcard;
