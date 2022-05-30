import styled from "styled-components";

const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .white-card {
    width: 500px;
    /* height: 450px; */
    /* border: 1px solid red; */
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .main-header {
    font-size: 50px;
  }

  .header-subtext {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.01em;

    color: #666666;
  }
  
  .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;

  }
`;

export default StyledLoginPage;
