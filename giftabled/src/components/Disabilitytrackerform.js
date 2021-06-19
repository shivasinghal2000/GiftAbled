import React, { useState,useEffect } from "react";
import { db } from "../util/firebase";
function Disabilitytrackerform() {
    const [disabletracker,setDisabletracker]=useState();
    useEffect(() => {
        let isSubscribed = true;
        db.collection("disabletracker").onSnapshot((snap) => {
          const list = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDisabletracker(list);
          return () => (isSubscribed = false);
        });
      }, []);

  const [parentName, setParentName] = useState();
  const [relationship, setRelationship] = useState();
  const [phone, setPhone] = useState();
  const [updates, setUpdate] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [photo, setPhoto] = useState();
  const [color, setColor] = useState();
  const [eyes, setEyes] = useState();
  const [fit, setFit] = useState();
  const [limp, setLimp] = useState();
  const [short, setShort] = useState();
  function ImageUrl(e) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        var filecontent = reader.result;
        setPhoto(filecontent);
      };
      console.log(photo);
    }
  function Adddata(e)
  {
      e.preventDefault();
      db.collection("disabletracker").add({
        parentName,relationship,phone,updates,height,weight,color,eyes,fit,limp,short
      })
  }
  return (
    <div className="container-fluid">
      <h3 style={{ textAlign: "center" }}>Disability Tracker Form</h3>
      <div className="container my-4">
        <form onSubmit={Adddata}>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Name of the parent</label>
            <input
              type="text"
            //   value={parentName}
              className="form-control"
              onChange={(e) => setParentName(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Relationship</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRelationship(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div
            className="input-group mb-3 input-group-sm mb-3"
            style={{ width: "50%" }}
          >
            <span className="input-group-text">
              Updates regarding the disable person
            </span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              onChange={(e) => setUpdate(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Height</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Weight</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 my-3" style={{ width: "50%" }}>
            <input type="file" className="form-control" id="inputGroupFile02"
            onChange={(e)=>ImageUrl(e.target.value)}
             />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload Current Photo
            </label>
          </div>
          <br />

          <div>
            <label className="form-label">Bluish color of lips:</label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/11.-Bluish-color-of-lips-150x150.jpg" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-1"
                value="Yes"
                onChange={(e)=>setColor(e.target.value)
                }
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-1"
                value="No"
                onChange={(e)=>setColor(e.target.value)}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>

          <div>
            <label className="form-label"> White spot in eyes: </label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/3.-White-spot-in-eyes-150x150.jpg" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-2"
                value="Yes"
                onChange={(e)=>setEyes(e.target.value)
                }
    
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-2"
                value="No"
                onChange={(e)=>setEyes(e.target.value)
                }
              />
              <label className="form-check-label">No</label>
            </div>
          </div>

          <div>
            <label className="form-label">Fits/ unconsciousness:</label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/17.-Epilepsy-150x150.jpg" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-3"
                value="Yes"
                onChange={(e)=>setFit(e.target.value)
                }
    
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-3"
                value="No"
                onChange={(e)=>setFit(e.target.value)
                }
              />
              <label className="form-check-label">No</label>
            </div>
          </div>

          <div>
            <label className="form-label">Limp walking of your child: </label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/8.-Limp-walking-of-the-child-side-view-150x150.jpg" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-4"
                value="Yes"
                onChange={(e)=>setLimp(e.target.value)
                }
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-4"
                value="No"
                onChange={(e)=>setLimp(e.target.value)
                }
              />
              <label className="form-check-label">No</label>
            </div>
          </div>

          <div>
            <label className="form-label">Extremely short neck: </label>
            <img src="https://svastya.giftabled.org/wp-content/uploads/2021/06/7.-Extremely-short-neck-150x150.jpg" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-5"
                value="Yes"
                onChange={(e)=>setShort(e.target.value)
                }
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-disab-5"
                value="No"
                onChange={(e)=>setShort(e.target.value)
                }
              />
              <label className="form-check-label">No</label>
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
