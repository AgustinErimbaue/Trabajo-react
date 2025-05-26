import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import './Reserve.css';  

const Reserve = () => {
    
    const initialValue = {
        name: "",
        email: "",
        shift: "",
    };
  
    const [data, setData] = useState(initialValue);
    const [message, setMessage] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!data.name || !data.email || !data.shift) {
            setMessage("");
        } else if (data.name.length < 3) {
            setMessage("Name must be at least 3 characters");
            setBtnDisabled(true);
        } else if (data.email.length < 3) {
            setBtnDisabled(true);
        } else if (!emailRegex.test(data.email)) {
            setMessage("Insert a valid email");
            setBtnDisabled(true);
        } else if (data.shift.length < 3) {
            setMessage("Shift must be at least 3 characters");
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
            `${data.name}, ${data.email}, ${data.shift}`,
            "success"
        );
        setTimeout(() => {
            navigate("/");
        }, 3000);
    };

    return (
        <div className="reserve-form-container">
            <h1>Reserve your table</h1>
            <form className="reserve-form">
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
                <input
                    type="text"
                    name="shift"
                    placeholder="Shift"
                    onChange={handleInputChange}
                    value={data.shift}
                />
            </form>
            <button onClick={handleSubmit} disabled={btnDisabled}>
                Submit
            </button>
            <p>{message}</p>
        </div>
    );
};

export default Reserve;
