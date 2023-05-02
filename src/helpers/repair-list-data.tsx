import RepairOrder from "../assets/images/repairOrder.svg";
import ShopList from "../assets/images/shopList.svg";
import TrailerBill from "../assets/images/trailerBill.svg";
import TruckBill from "../assets/images/truckBill.svg";
import Pm from "../assets/images/pm.svg";

import Truck from "../assets/icons/services/truck.svg";
import Trailer from "../assets/icons/services/trailer.svg";
import Refer from "../assets/icons/services/refer.svg";
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
import colors from "./colors";

export const repairList = [
  {
    id: 1,
    name: "Create Order",
    description: "Send order to repair department",
    count: 0,
    value: "createOrder",
    image: <RepairOrder />,
  },
  {
    id: 2,
    name: "Repair Shop",
    description: "Find shop that match your needs",
    count: 348,
    value: "repairShopCount",
    image: <ShopList />,
  },
  {
    id: 3,
    name: "Preventive Maintenance",
    description: "Air Filter, 75K mi to go",
    value: "preventiveMaintenance",
    image: <TrailerBill />,
  },
  {
    id: 4,
    name: "Truck Repair Bills",
    description: "History of truck repairs",
    count: 194,
    value: "truckRepairCount",
    image: <TruckBill />,
  },
  {
    id: 5,
    name: "Trailer Repair Bills",
    description: "History of tailer repairs",
    count: 43,
    value: "trailerRepairCount",
    image: <Pm />,
  },
];

export const serviceType = [
  {
    icon: <Truck color={colors.inactiveButton} />,
    iconActive: <Truck color={"#6C6C6C"} />,
    iconServiceActive: <Truck color={"#fff"} />,
    iconService: <Truck color="#98B9EA" />,
    name: "Truck",
  },
  {
    icon: <Trailer color={colors.inactiveButton} />,
    iconActive: <Trailer color={"#6C6C6C"} />,
    iconServiceActive: <Trailer color={"#fff"} />,
    iconService: <Trailer color="#98B9EA" />,
    name: "Trailer",
  },
  {
    icon: <Mobile color={colors.inactiveButton} />,
    iconActive: <Mobile color={"#6C6C6C"} />,
    iconServiceActive: <Mobile color={"#fff"} />,
    iconService: <Mobile color="#98B9EA" />,
    name: "Mobile",
  },
  {
    icon: <Shop color={colors.inactiveButton} />,
    iconActive: <Shop color={"#6C6C6C"} />,
    iconServiceActive: <Shop color={"#fff"} />,
    iconService: <Shop color="#98B9EA" />,
    name: "Shop",
  },
  {
    icon: <Towing color={colors.inactiveButton} />,
    iconActive: <Towing color={"#6C6C6C"} />,
    iconServiceActive: <Towing color={"#fff"} />,
    iconService: <Towing color="#98B9EA" />,
    name: "Towing",
  },
  {
    icon: <Parts color={colors.inactiveButton} />,
    iconActive: <Parts color={"#6C6C6C"} />,
    iconServiceActive: <Parts color={"#fff"} />,
    iconService: <Parts color="#98B9EA" />,
    name: "Parts",
  },
  {
    icon: <Tire color={colors.inactiveButton} />,
    iconActive: <Tire color={"#6C6C6C"} />,
    iconServiceActive: <Tire color={"#fff"} />,
    iconService: <Tire color="#98B9EA" />,
    name: "Tire",
  },
  {
    icon: <Dealer color={colors.inactiveButton} />,
    iconActive: <Dealer color={"#6C6C6C"} />,
    iconServiceActive: <Dealer color={"#fff"} />,
    iconService: <Dealer color="#98B9EA" />,
  },
  {
    icon: <Refer color={colors.inactiveButton} />,
    iconActive: <Refer color={"#6C6C6C"} />,
    iconServiceActive: <Refer color={"#fff"} />,
    iconService: <Refer color="#98B9EA" />,
    name: "Refer",
  },
  {
    icon: <Heavy color={colors.inactiveButton} />,
    iconActive: <Heavy color={"#6C6C6C"} />,
    iconServiceActive: <Heavy color={"#fff"} />,
    iconService: <Heavy color="#98B9EA" />,
    name: "Refer",
  },
  {
    icon: <Dpf color={colors.inactiveButton} />,
    iconActive: <Dpf color={"#6C6C6C"} />,
    iconServiceActive: <Dpf color={"#fff"} />,
    iconService: <Dpf color="#98B9EA" />,
    name: "DPF",
  },
  {
    icon: <Body color={colors.inactiveButton} />,
    iconActive: <Body color={"#6C6C6C"} />,
    iconServiceActive: <Body color={"#fff"} />,
    iconService: <Body color="#98B9EA" />,
    name: "Body",
  },
  {
    icon: <Align color={colors.inactiveButton} />,
    iconActive: <Align color={"#6C6C6C"} />,
    iconServiceActive: <Align color={"#fff"} />,
    iconService: <Align color="#98B9EA" />,
    name: "Align",
  },
  {
    icon: <Engine color={colors.inactiveButton} />,
    iconActive: <Engine color={"#6C6C6C"} />,
    iconServiceActive: <Engine color={"#fff"} />,
    iconService: <Engine color="#98B9EA" />,
    name: "Engine",
  },
];

export const shopMobileServices = [
  {
    icon: <Truck color={colors.mediumGrey} />,
    iconInactive: <Truck color={colors.inactiveButton} />,
    name: "Truck",
  },
  {
    icon: <Trailer color={colors.mediumGrey} />,
    iconInactive: <Trailer color={colors.inactiveButton} />,
    name: "Trailer",
  },
  {
    icon: <Towing color={colors.mediumGrey} />,
    iconInactive: <Towing color={colors.inactiveButton} />,
    name: "Towing",
  },
  {
    icon: <Parts color={colors.mediumGrey} />,
    iconInactive: <Parts color={colors.inactiveButton} />,
    name: "Parts",
  },
  {
    icon: <Tire color={colors.mediumGrey} />,
    iconInactive: <Tire color={colors.inactiveButton} />,
    name: "Tire",
  },
  {
    icon: <Dealer color={colors.mediumGrey} />,
    iconInactive: <Dealer color={colors.inactiveButton} />,
    name: "Dealer",
  },
  {
    icon: <Refer color={colors.mediumGrey} />,
    iconInactive: <Refer color={colors.inactiveButton} />,
    name: "Reefer",
  },
  {
    icon: <Heavy color={colors.mediumGrey} />,
    iconInactive: <Heavy color={colors.inactiveButton} />,
    name: "Heavy",
  },
  {
    icon: <Dpf color={colors.mediumGrey} />,
    iconInactive: <Dpf color={colors.inactiveButton} />,
    name: "DPF",
  },
  {
    icon: <Body color={colors.mediumGrey} />,
    iconInactive: <Body color={colors.inactiveButton} />,
    name: "Body",
  },
  {
    icon: <Align color={colors.mediumGrey} />,
    iconInactive: <Align color={colors.inactiveButton} />,
    name: "Align",
  },
  {
    icon: <Engine color={colors.mediumGrey} />,
    iconInactive: <Engine color={colors.inactiveButton} />,
    name: "Engine",
  },
];

export const truckBillList = [
  {
    name: "INV-35645-2022",
    shopName: "MAXIMUM TOWING AND RECOVERY",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Mud flap assembly",
      "SAM Fuse box module",
      "Crankshaft seal supply",
      "Cab blower harness",
      "Cab blower",
      "15 Amps fuse",
      "Shrink connector",
      "Starter",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: ["Parts", "Labor", "Tax"],
  },
  {
    name: "INV-35645-2022",
    shopName: "RIM MOLDING",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Cascadia front bumper assembly no fog light Note Truck Zone",
      "Cascadia bumper bracket",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "TA TRUCK DE MOTTE, IN",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "15 Amps fuse",
      "Transmission",
      "Clutch",
      "Cut the flywheel install bearing",
      "Cascadia bumper bracket",
      "Crankshaft seal",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "COMPANY NAME EXAMPLE",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "ARMEN’S TIRE AND SERVICE",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "TA TRUCK DE MOTTE, IN",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "MAXIMUM TOWING AND RECOVERY",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "RIM MOLDING",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "COMPANY NAME EXAMPLE",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Mud flap assembly",
      "SAM Fuse box module",
      "Crankshaft seal supply",
      "Cab blower harness",
      "Cab blower",
      "15 Amps fuse",
      "Shrink connector",
      "Starter",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: ["Parts", "Labor", "Tax"],
  },
  {
    name: "INV-35645-2022",
    shopName: "ARMEN’S TIRE AND SERVICE",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Cascadia front bumper assembly no fog light Note Truck Zone",
      "Cascadia bumper bracket",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "15 Amps fuse",
      "Transmission",
      "Clutch",
      "Cut the flywheel install bearing",
      "Cascadia bumper bracket",
      "Crankshaft seal",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "ARMEN’S TIRE AND SERVICE",
    paid: true,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
  {
    name: "INV-35645-2022",
    shopName: "IVS TRUCK REPAIR, INC.",
    paid: false,
    date: "04/07/22",
    price: "$2,372.17",
    items: [
      "Transmission oil",
      "Transmission input shaft bearing",
      "Crankshaft seal supply",
    ],
  },
];
