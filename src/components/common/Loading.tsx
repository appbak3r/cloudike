import React, { FC, memo } from "react";
import { Spinner } from "./Spinner";

export const Loading: FC = memo(() => {
  return (
    <div>
      <Spinner />
    </div>
  );
});
