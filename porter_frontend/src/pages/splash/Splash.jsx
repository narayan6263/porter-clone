import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {

    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {

            navigate("/dashboard");

        },2000);

    },[]);

    return (

        <div
            style={{
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"40px",
                fontWeight:"bold"
            }}
        >
            PORTER
        </div>

    );
}