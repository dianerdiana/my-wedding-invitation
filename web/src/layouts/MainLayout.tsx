import { ReactLenis } from "@studio-freight/react-lenis";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="w-full h-full max-w-screen-sm min-h-screen px-5 pb-10 mx-auto overflow-x-hidden bg-primary">
      <ReactLenis root>
        <Outlet />
      </ReactLenis>
    </section>
  );
};

export default MainLayout;
