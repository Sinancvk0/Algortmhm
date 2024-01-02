import { Routes } from '@angular/router';
import { DoorComponent } from '../components/door/door.component';
import { MultipleComponent } from '../components/multiple/multiple.component';

export const routes: Routes = [
    {path:"door",component:DoorComponent},
    {path:"multiple",component:MultipleComponent}
];
