import React, { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  // State to store the article data, including the URL input by the user and the generated summary
  const [article, setArticle] = useState({
    url: "", // Stores the URL entered by the user
    summary: "", // Stores the fetched summary of the article
  });

  // RTK lazy query, Call when click the button
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)

    console.log("Submitted! Please wait for the API response..."); // Log message indicating request initiation

    const { data } = await getSummary({ articleUrl: article.url }); // Calls the API to get the summary

    if (data?.summary) {  // Checks if the API response contains a summary
      const newArticle = { ...article, summary: data.summary }; // Creates a new object with the updated summary

      setArticle(newArticle); // Updates state with the new article data

      console.log("Article Summary Updated:", newArticle); // Logs the updated article object
    }
  };


  // Return Section ------------------------------------------------------------- 

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search Section*/}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="peer url_input border border-gray-300 focus:border-blue-500 outline-none p-2"
          />
          <button
            type='submit'
            className="border border-gray-400 hover:border-gray-900 hover:bg-purple-400 hover:text-gray-900 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-12 items-center justify-center rounded text-lg text-gray-400 peer-focus:bg-purple-400 peer-focus:text-white peer-focus:border-gray-700"
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse History */}

      </div>

      {/* Display Result */}

    </section>
  )
}

export default Demo