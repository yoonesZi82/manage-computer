import React from "react";
import { Button } from "antd";
import Link from "next/link";
import * as Icons from "react-icons/pi";

function GlobalBtn({ title, link, iconName, model, onClick, loading, style }) {
  const Icon = Icons[iconName];
  return (
    <>
      {model === 1 ? (
        <>
          {link ? (
            <Link href={link}>
              <Button
                className={`flex flex-row-reverse justify-center items-center bg-sidebarTheme hover:bg-navbarDashboard py-[18px] border-none text-navbarDashboard hover:text-sidebarTheme transition-colors duration-500 ${style}`}
                icon={Icon && <Icon size={20} />}
                onClick={onClick}
              >
                {" "}
                {title ? title : null}{" "}
              </Button>
            </Link>
          ) : (
            <Button
              className={`flex flex-row-reverse w-full justify-center items-center bg-sidebarTheme hover:bg-secondary py-[18px] border-none text-secondary hover:text-sidebarTheme transition-colors duration-500 ${style}`}
              icon={Icon && <Icon size={20} />}
              onClick={onClick}
              loading={loading}
            >
              {" "}
              <p className={title ? null : "hidden"}>{title ? title : null}</p>
            </Button>
          )}
        </>
      ) : model === 2 ? (
        <>
          {link ? (
            <Link href={link}>
              <Button
                className={`flex flex-row-reverse justify-center items-center border-2 border-sidebarTheme  bg-transparent hover:bg-sidebarTheme/20 py-[16px] text-sidebarTheme hover:text-sidebarTheme transition-colors duration-500 ${style}`}
                icon={Icon && <Icon size={20} />}
                onClick={onClick}
              >
                {" "}
                {title ? title : null}{" "}
              </Button>
            </Link>
          ) : (
            <Button
              className={`flex flex-row-reverse w-full justify-center items-center  bg-sidebarTheme hover:bg-secondary py-[16px] text-navbarDashboard hover:text-sidebarTheme transition-colors duration-500 ${style}`}
              icon={Icon && <Icon size={20} />}
              onClick={onClick}
              loading={loading}
            >
              {" "}
              {title ? title : null}{" "}
            </Button>
          )}
        </>
      ) : null}
    </>
  );
}

export default GlobalBtn;
