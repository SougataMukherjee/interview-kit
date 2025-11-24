import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();// usePathname in next/navigation
  const paths = location.pathname.split("/").filter(Boolean);

  let fullPath = "";

  return (
    <div style={{ margin: "10px 0" }}>
      <Link to="/">Home</Link>

      {paths.map((p, index) => {
        fullPath += "/" + p;

        return (
          <span key={index}>
            {" / "}
            <Link to={fullPath}>{p}</Link>
          </span>
        );
      })}
    </div>
  );
}
