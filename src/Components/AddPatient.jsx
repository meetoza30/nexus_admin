import React from "react";
import '../assets/addPatient.css'

function AddPatient() {
    return (
        <>
            <form id="profile-form">
                <h1>Fill Patient Details</h1>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required min="0" />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="height">Height (cm):</label>
                    <input type="number" id="height" name="height" required min="0" />
                </div>

                <div className="form-group">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="number" id="weight" name="weight" required min="0" />
                </div>

                <div className="form-group">
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <select id="bloodGroup" name="bloodGroup" required>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="diseases">Diseases:</label>
                    <textarea id="diseases" name="diseases" rows="4" placeholder="List any diseases or medical conditions..."></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="medications">Medications:</label>
                    <textarea id="medications" name="medications" rows="4" placeholder="List any medications you are currently taking..."></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="tests">Medical Tests Conducted:</label>
                    <textarea id="tests" name="tests" rows="4" placeholder="List any medical tests you have undergone..."></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="allergies">Allergies:</label>
                    <textarea id="allergies" name="allergies" rows="4" placeholder="List any known allergies..."></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="medicalHistory">Medical History:</label>
                    <textarea id="medicalHistory" name="medicalHistory" rows="4" placeholder="Provide any relevant medical history..."></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact:</label>
                    <input type="text" id="emergencyContact" name="emergencyContact" placeholder="Name and Phone Number" />
                </div>

                <h3>Family History</h3>
                <div className="family-history">
                    <div className="form-group">
                        <label>Hypertension:</label>
                        <input type="radio" name="hypertension" value="yes" /> Yes
                        <input type="radio" name="hypertension" value="no" /> No
                    </div>
                    <div className="form-group">
                        <label>Heart Disease:</label>
                        <input type="radio" name="heart_disease" value="yes" /> Yes
                        <input type="radio" name="heart_disease" value="no" /> No
                    </div>
                    <div className="form-group">
                        <label>Diabetes:</label>
                        <input type="radio" name="diabetes" value="yes" /> Yes
                        <input type="radio" name="diabetes" value="no" /> No
                    </div>
                    <div className="form-group">
                        <label>Tuberculosis:</label>
                        <input type="radio" name="tuberculosis" value="yes" /> Yes
                        <input type="radio" name="tuberculosis" value="no" /> No
                    </div>
                    <div className="form-group">
                        <label>Asthma:</label>
                        <input type="radio" name="asthma" value="yes" /> Yes
                        <input type="radio" name="asthma" value="no" /> No
                    </div>
                    <div className="form-group">
                        <label>Cancer:</label>
                        <input type="radio" name="cancer" value="yes" /> Yes
                        <input type="radio" name="cancer" value="no" /> No
                    </div>
                    <div className="form-group full-width">
                        <label>Any other chronic disease:</label>
                        <input type="text" name="other_disease" placeholder="Specify if any..." />
                    </div>
                </div>

                <h3>Personal History</h3>
                <div className="personal-history">
                    <div className="form-group">
                        <label>Smoking:</label>
                        <input type="radio" name="smoking" value="yes" onClick={() => showSince('smoking_since')} /> Yes
                        <input type="radio" name="smoking" value="no" onClick={() => hideSince('smoking_since')} /> No
                        <input type="text" id="smoking_since" name="smoking_since" placeholder="Since when? Frequency?" style={{ display: 'none' }} />
                    </div>
                    <div className="form-group">
                        <label>Alcohol:</label>
                        <input type="radio" name="alcohol" value="yes" onClick={() => showSince('alcohol_since')} /> Yes
                        <input type="radio" name="alcohol" value="no" onClick={() => hideSince('alcohol_since')} /> No
                        <input type="text" id="alcohol_since" name="alcohol_since" placeholder="Since when? Frequency?" style={{ display: 'none' }} />
                    </div>
                    <div className="form-group">
                        <label>Drugs:</label>
                        <input type="radio" name="drugs" value="yes" onClick={() => showSince('drugs_since')} /> Yes
                        <input type="radio" name="drugs" value="no" onClick={() => hideSince('drugs_since')} /> No
                        <input type="text" id="drugs_since" name="drugs_since" placeholder="Since when? Frequency?" style={{ display: 'none' }} />
                    </div>
                    <div className="form-group">
                        <label>Tobacco:</label>
                        <input type="radio" name="tobacco" value="yes" onClick={() => showSince('tobacco_since')} /> Yes
                        <input type="radio" name="tobacco" value="no" onClick={() => hideSince('tobacco_since')} /> No
                        <input type="text" id="tobacco_since" name="tobacco_since" placeholder="Since when? Frequency?" style={{ display: 'none' }} />
                    </div>
                    <div className="form-group full-width">
                        <label>Diet:</label>
                        <input type="radio" name="diet" value="veg" /> Vegetarian
                        <input type="radio" name="diet" value="non-veg" /> Non-Vegetarian
                    </div>
                </div>

                <button type="submit">Add Patient</button>
            </form>
        </>
    );
}

export default AddPatient;
