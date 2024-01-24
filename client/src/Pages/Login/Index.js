import styles from "./Login.module.scss";
import classNames from "classnames/bind";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchToken } from "../../api";

const cx = classNames.bind(styles);

function LoginPage() {
    let navigate = useNavigate();

    const [userAccount, setUserAccount] = useState({ email: "", password: "" });
    const [invalidInfo, setInvalidInfo] = useState(false);

    useEffect(() => {
        sessionStorage.removeItem("userToken");
        localStorage.removeItem("fullPetsData");
    }, []);

    const formRef = useRef();

    const doLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await fetchToken({
                inputEmail: userAccount.email,
                inputPassword: userAccount.password,
            });

            sessionStorage.setItem("userToken", token);

            //because the response from server doesnt show which one is the doctor and which one is the normal user so i use this method to fix the current problem.
            if (userAccount.email.includes("doctor")) {
                navigate("/doctor");
            } else {
                navigate("/user");
            }
        } catch (err) {
            console.log(err);
            setInvalidInfo(true);
            setUserAccount({ email: "", password: "" });
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserAccount({ ...userAccount, [name]: value });
    };

    return (
        <div className={cx("login_page")}>
            <form className={cx("form")} ref={formRef} onSubmit={doLogin}>
                {invalidInfo && <p>invalid</p>}
                <h1>PawsCare Clinic</h1>
                <input
                    name="email"
                    type="text"
                    autoComplete="off"
                    value={userAccount.email}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Email"
                />

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={userAccount.password}
                    onChange={(e) => handleOnChange(e)}
                />
                <div className={cx("btn_wrapper")}>
                    {" "}
                    <button className={cx("login_btn")} type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
