import { IIntervalService } from "angular";

export class AppRootController {
  static $inject: string[] = ['$interval'];

  public title: string;

  constructor(private $interval: IIntervalService) {
    console.log('App is initialized');

    this.title = 'Test App';
    $interval(() => {
      if (this.title === 'Test App') {
        this.title = 'AngularJS + TypeScript + LESS';
      } else {
        this.title = 'Test App';
      }
    }, 2000);
  }
}
