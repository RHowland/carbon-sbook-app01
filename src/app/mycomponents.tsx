'use client;'
import { MenuItem, MenuItemDivider } from "@/carbon-sbook-components/Menu";
import { MenuButton } from "@/carbon-sbook-components/MenuButton";
import React from "react";


const MyLogo: React.FC = () => {
  return (
    <>
      {/* Section 1: Navigation */}
       {/* <section aria-label="MyLogo"> */}
       <MenuButton label="Actions" menuAlignment="bottom">
         <MenuItem label="First action" />
         <MenuItem label="Second action" />
         <MenuItem label="Third action" />
         <MenuItemDivider />
         <MenuItem label="Danger action" kind="danger" />
       </MenuButton>
       {/* </section> */}
    </>
  //   <>
  //   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //     <MenuButton label="Bottom" menuAlignment="bottom">
  //       <MenuItem label="First action" />
  //       <MenuItem label="Second action that is a longer item to test overflow and title." />
  //       <MenuItem label="Third action" disabled />
  //     </MenuButton>

  //     <MenuButton label="Bottom start" menuAlignment="bottom-start">
  //       <MenuItem label="First action" />
  //       <MenuItem label="Second action that is a longer item to test overflow and title." />
  //       <MenuItem label="Third action" disabled />
  //     </MenuButton>

  //     <MenuButton label="Bottom end" menuAlignment="bottom-end">
  //       <MenuItem label="First action" />
  //       <MenuItem label="Second action that is a longer item to test overflow and title." />
  //       <MenuItem label="Third action" disabled />
  //     </MenuButton>
  //   </div>

  //   <div
  //     style={{
  //       display: 'flex',
  //       marginTop: '15rem',
  //       justifyContent: 'space-between',
  //     }}>
  //     <MenuButton label="Top" menuAlignment="top">
  //       <MenuItem label="First action" />
  //       <MenuItem label="Second action that is a longer item to test overflow and title." />
  //       <MenuItem label="Third action" disabled />
  //     </MenuButton>

  //     <MenuButton label="Top start" menuAlignment="top-start">
  //       <MenuItem label="First action" />
  //       <MenuItem label="Second action that is a longer item to test overflow and title." />
  //       <MenuItem label="Third action" disabled />
  //     </MenuButton>

  //     <MenuButton label="Top end" menuAlignment="top-end">
  //       <MenuItem label="First action" />
  //       <MenuItem label="Second action that is a longer item to test overflow and title." />
  //       <MenuItem label="Third action" disabled />
  //     </MenuButton>
  //   </div>
  // </>
  );
};

export default MyLogo