import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services/services.component';
import { ProvidersComponent } from './serviceProviders/providers/providers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { UserAuthGaurdService } from './user-auth-gaurd.service';
import { CheckIsLoggedInGaurdService } from './check-is-logged-in-gaurd.service';

export const routes: Routes = [
    {path: "",component:HomeComponent},
<<<<<<< HEAD
    {path: "login", component:LoginComponent, canActivate: [CheckIsLoggedInGaurdService]},
    {path: "signup", component: RegistrationComponent, canActivate: [CheckIsLoggedInGaurdService]},
    {path: "services", component: ServicesComponent, canActivate: [UserAuthGaurdService]},
    {path: "providers", component: ProvidersComponent, canActivate: [UserAuthGaurdService]},
    {path: "checkout/:id", component: CheckoutComponent, canActivate: [UserAuthGaurdService]},
    {path: "edit-profile", component: EditProfileComponent},
    {path: "order-success", component: OrderSuccessComponent, canActivate: [UserAuthGaurdService]},
    {path: "service-form", component: ServiceFormComponent, canActivate:[AuthGuardService]},
    {path: "service-provider-profile", component: ServiceProviderProfileComponent, canActivate:[AuthGuardService]},
=======
    {path: "login", component:LoginComponent},
    {path: "signup", component: RegistrationComponent},
    {path: "services", component: ServicesComponent},
    {path: "providers", component: ProvidersComponent},
    {path: "service-form", component: ServiceFormComponent},
    {path: "service-provider-profile", component: ServiceProviderProfileComponent},
    {path: "checkout/:id", component: CheckoutComponent},
    {path: "edit-profile", component: EditProfileComponent},
    {path: "order-success", component: OrderSuccessComponent},
>>>>>>> a457b48c56f15957796c95d9d046719853422926
    { path: '\*\*', component: NotFoundComponent }
];
