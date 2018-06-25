export class TopBarController {
  static $inject = [];

  public appTitle: string;

  constructor() {}

  public changeTitle(): void {
    this.appTitle = "What";
  }
}
