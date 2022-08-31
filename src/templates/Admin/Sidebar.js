import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaBars,
  FaStore,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/img/2.png";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = ({ image, toggled, handleToggleSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={handleToggle}
        >
          {collapsed ? <FaBars /> : "Sidebar"}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">New</span>}
          >
            {" "}
            <NavLink to="/admin">Dashboard</NavLink>
          </MenuItem>
          <MenuItem icon={<FaGem />}> Components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">Sub menu</span>}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>
              <NavLink to="add-product"> Add product</NavLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            {collapsed ? (
              <FaStore />
            ) : (
              <>
                <FaStore />
                <span>Nguyễn Ly</span>
              </>
            )}
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
