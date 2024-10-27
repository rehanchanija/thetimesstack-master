import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="./about">About</a>,
    key: "0",
  },
  {
    label: <a href="#">Examples</a>,
    key: "1",
  },
  {
    label: <a href="./contactus">Contact us</a>,
    key: "2",
  },
  {
    label: (
      <div>
        <a
          href="#"
          class="bg-gradient-to-r rounded-lg from-yellow-400 to-amber-500 py-1 px-3      "
        >
          SIGN UP FOR FREE
        </a>
      </div>
    ),
    key: "2",
  },
];
const Drop = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white ">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </a>
  </Dropdown>
);
export default Drop;
