import { Outlet, Link } from "react-router-dom";
import { LeftDiv, Menu, PagesButtons } from "./Layout.style";

const Layout = () => {
  return (
    <div>
      <LeftDiv>
        <Menu>
          <Link to="/">
            <PagesButtons>
              <img src="../images/dashboard-interface.png" alt="" />
            </PagesButtons>
          </Link>
        </Menu>
        <Menu>
          <Link to="/list">
            <PagesButtons>
              <img src="../images/shopping-list 1.png" alt="" />
            </PagesButtons>
          </Link>
        </Menu>
        <Menu>
          <Link to="/group">
            <PagesButtons>
              <img src="../images/Group (1).png" alt="" className="group" />
            </PagesButtons>
          </Link>
        </Menu>
      </LeftDiv>
      <Outlet />
    </div>
  );
};
export default Layout;
