import { Link } from "react-router-dom";

const routes = [
  { path: "/", name: "SEBA List" },
  { path: "/list-mgmt", name: "List Management" },
];

function NavigationBar() {
  return (
    <header>
      <nav>
        <ul>
          {routes.map((route) => {
            return (
              <li>
                <Link to={route.path}> {route.name} </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
