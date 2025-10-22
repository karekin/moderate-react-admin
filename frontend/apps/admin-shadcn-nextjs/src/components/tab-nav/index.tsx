"use client";

import { useEffect } from "react";
import { CustomTabs } from "./tabs";
import { useGuideContext } from "../guide-eazy";

const TabNav = () => {
  const guide = useGuideContext();
  useEffect(() => {
    guide.setGuideIndex(2);
  }, []);
  return <CustomTabs />;
};

export default TabNav;
