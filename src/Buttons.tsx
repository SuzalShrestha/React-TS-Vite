import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}
function Buttons({ children, color, onClick }: Props) {
  return (
    <div>
      <div id="liveAlertPlaceholder"></div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onClick}
        id="liveAlertBtn"
      >
        {children}
      </button>
    </div>
  );
}
export default Buttons;
