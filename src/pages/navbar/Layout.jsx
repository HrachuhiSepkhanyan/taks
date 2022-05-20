import { Outlet, NavLink } from "react-router-dom";
import { LeftDiv, Customer, Home, List } from "./Layout.style";
import homeicon from "../../images/homeicon.svg";
import shoppinglist from "../../images/shopping-list.svg";
import pageNo3 from "../../images/pageNo3.svg";

const Layout = () => {
  return (
    <div>
      <LeftDiv>
        <Home>
          <NavLink to="/">
            <img src={homeicon} alt="" />
          </NavLink>
        </Home>
        <List>
          <NavLink to="/list">
            <img src={shoppinglist} alt="" />
          </NavLink>
        </List>
        <Customer>
          <NavLink to="/group">
            <img src={pageNo3} alt="" />
          </NavLink>
        </Customer>
      </LeftDiv>
      <Outlet />
    </div>
  );
};
export default Layout;
