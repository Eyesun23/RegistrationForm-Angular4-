import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { UserComponentComponent } from './user-component/user-component.component';

@NgModule({
	declarations: [
		AppComponent,
		UserComponentComponent,
	],
	imports: [
		BrowserModule,
		FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
