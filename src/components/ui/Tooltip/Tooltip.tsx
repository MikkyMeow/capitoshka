import { FC } from 'react';
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

interface IProps extends TooltipProps {}

export const Tooltip: FC<IProps> = ({ children, ...rest }) => {
  return (
    <MuiTooltip {...rest}>
      <span>{children}</span>
    </MuiTooltip>
  );
};
