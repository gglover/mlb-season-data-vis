import { Link } from "@tanstack/react-router";
import { TEAMS } from "../constants";

export function Header() {
  return (
    <header className="text-black bg-gray-200">
      <div className="w-xl m-auto py-2">
        <div className="flex justify-end align-middle">
          <h1 className="flex-grow">
            <Link to="/">MLB HeatIDX</Link>
          </h1>
          <Link to="/about">About</Link>
          <Link to="https://github.com/gglover/mlb-season-data-vis">gh</Link>
        </div>
        <div className="team-links">
          {Object.values(TEAMS).map((team) => (
            <Link
              key={team.id}
              to="/teams/$teamSymbol"
              params={{ teamSymbol: team.symbol }}
            >
              {team.symbol}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
