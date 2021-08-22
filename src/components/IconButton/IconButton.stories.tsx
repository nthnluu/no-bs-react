import React from 'react';
import {ComponentMeta} from '@storybook/react';
import IconButton, {IconButtonProps} from "./IconButton";
import {ThumbDown} from "@material-ui/icons";

export default {
    title: 'Components/IconButton',
    component: IconButton
} as ComponentMeta<typeof IconButton>;

export const iconButton = ({label = "Icon Button", ...args}: IconButtonProps) => <IconButton
    label={label} {...args}><ThumbDown/></IconButton>;