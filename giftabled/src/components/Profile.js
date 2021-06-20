import React, { useState,useEffect} from "react";
import { db,auth } from "../util/firebase";

function Profile() {
    const [profile,setProfile]=useState();
    useEffect(() => {
        let isSubscribed = true;
        db.collection("profile").onSnapshot((snap) => {
          const list = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProfile(list);
          return () => (isSubscribed = false);
        });
      }, []);
    const [name,setName]=useState();
    const [parent,setParent]=useState();
    const [relation,setRelation]=useState();
    const [phone,setPhone]=useState();
    const [gender,setGender]=useState();
    const [bloodgroup,setBloodgroup]=useState();
    const [dob,setDob]=useState();
    const [ageofmother,setAgeofmother]=useState();
    const [placeofdelivery,setPlaceofdelivery]=useState();
    const [childstatus,setChildstatus]=useState();
    const [exposed,setExposed]=useState();
    const [delivery,setdelivery]=useState()
    const [mi,setMi]=useState();
    const [weight,setWeight]=useState();
    const [breastfeed,setBreastfeed]=useState();
    const [howlong,setHowlong]=useState();
    const [nicu,setNicu]=useState();
    const [address1,setAddress1]=useState();
    const [address2,setAddress2]=useState();
    const [city,setCity]=useState();
    const [state,setState]=useState();
    const [pincode,setPincode]=useState();
    function Adddata(e)
    {   e.preventDefault();

        // db.collection("profile").add({
        //     name,parent,relation,phone,gender,bloodgroup,dob,ageofmother,placeofdelivery,childstatus,exposed,delivery,mi,weight,breastfeed,nicu,address1,address2,city,state,pincode
        // })
        db.collection("profile").add({
            name,parent,relation,phone,gender,bloodgroup,dob,placeofdelivery,childstatus,exposed,delivery,mi,weight,breastfeed,nicu,address1,address2,city,state,pincode,ageofmother,
            userId: auth.currentUser.uid
        })
        console.log(name,parent,relation,phone,gender,bloodgroup,dob,ageofmother,placeofdelivery,childstatus,exposed,delivery,mi,weight,breastfeed,nicu,address1,address2,city,state,pincode)
    }
  return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1>Profile</h1>
        </div>

      <div className="container my-3">
        <form onSubmit={Adddata}>
          <div className="mb-3">
            <label className="form-label">Name of child</label>
            <input type="text" className="form-control" style={{ width: "50%" }} onChange={(e)=>setName(e.target.value)
            }/>
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Name of the parent</label>
            <input type="text" className="form-control"  onChange={e=>setParent(e.target.value)
            }/>
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Relationship</label>
            <input type="text" className="form-control" onChange={(e)=>setRelation(e.target.value)
            }/>
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control"
            onChange={(e)=>setPhone(e.target.value)
            } />
          </div>
          <div>
            <label className="form-label">Gender </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-1"
                id="inlineRadio1"
                value="Male"
                onChange={(e)=>setGender(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-1"
                id="inlineRadio2"
                value="Female"
                onChange={(e)=>setGender(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-1"
                id="inlineRadio3"
                value="Other"
                onChange={(e)=>setGender(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Other
              </label>
            </div>
          </div>

          <div>
            <label className="form-label">Blood Group </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio4"
                value="A+"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio4">
                A+
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio5"
                value="B+"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio5">
                B+
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio6"
                value="AB+"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio6">
                AB+
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio7"
                value="A-"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio7">
                A-
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio8"
                value="B-"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio8">
                B-
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio9"
                value="AB-"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio9">
                AB-
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio10"
                value="O+"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio10">
                O+
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-2"
                id="inlineRadio11"
                value="O-"
                onChange={(e)=>setBloodgroup(e.target.value)
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio11">
                O-
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="text" className="form-control" style={{ width: "50%" }} 
            onChange={(e)=>setDob(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age of mother at the childbirth </label>
            <input
              type="Number"
              className="form-control"
              style={{ width: "50%" }}
              onChange={(e)=>setAgeofmother(e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">Place of Delivery </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-3"
                value="District Hospital"
                onChange={(e)=>setPlaceofdelivery(e.target.value)
                }
              />
              <label className="form-check-label">District Hospital</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-3"
                value="Primary Health Center"
                onChange={(e)=>setPlaceofdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Primary Health Center</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-3"
                value="Secondary Health Center"
                onChange={(e)=>setPlaceofdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Secondary Health Center</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-3"
                value="Private hospital / Nursing Home"
                onChange={(e)=>setPlaceofdelivery(e.target.value)
                }
              />
              <label className="form-check-label">
                Private hospital / Nursing Home
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-3"
                value="Home"
                onChange={(e)=>setPlaceofdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Home</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-3"
                value="Other"
                onChange={(e)=>setPlaceofdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>

          <div>
            <label className="form-label">Was the child born </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-4"
                value="Pre Term (delivery before 37 weeks)"
                onChange={(e)=>setChildstatus(e.target.value)}
              />
              <label className="form-check-label">
                Pre Term (delivery before 37 weeks)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-4"
                value="Full Term (normal birth is about 40 weeks or 280 days)"
                onChange={(e)=>setChildstatus(e.target.value)}
              />
              <label className="form-check-label">
                Full Term (normal birth is about 40 weeks or 280 days)
              </label>
            </div>
          </div>

          <div>
            <label className="form-label">Type of Delivery </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-5"
                value="Normal Delivery"
                onChange={(e)=>setdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Normal Delivery</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-5"
                value="Scheduled Caesarean"
                onChange={(e)=>setdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Scheduled Caesarean</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-5"
                value="Un-planned Caesarean"
                onChange={(e)=>setdelivery(e.target.value)
                }
              />
              <label className="form-check-label">Un-planned Caesarean</label>
            </div>
          </div>

          <div>
            <label className="form-label">Exposed to any </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-6"
                value="Toxic(consumption of alcohol, tobacco)"
                onChange={(e)=>setExposed(e.target.value)
                }
              />
              <label className="form-check-label">
                Toxic(consumption of alcohol, tobacco)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-6"
                value="Stress"
                onChange={(e)=>setExposed(e.target.value)
                }
              />
              <label className="form-check-label">Stress</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-6"
                value="Prolonged physical exercise"
                onChange={(e)=>setExposed(e.target.value)
                }
              />
              <label className="form-check-label">
                Prolonged physical exercise
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-6"
                value="Not exposed"
                onChange={(e)=>setExposed(e.target.value)
                }
              />
              <label className="form-check-label">Not exposed</label>
            </div>
          </div>

          <div>
            <label className="form-label">Did the mother have any infection/ disease during pregnancy </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-7"
                value="Yes"
                onChange={(e)=>setMi(e.target.value)
                }
              />
              <label className="form-check-label">
              Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-7"
                value="No"
                onChange={(e)=>setMi(e.target.value)
                }
              />
              <label className="form-check-label">No</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Weight of child during birth</label>
            <input type="Number" className="form-control" style={{ width: "50%" }} 
            onChange={(e)=>setWeight(e.target.value)
            }
            />
          </div>


          <div className="mb-3">
            <label className="form-label">When was the child breast feed</label>
            <input type="text" className="form-control" style={{ width: "50%" }} 
            onChange={(e)=>setBreastfeed(e.target.value)
            }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">How long was the child breast feed</label>
            <input type="text" className="form-control" style={{ width: "50%" }} 
            onChange={(e)=>setHowlong(e.target.value)
            }
            />
          </div>

          <div>
            <label className="form-label"> Was the child admitted in NICU (Neonatal Intensive Care Unit)after delivery? </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-8"
                value="Yes"
                onChange={(e)=>setNicu(e.target.value)
                }
              />
              <label className="form-check-label">
              Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="group-8"
                value="No"
                onChange={(e)=>setNicu(e.target.value)
                }
              />
              <label className="form-check-label">No</label>
            </div>
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
                onChange={(e)=>setAddress1(e.target.value)
                }
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
                onChange={(e)=>setAddress2(e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity"
               onChange={(e)=>setCity(e.target.value)
               } />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <input type="text" className="form-control" id="inputCity" 
              onChange={(e)=>setState(e.target.value)
              }/>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Pin Code
              </label>
              <input type="text" className="form-control" id="inputZip" onChange={(e)=>setPincode(e.target.value)
               }/>
            </div>
          </div>

          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
