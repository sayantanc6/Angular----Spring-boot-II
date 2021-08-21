export class Artist {
  public ArtistId: number;
  public name: String;
  public age: Number;
  public description: String;
  public catchphrase: String;

  constructor(
    ArtistId: number,
    name: String,
    age: Number,
    desc: String,
    catchphrase: String
  ) {
    this.ArtistId = ArtistId;
    this.name = name;
    this.age = age;
    this.description = desc;
    this.catchphrase = catchphrase;
  }
}