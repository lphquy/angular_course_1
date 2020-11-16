import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "title: " + getTitle() }}</h2>
        <ul *ngFor="let course of courses">
            {{ course }}
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}