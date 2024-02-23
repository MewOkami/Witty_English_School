import { DashBoardFooter } from "../../components/dashBoardFooter";
import { DashBoardHeader } from "../../components/dashBoardHeader";
import { DashBoardMain } from "../../components/dashBoardMain";
import { DashBoardPageStyle } from "./style";

export const DashBoard = () => {
  return (
    <DashBoardPageStyle>
      <DashBoardHeader />
      <DashBoardMain />
      <DashBoardFooter />
    </DashBoardPageStyle>
  );
};
