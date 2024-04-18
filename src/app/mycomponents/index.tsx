'use client;'

import { MenuItem } from "@/carbon-sbook-components/Menu";
import React from "react";


const Mycomponents: React.FC = () => {
  return (
    <>
      {/* Section 1: Navigation */}
      <section aria-label="Mycomponents">
        <MenuItem label="My sample menu" />
      </section>
    </>
  );
};

export default Mycomponents