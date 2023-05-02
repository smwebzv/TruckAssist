export interface IOpenHoursProps {
  dayOfWeek: string, 
  endTime: string,
  startTime: string
}

export interface IServiceTypesProps {
  active: boolean, 
  logoName: string, 
  serviceType: {id: number, name: string}
}

export interface IAddressProps {
  address?: string, 
  addressUnit?: number | string | undefined, 
  city?: string, 
  country?: string, 
  county?: string, 
  state?: string, 
  stateShortName?: string, 
  street?: string, 
  streetNumber?: number, 
  zipCode?: number
}

export interface IShopListProps {
  account?: any, 
  address?: IAddressProps, 
  bank?: any, 
  companyId?: number, 
  companyOwned?: boolean, 
  contacts?: [], 
  cost?: number, 
  createdAt?: string, 
  currentCompanyUserRating?: number | string | undefined, 
  distance?: number, 
  downCount?: number, 
  email?: string, 
  endTimeAllDays?: string, 
  fileCount?: number | string | undefined, 
  files?: any, 
  id?: number, 
  lastVisited?: string | number | Date | undefined, 
  latitude?: number | string, 
  longitude?: number | string, 
  monthlyDay?: number | string | undefined, 
  name?: string, 
  note?: number | string | undefined, 
  openAlways?: number | string | undefined, 
  openHours?: IOpenHoursProps [], 
  openHoursSameAllDays?: boolean, 
  openHoursToday?: string, 
  order?: number, 
  payPeriod?: number | string | undefined, 
  phone?: string, 
  phoneExt?: number | string | undefined, 
  pinned?: boolean, 
  rent?: number | string | undefined, 
  reviews?: number | string | undefined, 
  routing?: number | string | undefined, 
  serviceTypes?: IServiceTypesProps [], 
  startTimeAllDays?: string, 
  status?: number, 
  timesVisitedByCompany?: number, 
  upCount?: number, 
  updatedAt?: string, 
  weeklyDay?: number | string | undefined,
  location?: string;
  count?: number;
  like?: number;
  unlike?: number;
  star?: boolean;
  location1?: string;
  location2?: string;
  numberLoad?: number;
  time1?: string;
  time2?: string;
  pickupNumber?: number;
  deliveryNumber?: number;
}

export interface IRepairCountsProps {
  repairShopCount?: number, 
  trailerRepairCount?: number, 
  truckRepairCount?: number
}

export interface IRepairProps {
    shopList: IShopListProps [],
    shopMapList: string,
    serviceFilter: string,
    searchValue: string,
    setSort: string,
    numberOfShops: number,
    findedNumberOfShops: number,
    selectedRepairShop: IShopListProps,
    isSearchInputFocused: boolean,
    focusedRepairShop: IShopListProps,
    focusedRepairShopIndex: number,
    pageIndex: number,
    loader: boolean,
    repairCounts: any
  };