import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <image src="{{imageUrl}}"/>   
    `
})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
}
