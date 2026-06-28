import React, { useState, useEffect } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");

    useEffect(() => {
        if (props.availableTimes && props.availableTimes.availableTimes && props.availableTimes.availableTimes.length > 0) {
            setTimes(props.availableTimes.availableTimes[0]);
        }
    }, [props.availableTimes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, times, guests, occasion });
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
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes && props.availableTimes.availableTimes && props.availableTimes.availableTimes.map(availableTime => (
                                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of guests:</label>
                            <input id="book-guests" type='number' min="1" max="10" required value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="Birthday">Birthday</option>
                                <option value="Date">Date</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Any other">Any other</option>
                            </select>
                        </div>

                        <div className='btnReceive'>
                           <input aria-label='on Click' type='submit' value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;