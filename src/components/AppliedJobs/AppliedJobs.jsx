import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStroedJobApplication } from '../../utility/localstorage';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]); 
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobsIds = getStroedJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied); 
        }
    }, [jobs])

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs); 
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote'); 
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite'); 
            setDisplayJobs(onsiteJobs);
        }
    }
    return (
        <div>
            <h1 className='text-2xl text-white'>Jobs I applied : {appliedJobs.length}</h1>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleJobsFilter('all')}><a >All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job =>
                        <li key={job.id}>
                            <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;