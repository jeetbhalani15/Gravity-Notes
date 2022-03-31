import { useState } from "react";

const InputPwd = ({
  value,
  onChangeHandler,
  onFocushandler,
  placeholderTxt,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <input
        id="login__password"
        className="form__input log-in-input"
        value={value}
        type={isHidden ? "password" : "text"}
        placeholder={placeholderTxt}
        onChange={onChangeHandler}
        onFocus={onFocushandler}
        required
      />

      <i 
        className={isHidden ? "fa fa-eye-slash eye-btn" : "fa fa-eye eye-btn"}
        id="toggle"
        onClick={() => setIsHidden((flag) => !flag)}
      ></i>
    </>
  );
};

export { InputPwd };
