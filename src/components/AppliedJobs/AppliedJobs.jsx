import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStroedJobApplication } from '../../utility/localstorage';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]); 
    const jobs = useLoaderData();
    useEffect( ()=>{
        const storedJobsIds = getStroedJobApplication(); 
        if(jobs.length > 0){
            const jobsApplied = []; 
            for(const id of storedJobsIds){
                const job = jobs.find(job => job.id === id); 
                if(job){
                    jobsApplied.push(job); 
                }
            }
            setAppliedJobs(jobsApplied); 
        }
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-white'>Jobs I applied : {appliedJobs.length}</h1>
            <ul>
                {
                    appliedJobs.map(job => 
                        <li key = {job.id}> 
                            <span>{job.job_title} {job.company_name}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;