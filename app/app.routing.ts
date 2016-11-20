import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomPreloadingStrategy } from './shared/preloading.strategy';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{
		path: 'contact',
		loadChildren: 'app/+contact/contact.module#ContactModule',
		data: {
			preload: true
		}
	}
];

export const routing = RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy});
