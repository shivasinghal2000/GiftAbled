import React from "react";

function Disabilitytrackerform() {
    
  // function ImageUrl(e) {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = () => {
  //       var filecontent = reader.result;
  //       setImage(filecontent);
  //     };
  //   }
  return (
    <div className="container-fluid">
      <h3 style={{ textAlign: "center" }}>Disability Tracker Form</h3>
      <div className="container my-4">
        <form>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Name of the parent</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Relationship</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control" />
          </div>
          <div class="input-group mb-3 input-group-sm mb-3" style={{ width: "50%" }}> 
            <span class="input-group-text">Updates regarding the disable person</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
            >
            </textarea>
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Height</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Weight</label>
            <input type="number" className="form-control" />
          </div>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address1
              </label>
              <input
                style={{ width: "50%" }}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder=""
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                style={{ width: "50%" }}
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder=""
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Pin Code
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="input-group mb-3 my-3" style={{ width: "50%" }}>
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload Current Photo
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Disabilitytrackerform;
