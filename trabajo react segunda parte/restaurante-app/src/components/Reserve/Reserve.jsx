import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import './Reserve.css';  

const Reserve = () => {
    const initialValue = {
        name: "",
        email: "",
        shift: "",
        hour: "",
    };
  
    const [data, setData] = useState(initialValue);
    const [message, setMessage] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!data.name || !data.email || !data.shift) {
            setMessage("");
            setBtnDisabled(true);
        } else if (data.shift === "hora" && !data.hour) {
            setMessage("Please select an hour");
            setBtnDisabled(true);
        } else if (data.name.length < 3) {
            setMessage("Name must be at least 3 characters");
            setBtnDisabled(true);
        } else if (data.email.length < 3) {
            setBtnDisabled(true);
        } else if (!emailRegex.test(data.email)) {
            setMessage("Insert a valid email");
            setBtnDisabled(true);
        } else {
            setMessage("");
            setBtnDisabled(false);
        }
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    
    useEffect(() => {
        validateForm();
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("reserve", JSON.stringify(data));
        setData(initialValue);
        swal(
            "Reservation successful!",
            `${data.name}, ${data.email}, ${data.shift === "hora" ? `Hora: ${data.hour}` : data.shift}`,
            "success"
        );
        setTimeout(() => {
            navigate("/");
        }, 3000);
    };

    return (
        <div className="reserve-form-container">
            <h1>Reserve your table</h1>
            <form className="reserve-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={data.name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={data.email}
                />
                <select
                    name="shift"
                    value={data.shift}
                    onChange={handleInputChange}
                >
                    <option value="">Selecciona turno</option>
                    <option value="comida">Turno de comida (13:00 - 16:00)</option>
                    <option value="cena">Turno de cena (20:00 - 23:00)</option>
                    <option value="hora">Elegir hora exacta</option>
                </select>
                {data.shift === "hora" && (
                    <input
                        type="time"
                        name="hour"
                        value={data.hour}
                        onChange={handleInputChange}
                        min="13:00"
                        max="23:00"
                        step="900"
                        style={{marginTop: 10}}
                    />
                )}
                <button type="submit" disabled={btnDisabled}>
                    Submit
                </button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Reserve;
