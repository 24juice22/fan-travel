export interface IResults {
    id: string;
    name: string;
    date: string;
    time: string;
    priceMin: number,
    seatMap: string;
    locationName: string;
    city: string;
    state: string;
    location: ILocation;
}

export interface ILocation {
    lat: string;
    long: string;
}

export interface IBrewery {
    city: string;
    name: string;
    website: string;
}