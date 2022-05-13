import { useState } from "react";
import React from "react";
import JobSearchForm from "./JobSearchForm";
import JobResultList from "./JobResultList";

import joblist from "../joblist.json";

//Import our search methods
// import search from '../utils/API';

/*
   Create a parent component that contains both the search form and the results area
   Manage state here  
   Pass the state and the state setters into the other components 
*/

// Search the json data for whatever the searchJob is
// And set searchResults to whatever the result is
const JobSearch = () => {
  const [searchByJob, setSearchByJob] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const [results, setResults] = useState([]);

  // We want to run the useEffect method when the component first loads so that we have data for jobs to display to the page
  //The second argument is the dependency array. this means this method will onlyrun when the compent first loads

  const searchData = (e) => {
    e.preventDefault();

    const searchResult = joblist.filter(
      (job) =>
        job.job_title.toLowerCase().includes(searchByJob.toLowerCase()) || job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
/*
job_title = SpongeBob
searchByJob = sponge or pon or 
*/
    console.log(searchResult);
    setResults(searchResult);
  };

  // **TO DO**  Need to add a use effect to our smart component that will fetch the job data and set it to the state

  return (
    <div className="dashboard">
      <h1 className="font-weight-light">Job Search</h1>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Job Search</h1>

            {/* Search bar for Job and Location */}
            <JobSearchForm
              searchByJob={searchByJob}
              searchByLocation={searchByLocation}
              setSearchByJob={setSearchByJob}
              setSearchByLocation={setSearchByLocation}
              searchData={searchData}
            />
            {/* Pass our results From JobSearchForm to the JobResultList component to map over  */}

            {results.length === 0 ? (
              <div>No Results Found for your Search</div>
            ) : (
              <JobResultList results={results} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
