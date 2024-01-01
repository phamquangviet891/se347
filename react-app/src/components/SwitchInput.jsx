import React from "react";
import PropTypes from "prop-types";
import Switch from "react-custom-checkbox/switch";

const SwitchInput = ({ check, setCheck }) => {
  const checkedTrackStyle = {
    opacity: 1,
    transition: "all 0.25s ease-in-out",
  };

  const checkedIndicatorStyle = {
    background: "#fff",
    transform: "translateX(30px)",
  };

  const checkedIconStyle = {
    opacity: 1,
    transition: "all 0.25s ease-in-out",
  };

  const indicatorStyle = {
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: 24,
    bottom: 2,
    display: "flex",
    height: 24,
    left: 2,
    outline: "solid 2px transparent",
    position: "absolute",
    transition: "0.25s",
    width: 24,
  };

  const trackStyle = {
    background: check ? "#1A88F7" : "#9B9B9B",
    border: "1px solid #e6e6e6",
    borderRadius: 15,
    cursor: "pointer",
    display: "flex",
    height: 30,
    position: "relative",
    width: 60,
  };
  return (
    <Switch
      checked={check}
      onChange={setCheck}
      indicatorStyle={indicatorStyle}
      trackStyle={trackStyle}
      checkedIconStyle={checkedIconStyle}
      checkedIndicatorStyle={checkedIndicatorStyle}
      checkedTrackStyle={checkedTrackStyle}
    />
  );
};

SwitchInput.propTypes = {
  check: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired,
};

export default SwitchInput;
