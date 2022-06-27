export class LatitudeLongitude {
  coord: { lat: number; lon: number };
  name: string;

  constructor(coord: { lat: number; lon: number }, name: string) {
    this.coord = coord;
    this.name = name;
  }
}
