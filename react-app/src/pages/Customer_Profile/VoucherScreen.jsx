import React, { useState } from "react";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getVouchersByShop } from "../../services/VoucherServices";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const VoucherScreen = () => {
  const [value, setValue] = React.useState(0);
  const [vouchers, setVouchers] = useState([]);
  const getVouchersBy = async (shop_id) => {
    const res = await getVouchersByShop(shop_id);
    setVouchers(res);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    getVouchersBy(newValue);
  };
  console.log(vouchers);
  return (
    <div className="w-4/5 bg-white p-4">
      <h1 className="text-black font-medium text-3xl p-5">Voucher warehouse</h1>
      <div className="w-full bg-gray-300" style={{ height: 0.1 }} />
      <div className="flex-col flex p-5">
        <div className=" text-black p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{
                    backgroundColor: "#F3F3F3",
                  }}
                >
                  <Tab
                    label="Free Ship"
                    {...a11yProps(0)}
                    className=" flex-1"
                  />
                  <Tab
                    label="Shop Voucher"
                    {...a11yProps(1)}
                    className=" flex-1"
                  />
                  <Tab
                    label="Taka Voucher"
                    {...a11yProps(2)}
                    className=" flex-1"
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                không có voucher
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className=" grid  grid-cols-2 gap-3">
                  {vouchers.map((voucher) => (
                    <div
                      key={voucher.voucher_ID}
                      style={{
                        borderWidth: 1,
                        borderColor: "#1A88F7",
                        borderRadius: 10,
                      }}
                      className=" flex-row flex justify-between items-center px-2 py-2  "
                    >
                      <img
                        src={
                          voucher.image
                            ? voucher.image
                            : "./src/assets/pictures/image 55.png"
                        }
                        style={{ width: 65, height: 65 }}
                      />
                      <div
                        className="flex flex-col  pr-4"
                        style={{
                          borderRightWidth: 1,
                          borderColor: "#1A88F7",
                          borderStyle: "dashed",
                        }}
                      >
                        <h1>{voucher.title}</h1>
                        <p>Discount: {voucher.discountAmount}k</p>
                        <p>
                          Valid until:{" "}
                          {new Date(voucher.expire_date).toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="outlined" style={{ height: 30 }}>
                        Use
                      </Button>
                    </div>
                  ))}
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                không có voucher
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VoucherScreen;
