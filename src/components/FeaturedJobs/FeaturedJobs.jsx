import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';

const FeaturedJobs = () => {
    const [allJobsData, setAllJobData] = useState(4);
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
            .then(res =>res.json())
            .then(data => setJobs(data));
    },[])

    return (
        <div>
            <div className='text-center my-10'>
                <h2 className="text-5xl ">Featured Jobs</h2>
                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, iusto?</p>
            </div>
            <div className='grid grid-cols-2 gap-2 '>
                {
                    jobs.slice(0,allJobsData).map(job => <Jobs key={jobs.id} job = {job}></Jobs>)
                }
            </div>
            <div className={allJobsData === jobs.length ?  'hidden' : 'text-center && mb-2'} >
                <button
                onClick={()=> setAllJobData(jobs.length)}
                className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;