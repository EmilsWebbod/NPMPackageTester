import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class Behavior<T> {

  private _model: BehaviorSubject<T> = new BehaviorSubject<T>(null);
  public $ = this._model.asObservable();

  constructor(initValue: T) {
    this._model = new BehaviorSubject<T>(initValue)
  }

  static of<T>(value: T): Behavior<T> {
    return new this(value);
  }

  set(value: T): void {
    this._model.next(value);
    console.log(this.get())
  }

  get(): T {
    return this._model.getValue();
  }
}
