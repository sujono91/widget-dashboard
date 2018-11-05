import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    ApiService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core Module has already been loaded. Import Core modules in the AppModule only.');
    }
  }
}
