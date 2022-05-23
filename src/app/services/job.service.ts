import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  listOfJobs: Job[] = [
    {
      id: 1,
      title: "Microbiologist",
      description: "I performed identification and susceptibility testing on pathogens from patient samples.",
      duration: "5 years",
      employer: "Labcorp"
    },

    {
      id: 2,
      title: "Teacher and Pastor",
      description: "I ran a church in Ecuador, taught classes, led counseling  and coordinated outreach events.",
      duration: "8 years",
      employer: "Horizon Ministries"
    },

    {
      id: 3,
      title: "Database Administrator",
      description: "I created and maintained a cash flow database for a small hospital in Ecuador.",
      duration: "8 years",
      employer: "Reach Beyond"
    },

    {
      id: 4,
      title: "Med Tech Generalist",
      description: "I performed a variety of clinical laboratory tests for a jungle hospital in Ecuador.",
      duration: "5 years",
      employer: "Reach Beyond"
    },

    {
      id: 5,
      title: "Medical Technologist",
      description: "I performed routine clinical laboratory procedures using a variety of techniques.",
      duration: "3 years",
      employer: "West Seattle Community Hospital"
    },

  ];

  constructor() { }

  // asynchronous function to return list of contacts using observables
  getJobs(): Observable<Job[]> {
    return of(this.listOfJobs);
  }
  //asynchronous function to get each job by id number.
  getJob(id: number): Observable<Job | undefined> {
    return of(this.listOfJobs.find(j => j.id == id));
  }

}
