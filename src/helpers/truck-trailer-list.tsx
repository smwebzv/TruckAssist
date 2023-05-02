import SemiTruck from "../assets/icons/truckAndTrailerIcons/semiTruck.svg";
import SemiSleeper from "../assets/icons/truckAndTrailerIcons/semiSleeper.svg";
import BoxTruck from "../assets/icons/truckAndTrailerIcons/boxTruck.svg";
import TowTruck from "../assets/icons/truckAndTrailerIcons/towTruck.svg";
import Van from "../assets/icons/truckAndTrailerIcons/van.svg";
import Spotter from "../assets/icons/truckAndTrailerIcons/spotter.svg";
import Container from "../assets/icons/truckAndTrailerIcons/container.svg";
import Conestoga from "../assets/icons/truckAndTrailerIcons/conestoga.svg";
import Dumper from "../assets/icons/truckAndTrailerIcons/dumper.svg";
import FlatBed from "../assets/icons/truckAndTrailerIcons/flatBed.svg";
import CarHaulerStigner from "../assets/icons/truckAndTrailerIcons/carHaulerStigner.svg";
import LowBoy from "../assets/icons/truckAndTrailerIcons/lowBoy.svg";
import CarHauler from "../assets/icons/truckAndTrailerIcons/carHauler.svg";
import Reefer from "../assets/icons/truckAndTrailerIcons/reefer.svg";
import Tanker from "../assets/icons/truckAndTrailerIcons/tanker.svg";

export const getTruckIcon = (type: string) => {
  switch (type) {
    case "semiTruck":
      return <SemiTruck />;
    case "semiSleeper":
      return <SemiSleeper />;
    case "boxTruck":
      return <BoxTruck />;
    case "towTruck":
      return <TowTruck />;
    case "van":
      return <Van />;
    case "spotter":
      return <Spotter />;
    case "container":
      return <Container />;
    case "conestoga":
      return <Conestoga />;
    case "dumper":
      return <Dumper />;
    case "flatBed":
      return <FlatBed />;
    case "carHaulerStigner":
      return <CarHaulerStigner />;
    case "lowBoy":
      return <LowBoy />;
    case "carHauler":
      return <CarHauler />;
    case "reefer":
      return <Reefer />;
    case "tanker":
      return <Tanker />;
    default:
      return null;
  }
};

export const truckList = [
  {
    id: 1,
    name: "35645",
    type: "semiTruck",
    lastUsed: "30 days ago",
    status: "Assigned",
    visited: 194,
  },
  {
    id: 2,
    name: "55795",
    type: "semiSleeper",
    lastUsed: "31 days ago",
    status: "Last used",
    visited: 83,
  },
  {
    id: 3,
    name: "BB784",
    type: "boxTruck",
    lastUsed: "127 days ago",
    status: "Last used",
    visited: 324,
  },
  {
    id: 4,
    name: "TT-012",
    type: "towTruck",
    lastUsed: "245 days ago",
    status: "Last used",
    visited: 57,
  },
  {
    id: 5,
    name: "V975423",
    type: "van",
    lastUsed: "1 year ago",
    status: "Last used",
    visited: 857,
  },
  {
    id: 6,
    name: "SPOT",
    type: "spotter",
    lastUsed: "1 year ago",
    status: "Last used",
    visited: 0,
  },
  {
    id: 7,
    name: "55105",
    type: "semiSleeper",
    lastUsed: "2 year ago",
    status: "Last used",
    visited: 5,
  },
  {
    id: 8,
    name: "987045",
    type: "semiTruck",
    lastUsed: "4 year ago",
    status: "Last used",
    visited: 137,
  },
];

export const trailerList = [
  {
    id: 1,
    name: "35645",
    type: "container",
    lastUsed: "30 days ago",
    status: "Assigned",
    visited: 194,
  },
  {
    id: 2,
    name: "55795",
    type: "conestoga",
    lastUsed: "31 days ago",
    status: "Last used",
    visited: 83,
  },
  {
    id: 3,
    name: "BB784",
    type: "dumper",
    lastUsed: "127 days ago",
    status: "Last used",
    visited: 324,
  },
  {
    id: 4,
    name: "TT-012",
    type: "flatBed",
    lastUsed: "245 days ago",
    status: "Last used",
    visited: 57,
  },
  {
    id: 5,
    name: "V975423",
    type: "carHaulerStinger",
    lastUsed: "1 year ago",
    status: "Last used",
    visited: 857,
  },
  {
    id: 6,
    name: "SPOT",
    type: "lowBoy",
    lastUsed: "1 year ago",
    status: "Last used",
    visited: 0,
  },
  {
    id: 7,
    name: "55105",
    type: "reefer",
    lastUsed: "2 year ago",
    status: "Last used",
    visited: 5,
  },
  {
    id: 8,
    name: "987045",
    type: "tanker",
    lastUsed: "4 year ago",
    status: "Last used",
    visited: 137,
  },
];
