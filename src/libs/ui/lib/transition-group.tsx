"use client";

import { TransitionGroup as ReactTransitionGroup } from "react-transition-group";

interface TransitionGroupProps {
  children?: React.ReactNode;
}

export const TransitionGroup = ({ children }: TransitionGroupProps) => {
  return <ReactTransitionGroup>{children}</ReactTransitionGroup>;
};
