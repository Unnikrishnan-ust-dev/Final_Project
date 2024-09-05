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

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "login", component:LoginComponent},
    {path: "signup", component: RegistrationComponent},
    {path: "services", component: ServicesComponent},
    {path: "providers", component: ProvidersComponent},
    {path: "service-form", component: ServiceFormComponent},
    {path: "service-provider-profile", component: ServiceProviderProfileComponent},
    {path: "checkout/:id", component: CheckoutComponent},
    {path: "edit-profile", component: EditProfileComponent},
    {path: "order-success", component: OrderSuccessComponent},
    { path: '\*\*', component: NotFoundComponent }
];
