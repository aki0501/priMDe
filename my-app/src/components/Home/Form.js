import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from '../../firebase.js'
import { FirebaseError } from "firebase/app";
import styles from "./../Resources.module.css";

export default function NameForm() {
    const [locationName, setLocationName] = useState("");
    const [locationAddress, setLocationAddress] = useState("");
    const [doctorName, setDoctorName] = useState("N/A");
    const [rating, setRating] = useState("");
    const [comments, setComments] = useState("");

    const onSubmit = data => {
        update(data.classes);
    }

    async function update(classes) {
        const currentform = doc(db, 'locations',);
    }

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); alert(locationName); }}>
                <div className={styles.formContainer}>

                    <label>
                        Location Name: &nbsp;
                        <input value={locationName} onChange={(e) => setLocationName(e.target.value)} id="locationName" />
                    </label>
                    <br /> <br />
                    <label>
                        Location Address: &nbsp;
                        <input value={locationAddress} onChange={(e) => setLocationAddress(e.target.value)} id="locationAddress" />
                    </label>
                    <br /> <br />
                    <label>
                        Medical Professional Name (optional): &nbsp;
                        <input value={doctorName} onChange={(e) => setDoctorName(e.target.value)} id="doctorName" />
                    </label>
                    <br /> <br />
                    <label>
                        Rating (1-10): &nbsp;
                        <input value={rating} onChange={(e) => setRating(e.target.value)} id="rating" />
                    </label>
                    <br /> <br />
                    <label>
                        Comments: &nbsp;
                        <input value={comments} onChange={(e) => setComments(e.target.value)} id="comments" />
                    </label>
                    <br /> <br />
                    <input type="submit" />
                </div>
            </form>
        </>
    )

};