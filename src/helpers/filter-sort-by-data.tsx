import Service from "../assets/icons/serviceIcon.svg";
import Map from "../assets/icons/map.svg";
import Visited from "../assets/icons/visitedIcon.svg";
import Truck from "../assets/icons/services/truck.svg";
import Trailer from "../assets/icons/services/trailer.svg";
import Reefer from "../assets/icons/services/refer.svg";
import Shop from "../assets/icons/services/shop.svg";
import Mobile from "../assets/icons/services/mobile.svg";
import Towing from "../assets/icons/services/towing.svg";
import Parts from "../assets/icons/services/parts.svg";
import Tire from "../assets/icons/services/tire.svg";
import Dealer from "../assets/icons/services/dealer.svg";
import Heavy from "../assets/icons/services/heavy.svg";
import Dpf from "../assets/icons/services/dpf.svg";
import Body from "../assets/icons/services/body.svg";
import Align from "../assets/icons/services/alignment.svg";
import Engine from "../assets/icons/services/engine.svg";

export const filterData = [
  {
    id: 1,
    name: "Visited by me",
    icon: "#919191",
    iconActive: "#fff",
    list: {
      type: "visited",
      data: [],
    },
  },
  {
    id: 2,
    name: "Services",
    icon: "#919191",
    iconActive: "#fff",
    list: {
      type: "service-list",
      data: [
        {
          id: 1,
          name: "Truck",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 2,
          name: "Trailer",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 3,
          name: "Mobile",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 4,
          name: "Shop",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 5,
          name: "Towing",
          icon: "#919191",
          iconActive: "#fff",
        },
        {
          id: 6,
          name: "Parts",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 7,
          name: "Tire",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 8,
          name: "Dealer",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 9,
          name: "Reefer",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 10,
          name: "Heavy",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 11,
          name: "DPF",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 12,
          name: "Body",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 13,
          name: "Align",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
        {
          id: 14,
          name: "Engine",
          icon: "#919191",
          iconActive: "#fff",
          checked: false,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Area",
    icon: "#919191",
    iconActive: "#fff",
    list: {
      type: "location",
      data: [],
    },
  },
];

export const getSvgIcon = (type?: string, color?: string) => {
  switch (type) {
    case "Visited by me":
      return <Visited color={color} />;
    case "Services":
      return <Service color={color} />;
    case "Truck":
      return <Truck color={color} />;
    case "Trailer":
      return <Trailer color={color} />;
    case "Mobile":
      return <Mobile color={color} />;
    case "Shop":
      return <Shop color={color} />;
    case "Towing":
      return <Towing color={color} />;
    case "Parts":
      return <Parts color={color} />;
    case "Tire":
      return <Tire color={color} />;
    case "Dealer":
      return <Dealer color={color} />;
    case "Reefer":
      return <Reefer color={color} />;
    case "Heavy":
      return <Heavy color={color} />;
    case "DPF":
      return <Dpf color={color} />;
    case "Body":
      return <Body color={color} />;
    case "Align":
      return <Align color={color} />;
    case "Engine":
      return <Engine color={color} />;
    default:
      return <Map color={color} />;
  }
};
