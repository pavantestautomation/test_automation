import { World, setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import RestClient from "../core/api/RestClient";
import UiClient from '../core/ui/UiClient';
import Pages from '../pages/Pages';

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