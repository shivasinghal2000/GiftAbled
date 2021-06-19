import React, { useState } from "react";

function Profile() {

  const [isDisabled, setIsDisabled] = useState(null);
  function toggleDisability() {
    setIsDisabled((prev) => {
      return !prev ? "disabled" : null;
    });
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Profile</h1>
      </div>

      <div className="container my-3">
        <form>
          <fieldset disabled={isDisabled}>
            <div class="mb-3">
              <label class="form-label">Name of child</label>
              <input
                type="text"
                class="form-control"
                style={{ width: "50%" }}
              />
            </div>

            <div>
              <label class="form-label">Gender </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-1"
                  id="inlineRadio1"
                  value="Male"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-1"
                  id="inlineRadio2"
                  value="Female"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-1"
                  id="inlineRadio3"
                  value="Other"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Other
                </label>
              </div>
            </div>

            <div>
              <label class="form-label">Blood Group </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio4"
                  value="A+"
                />
                <label class="form-check-label" for="inlineRadio4">
                  A+
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio5"
                  value="B+"
                />
                <label class="form-check-label" for="inlineRadio5">
                  B+
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio6"
                  value="AB+"
                />
                <label class="form-check-label" for="inlineRadio6">
                  AB+
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio7"
                  value="A-"
                />
                <label class="form-check-label" for="inlineRadio7">
                  A-
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio8"
                  value="B-"
                />
                <label class="form-check-label" for="inlineRadio8">
                  B-
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio9"
                  value="AB-"
                />
                <label class="form-check-label" for="inlineRadio9">
                  AB-
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio10"
                  value="O+"
                />
                <label class="form-check-label" for="inlineRadio10">
                  O+
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-2"
                  id="inlineRadio11"
                  value="O-"
                />
                <label class="form-check-label" for="inlineRadio11">
                  O-
                </label>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Date of Birth</label>
              <input
                type="text"
                class="form-control"
                style={{ width: "50%" }}
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Age of mother at the childbirth </label>
              <input
                type="Number"
                class="form-control"
                style={{ width: "50%" }}
              />
            </div>

            <div>
              <label class="form-label">Place of Delivery </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-3"
                  value="District Hospital"
                />
                <label class="form-check-label">District Hospital</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-3"
                  value="Primary Health Center"
                />
                <label class="form-check-label">Primary Health Center</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-3"
                  value="Secondary Health Center"
                />
                <label class="form-check-label">Secondary Health Center</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-3"
                  value="Private hospital / Nursing Home"
                />
                <label class="form-check-label">
                  Private hospital / Nursing Home
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-3"
                  value="Home"
                />
                <label class="form-check-label">Home</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-3"
                  value="Other"
                />
                <label class="form-check-label">Other</label>
              </div>
            </div>

            <div>
              <label class="form-label">Was the child born </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-4"
                  value="Pre Term (delivery before 37 weeks)"
                />
                <label class="form-check-label">
                  Pre Term (delivery before 37 weeks)
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-4"
                  value="Full Term (normal birth is about 40 weeks or 280 days)"
                />
                <label class="form-check-label">
                  Full Term (normal birth is about 40 weeks or 280 days)
                </label>
              </div>
            </div>

            <div>
              <label class="form-label">Type of Delivery </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-5"
                  value="Normal Delivery"
                />
                <label class="form-check-label">Normal Delivery</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-5"
                  value="Scheduled Caesarean"
                />
                <label class="form-check-label">Scheduled Caesarean</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-5"
                  value="Un-planned Caesarean"
                />
                <label class="form-check-label">Un-planned Caesarean</label>
              </div>
            </div>

            <div>
              <label class="form-label">Exposed to any </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-6"
                  value="Toxic(consumption of alcohol, tobacco)"
                />
                <label class="form-check-label">
                  Toxic(consumption of alcohol, tobacco)
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-6"
                  value="Stress"
                />
                <label class="form-check-label">Stress</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-6"
                  value="Prolonged physical exercise"
                />
                <label class="form-check-label">
                  Prolonged physical exercise
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-6"
                  value="Not exposed"
                />
                <label class="form-check-label">Not exposed</label>
              </div>
            </div>

            <div>
              <label class="form-label">
                Did the mother have any infection/ disease during pregnancy{" "}
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-7"
                  value="Yes"
                />
                <label class="form-check-label">Yes</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-7"
                  value="No"
                />
                <label class="form-check-label">No</label>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Weight of child during birth</label>
              <input
                type="Number"
                class="form-control"
                style={{ width: "50%" }}
              />
            </div>

            <div class="mb-3">
              <label class="form-label">When was the child breast feed</label>
              <input
                type="text"
                class="form-control"
                style={{ width: "50%" }}
              />
            </div>

            <div class="mb-3">
              <label class="form-label">
                How long was the child breast feed
              </label>
              <input
                type="text"
                class="form-control"
                style={{ width: "50%" }}
              />
            </div>

            <div>
              <label class="form-label">
                {" "}
                Was the child admitted in NICU (Neonatal Intensive Care
                Unit)after delivery?{" "}
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-8"
                  value="Yes"
                />
                <label class="form-check-label">Yes</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="group-8"
                  value="No"
                />
                <label class="form-check-label">No</label>
              </div>
            </div>
          </fieldset>

          <button
            onClick={toggleDisability}
            type="button"
            class="btn btn-primary"
            style={{marginRight:"5px"}}
          >
            {!isDisabled ? "Save" : "Update"}
          </button>

          {/* <button type="submit" class="btn btn-primary">
            Save
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Profile;
