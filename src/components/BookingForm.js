import React from "react";
import { useState } from "react";

const BookingForm = (props)=>{
    const [occasion, setOccasion] = useState("");
   const [guest, setGuest] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("");

   const handleSubmit =(e) =>{
    e.preventDefault();
    props.submitForm(e)
   };

   const handleChange =(e) =>{
    setDate(e);
    props.dispatch(e);
   }

    return(
        <header>
            <section>
                <form onSubmit ={handleSubmit}>
                    <fieldset>
                        <div>
                        <label htmlFor="book-date"> Choose Your Reservation Date</label>
                        <input id ="book-date" value ={date} onChange={(e) => handleChange(e.target.value)} type ="date" required/>
                        </div>
                        <div>
                        <label htmlFor="book-time">Choose Your Reservation Time</label>
                        <select id="book-time" values={times} onChange={(e)=> setTimes(e.target.value)} required>
                            <option value="">Select a Time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => {return <option key = {availableTimes}>{availableTimes}</option>})}
                        </select>
                        </div>
                        <div>
                            <label htmlFor="book-guest">Number of Guests</label>
                            <input id="book-guest" min="1" value={guest} onChange={(e)=> {setGuest(e.target.value)}} type={"number"} placeholder={0} max ={10} required></input>
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" key ={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select Occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                            <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;