import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent }   from './profile.component';
import { GithubService } from '../../services/github.service'; 

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ProfileComponent],
    declarations: [ProfileComponent],
    providers: [GithubService],
})
export class ProfileModule { }
