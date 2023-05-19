import { useState } from "react";

function StadiumCreation() {
    const [city, setCity] = useState("");
    const [sport, setSport] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const stadium = {
            "city": city,
            "sport": sport
        }

        fetch('http://localhost:5050/record', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stadium)
        }).then(res => res.json())
            .then(res => console.log(res));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the stadium city:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <br />
            <label>Enter the stadium sport:
                <input
                    type="text"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default StadiumCreation