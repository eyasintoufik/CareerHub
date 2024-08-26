import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == parseInt(id));

    const { job_description, job_title, company_name, remote_or_onsite, job_type, salary, location, logo } = job;


    return (
        <div>
            <h2 className="text-2xl text-center mb-4">Job Details</h2>
            <div className="grid gap-4  md:grid-cols-4">
                    <div className="border md:col-span-3">
                        <h3>Job title: {job_title}</h3>
                        <p>Job Description: {job_description}</p>

                    </div>
                    <div className="border relative h-auto">
                        <p>Side things</p>
                        <button className='btn btn-primary w-full absolute bottom-0 left-0'>Apply Now</button>
                    </div>
            </div>
        </div>
    );
};

export default JobDetails;