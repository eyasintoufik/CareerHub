
const getStroedJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication); 
    }
    return [];

}

const saveJobApplication = id =>{
    const storedJobApplications = getStroedJobApplication();
    const exists = storedJobApplications.find(jobId => jobId == id );
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications)); 
    }
}

export { getStroedJobApplication, saveJobApplication}