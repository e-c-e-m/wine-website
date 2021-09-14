import React, { useState } from "react";
import "./ageverification.css";
import history from "../history";
import { Button, DatePicker } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import Logo from "../../components/Logo/Logo";

const AgeVerification = () => {
  const [date, setDate] = useState(new Date());
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function onChange(d) {
    setShowErrorMsg(false);
    setDate(d);
  }

  function verifyAge() {
    let path = `/home`;
    let userAge = getAge(date);
    if (userAge < 18) {
      setShowErrorMsg(true);
    } else {
      history.push(path);
    }
  }

  return (
    <div className="age-verification-layout">
      <div className="age-verification-center">
        <Logo showImg={true} />
        <DatePicker format={dateFormatList} onChange={onChange} />
        <Button
          type="default"
          className="enter-btn"
          shape="round"
          icon={<LoginOutlined />}
          size="large"
          onClick={verifyAge}
        >
          Enter
        </Button>
        <div className="error-msg">
          {showErrorMsg && (
            <p>You need to be 18 years old to view this website</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
