export interface IResults {
    id: string;
    name: string;
    date: string;
    time: string;
    image: string;
    priceMin: number,
    priceMax: number,
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