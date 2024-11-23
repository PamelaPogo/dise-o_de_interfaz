import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideServerRendering()
=======
    provideServerRendering(),
>>>>>>> 8a0782b8c497fdf2343b97cb4dd40b2769b467cd
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
