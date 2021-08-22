import {FC} from "react";
import {ButtonProps as MuiButtonProps, Tooltip} from "@material-ui/core";
import MuiButton from "@material-ui/core/Button";

export interface ButtonProps extends MuiButtonProps {
    /** Additional text to be displayed when the button is hovered */
    tooltip?: string;
}

const Button: FC<ButtonProps> = ({tooltip = "", ...props}) => {
    return <Tooltip title={tooltip}>
        <MuiButton {...props}/>
    </Tooltip>;
};

export default Button;