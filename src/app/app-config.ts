import { OpaqueToken }      from '@angular/core';

export interface AppConfig {
    apiEndpoint: string;
    title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection',
};

export let APP_CONFIG = new OpaqueToken('app.config');

export let appConfigProvider = { 
                            provide: APP_CONFIG, 
                            useValue: HERO_DI_CONFIG
                        };