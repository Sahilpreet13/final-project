import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose time:</label>
                            <input id='book-time' type='time' min='08:00' max='23:30' required/>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of guests:</label>
                            <input id="book-guests" type='number' min="1" max="10" required value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e => setOccasion(e.target.value))}>
                                <option>Birthday</option>
                                <option>Date</option>
                                <option>Anniversary</option>
                                <option>Any other</option>
                            </select>
                        </div>

                        <div classsName='btnRecieve'>
                           <input aria-label='on Click' type='submit' value={"Make Your Resevation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;