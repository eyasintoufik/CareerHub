import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";


const Jobs = ({ job }) => {
    const { job_description, job_title, company_name, remote_or_onsite, job_type, salary, location, logo } = job;

    return (
        <div >
            <div className="card card-compact my-6 shadow-xl">
                <figure>
                    <img className=''
                        src={logo}
                        alt={job_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{company_name}</h2>
                    <p>{job_title}</p>
                    <div className="flex">
                        <div className='flex '>
                            <h2><CiLocationOn className='text-2xl mr-1'></CiLocationOn></h2>
                            <h2 className='text-balance mr-2'>{location}</h2>
                        </div>
                        <div className='flex'>
                            <h2><CiDollar className='text-2xl mr-1'></CiDollar></h2>
                            <h2 className='text-balance'>{salary}</h2>
                        </div>
                    </div>
                    <div>
                        <button className='px-5 py-2 font-extrabold border-lime-900 rounded border '>{remote_or_onsite}</button>
                        <button className='px-5 mx-3 py-2 font-extrabold border-lime-900 rounded border '>{job_type}</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;