import type React from "react";

export const ConditionRenderer: React.FC<{
  state: boolean;
  C1?: JSX.Element;
  C2?: JSX.Element;
}> = ({state, C1, C2}) => {
  return state ? C1 || null : C2 || null;
};
