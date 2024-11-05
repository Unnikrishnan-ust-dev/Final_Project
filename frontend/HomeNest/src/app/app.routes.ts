import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services/services.component';
import { ProvidersComponent } from './serviceProviders/providers/providers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { AuthGuardService } from './routeGaurds/auth-guard.service';
import { UserAuthGaurdService } from './routeGaurds/user-auth-gaurd.service';
import { CheckIsLoggedInGaurdService } from './routeGaurds/check-is-logged-in-gaurd.service';
import { OrdersComponent } from './order-page-user/order-page-user.component';
import { ProviderOrdersComponent } from './order-page-provider/order-page-provider.component';
import { providerGaurdGuard } from './routeGaurds/provider-gaurd.guard';
import { AllServicesComponent } from './serviceProviders/all-services/all-services.component';
import { ServiceUpdateFormComponent } from './service-update-form/service-update-form.component';
import { hasQueryToUpdateGuard } from './routeGaurds/has-query-to-update.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    // if the user is a provider dont allow
    {path: "",component:HomeComponent, canActivate: [providerGaurdGuard]},
    {path:"contact", component:ContactComponent},
    {path:"about", component:AboutComponent},
    {path: "login", component:LoginComponent, canActivate: [CheckIsLoggedInGaurdService]},
    {path: "signup", component: RegistrationComponent, canActivate: [CheckIsLoggedInGaurdService]},
    {path: "services", component: ServicesComponent, canActivate: [UserAuthGaurdService]},
    {path: "providers", component: ProvidersComponent, canActivate: [UserAuthGaurdService]},
    {path: "checkout/:id", component: CheckoutComponent, canActivate: [UserAuthGaurdService]},
    {path: "edit-profile", component: EditProfileComponent},
    {path: "order-success", component: OrderSuccessComponent, canActivate: [UserAuthGaurdService]},
    {path: "service-form", component: ServiceFormComponent, canActivate:[AuthGuardService]},
    {path: "service-update-form", component: ServiceUpdateFormComponent, canActivate:[AuthGuardService,hasQueryToUpdateGuard]},
    {path: "service-provider-profile", component: ServiceProviderProfileComponent, canActivate:[AuthGuardService]},
    {path: "order-page-user", component: OrdersComponent, canActivate: [UserAuthGaurdService]},
    {path: "order-page-provider", component: ProviderOrdersComponent, canActivate:[AuthGuardService]},
    {path: "services/provider", component: AllServicesComponent, canActivate:[AuthGuardService]},
    { path: '\*\*', component: NotFoundComponent }
];
