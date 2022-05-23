import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job?: Job;
  
  constructor(private jobService: JobService, private activatedRoute: ActivatedRoute) { }

  // get the job ID from the route
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['jobId']);
    const id = this.activatedRoute.snapshot.params['jobId'];

    // get the job detail data using the ID from the job-service.
 this.jobService.getJob(id).subscribe(result => {
   this.job = result;
 })

  }
 

}
