import AddFuelTransaction from "../assets/icons/addFuelTransaction.svg";
import FuelStop from "../assets/icons/fuelStop.svg";
import FuelTransaction from "../assets/icons/fuelTransaction.svg";
import FuelCard from "../assets/icons/fuelCard.svg";

export const fuelList = [
  {
    id: 1,
    name: "Add Fuel Transaction",
    description: "C$500.00 • Fuel Advance",
    image: <AddFuelTransaction />,
  },
  {
    id: 2,
    name: "Fuel Stop",
    description: "Find stops with best deal",
    count: 348,
    image: <FuelStop />,
  },
  {
    id: 3,
    name: "Fuel Transaction",
    description: "History of truck repairs",
    count: 194,
    image: <FuelTransaction />,
  },
  {
    id: 4,
    name: "Fuel Card",
    description: "7083052138884321357",
    image: <FuelCard />,
    status: "Active",
  },
];
