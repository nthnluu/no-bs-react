import {FC} from "react";
import {IconButtonProps as MuiIconButtonProps, Tooltip} from "@material-ui/core";
import MuiIconButton from "@material-ui/core/IconButton";

export interface IconButtonProps extends MuiIconButtonProps {
    /** Text that describes this button */
    label: string;
}

const IconButton: FC<IconButtonProps> = ({label, ...props}) => {
    return <Tooltip title={label} enterDelay={500}>
        <MuiIconButton {...props} aria-label={label}/>
    </Tooltip>;
};

export default IconButton;