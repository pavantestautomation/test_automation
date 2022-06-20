import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import Pages from '../pages/Pages';
import RestClient from 'clients/api/RestClient';
import UiClient from 'clients/ui/UiClient';

export default class TestContext extends World {
  private _uiClient: UiClient;
  private _restClient: RestClient;
  private _value: unknown;

  constructor(options: IWorldOptions) {
    super(options);
    this._uiClient = new UiClient();
    this._restClient = new RestClient();
  }

  get oneMail(): Pages {
    return new Pages(this._uiClient.page);
  }

  get UiClient(): UiClient {
    return this._uiClient;
  }

  get restClient(): RestClient {
    return this._restClient;
  }

  get value(): unknown {
    return this._value;
  }

  set value(value: unknown) {
    this._value = value;
  }
}
setWorldConstructor(TestContext);
