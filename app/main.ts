import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appRoutingProviders } from './app.routes';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [appRoutingProviders]);
