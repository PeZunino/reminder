import React, { PropsWithChildren } from "react";
import { TooltipContainer } from "./style";

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  title,
  children,
  className,
}) => {
  return (
    <>
      <TooltipContainer className={className}>
        {children}
        <span>{title}</span>
      </TooltipContainer>
    </>
  );
};

export default Tooltip;
