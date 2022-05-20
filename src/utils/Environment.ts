interface UiConfig {
    baseUrl: string,
    timeout: number
}

export interface ApiConfig {
    baseUrl: string
    defaultHeaders: Record<string, string>
}

interface EnvironmentDetails {
    uiConfig: UiConfig;
    apiConfig: ApiConfig;
}

class Environment {

    private dev: EnvironmentDetails = {
        uiConfig: { baseUrl: 'https://www.dailymail.co.uk/', timeout: 60000 },
        apiConfig: { baseUrl: 'https://reqbin.com/', defaultHeaders: { Accept: '*' } }
    };

    public get getUiConfig(): UiConfig {
        return this['dev'].uiConfig;
    }

    public get getApiConfig(): ApiConfig {
        return this['dev'].apiConfig;
    }

}
export default new Environment();