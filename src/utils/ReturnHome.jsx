import { useNavigate } from "react-router";
import { useEffect } from "react";

function ReturnHome() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
    }, [navigate]);

    return <div />
}

export default ReturnHome;
