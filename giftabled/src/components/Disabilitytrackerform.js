import React, {useState} from "react";

function Disabilitytrackerform() {
  // function ImageUrl(e) {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = () => {
  //       var filecontent = reader.result;
  //       setImage(filecontent);
  //     };
  //   }

  const [parentName, setParentName] = useState("");
  function handleChange(){
    setParentName(parentName)
  }
  return (
    <div className="container-fluid">
      <h3 style={{ textAlign: "center" }}>Disability Tracker Form</h3>
      <div className="container my-4">
        <form>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Name of the parent</label>
            <input type="text" onChange={handleChange} value={parentName} className="form-control" />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Relationship</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control" />
          </div>
          <div
            class="input-group mb-3 input-group-sm mb-3"
            style={{ width: "50%" }}
          >
            <span class="input-group-text">
              Updates regarding the disable person
            </span>
            <textarea
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Height</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Weight</label>
            <input type="number" className="form-control" />
          </div>
          <div className="input-group mb-3 my-3" style={{ width: "50%" }}>
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload Current Photo
            </label>
          </div>
          <br />

          <div>
            <label class="form-label">Bluish color of lips:</label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/11.-Bluish-color-of-lips-150x150.jpg" />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-1"
                value="Yes"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-1"
                value="No"
              />
              <label class="form-check-label">No</label>
            </div>
          </div>

          <div>
            <label class="form-label"> White spot in eyes: </label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/3.-White-spot-in-eyes-150x150.jpg" />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-2"
                value="Yes"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-2"
                value="No"
              />
              <label class="form-check-label">No</label>
            </div>
          </div>


          <div>
            <label class="form-label">Fits/ unconsciousness:</label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/17.-Epilepsy-150x150.jpg" />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-3"
                value="Yes"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-3"
                value="No"
              />
              <label class="form-check-label">No</label>
            </div>
          </div>



          <div>
            <label class="form-label">Limp walking of your child: </label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/8.-Limp-walking-of-the-child-side-view-150x150.jpg" />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-4"
                value="Yes"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-4"
                value="No"
              />
              <label class="form-check-label">No</label>
            </div>
          </div>

          <div>
            <label class="form-label">Extremely short neck: </label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/7.-Extremely-short-neck-150x150.jpg" />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-5"
                value="Yes"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="group-disab-5"
                value="No"
              />
              <label class="form-check-label">No</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Disabilitytrackerform;
