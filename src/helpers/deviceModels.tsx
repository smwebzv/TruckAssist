export const deviceModelsAndroid = [
  {
    name: "Samsung S22+",
    model: ["Samsung S22 Plus", "SM-S906U1"],
    corner: 32,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "Samsung S23 Ultra",
    model: ["Samsung S22 Ultra", "SM-S918U"],
    corner: 4,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "Samsung A51",
    model: ["SM-A515F"],
    corner: 24,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "sdk_gphone64_x86_64",
    model: ["sdk_gphone64_x86_64"],
    corner: 24,
    padding: 8,
    iconCorner: 20,
  },
];

export const deviceModelsIOS = [
  {
    name: "iPhone 14",
    model: ["iPhone 14"],
    corner: 47,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 14 Pro",
    model: ["iPhone 14 Pro"],
    corner: 55,
    padding: 12,
    iconCorner: 20,
  },
  {
    name: "iPhone 14 Pro Max",
    model: ["iPhone 14 Pro Max"],
    corner: 55,
    padding: 12,
    iconCorner: 20,
  },
  {
    name: "iPhone 13 mini",
    model: ["iPhone 13 mini"],
    corner: 44,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 13 Pro Max",
    model: ["iPhone 13 Pro Max"],
    corner: 53,
    padding: 12,
    iconCorner: 20,
  },
  {
    name: "iPhone 13 Pro",
    model: ["iPhone 13 Pro"],
    corner: 47,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 13",
    model: ["iPhone 13"],
    corner: 47,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 12 mini",
    model: ["iPhone 12 mini"],
    corner: 44,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 12 Pro Max",
    model: ["iPhone 12 Pro Max"],
    corner: 53,
    padding: 12,
    iconCorner: 20,
  },
  {
    name: "iPhone 12 Pro",
    model: ["iPhone 12 Pro"],
    corner: 47,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 12",
    model: ["iPhone 12"],
    corner: 47,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 11",
    model: ["iPhone 11"],
    corner: 41,
    padding: 10,
    iconCorner: 20,
  },
  {
    name: "iPhone 11 Pro",
    model: ["iPhone 11 Pro"],
    corner: 39,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "iPhone 11 Pro Max",
    model: ["iPhone 11 Pro Max"],
    corner: 39,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "iPhone X",
    model: ["iPhone X"],
    corner: 39,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "iPhone XS",
    model: ["iPhone XS"],
    corner: 39,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "iPhone XS Max",
    model: ["iPhone XS Max"],
    corner: 39,
    padding: 8,
    iconCorner: 20,
  },
  {
    name: "iPhone XR",
    model: ["iPhone XR"],
    corner: 41,
    padding: 10,
    iconCorner: 20,
  },
];

export const getDeviceModelAndroid = (model: string) => {
  let foundDevice = deviceModelsAndroid.find((item) => {
    if (item.model.includes(model)) {
      return item;
    }
  });

  return foundDevice;
};

export const getDeviceModelIos = (model: string) => {
  let foundDevice = deviceModelsIOS.find((item) => {
    if (item.model.includes(model)) {
      return item;
    }
  });

  return foundDevice;
};
