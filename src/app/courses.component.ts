import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "title: " + getTitle() }}</h2>

        <div *ngIf="numberOfCourses === 1; else plural">
            <h3>{{numberOfCourses + " Author"}}</h3>
        </div>
        <ng-template #plural><h3>{{numberOfCourses + " Authors"}}</h3></ng-template>

        <ul *ngFor="let course of courses">
            {{ course }}
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    numberOfCourses;

    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.numberOfCourses = this.courses.length;
    }
}