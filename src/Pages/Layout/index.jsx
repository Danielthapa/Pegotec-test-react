import React from "react";
import TopNavBar from "../../components/TopNavBar";
import history from "../../utils/history";
import StyledLayout from "./style";

const Layout = ({ currentPage, children }) => {
  const handleChangePage = () => {
    if (currentPage === "Login") {
      history.push("/registration");
    } else {
      history.push("/login");
    }
  };

  return (
    <StyledLayout>
      <TopNavBar
        handleChangePage={handleChangePage}
        currentPage={currentPage}
      />
      {children}
    </StyledLayout>
  );
};

export default Layout;
