import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
 
];
{
  path: 'inicio'
loadChildren: () => import('./inicio/inicio.module').then(m =>
m.InicioPageModule)
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
