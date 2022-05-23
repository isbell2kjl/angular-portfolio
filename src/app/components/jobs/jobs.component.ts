import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  listofJobs: Job[] = [];

  constructor(private service: JobService) { }

  ngOnInit(): void {
    this.service.getJobs().subscribe(result => {
      this.listofJobs = result;
    })
  }
}
