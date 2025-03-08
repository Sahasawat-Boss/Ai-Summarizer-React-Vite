// Import Dependencies Section ----------------------------------------------------------------------------
import React, { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

// Logic Section Section ---------------------------------------------------------------------- 

const Demo = () => {
  // State to store the article data, including the URL input by the user and the generated summary
  const [article, setArticle] = useState({
    url: "", // Stores the URL entered by the user
    summary: "", // Stores the fetched summary of the article
  });

  //Store Articles
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  // RTK lazy query, Call when click the button
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Retrieve articles data from local storage and parse them into a JavaScript object
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"));

    // If there are articles stored, update the state with them
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // This ensures that previously saved articles are restored when the page reloads or the tab is reopened,
  // preventing data loss from a page refresh or accidental closure.


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)

    console.log("Submitted! Please wait for the API response..."); // Log message indicating request initiation

    const { data } = await getSummary({ articleUrl: article.url }); // Calls the API to get the summary


    if (data?.summary) {  // Checks if the API response contains a summary
      const newArticle = { ...article, summary: data.summary }; // Creates a new object with the updated summary
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle); // Updates the state with the new summarized article
      setAllArticles(updatedAllArticles); // Updates the list of all articles

      // Saves the updated articles list to local storage to prevent data loss on page reload or tab closure
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));

      console.log("Article Summary Updated:", newArticle); // Logs the updated article object for debugging
    } else {
      console.log("No summary received from the API."); // Logs a message if no summary is returned
    }
  };
  // Function to copy the URL to the clipboard and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl); // ✅ Update the state to indicate which URL was copied

    navigator.clipboard.writeText(copyUrl); // ✅ Copy the URL to the clipboard

    // ✅ Reset the copied state after 1.5 seconds to switch back to the original icon
    setTimeout(() => setCopied(false), 1500);
  };


  // Return Section (UI Rendering: Displayed in the browser ) ------------------------------------------------------------- 
  return (
    <section className='mt-16 w-full max-w-xl '>
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
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto mt-3'>
          {/* Section heading */}
          <h2 className='font-satoshi font-bold text-gray-600 text-2xl text-center mb-3'>
            Browses <span className='purple_gradient'>History</span>
          </h2>

          {allArticles.reverse().map((item, index) => ( // Reverse the array to show the most recent first
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)} // Sets the selected article in state when clicked
              className='link_card'
            >
              <div className='copy_btn peer' onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy} // Changes icon when copied
                  alt={copied === item.url ? "tick_icon" : "copy_icon"} // Accessibility alt text
                  className='w-[80%] h-[80%] hover:bg-blue-100 rounded-full p-1 hover:scale-125 ' // Ensures proper scaling
                />
              </div>
              {/* Display the article URL with truncation to prevent overflow */}
              <p className='flex-1 text-blue-800 hover:text-blue-600 hover:underline peer-hover:text-blue-600 peer-hover:underline font-medium text-sm truncate'>
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Container for displaying loader, error message, or article summary */}
      <div className='my-6 max-w-full flex justify-center items-center'>
        {/* Show loader while fetching data */}
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? ( // If an error occurs, display an error message
          <p className='font-inter font-bold text-black text-center'>
            Something went wrong...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : ( // If no error and data is available, display the article summary
          article.summary && (
            <div className='flex flex-col gap-2'>

              {/* Section heading */}
              <h2 className='font-satoshi font-bold text-gray-600 text-2xl text-center'>
                Article <span className='purple_gradient'>Summary</span>
              </h2>

              {/* Summary box containing the fetched article summary */}
              <div className='summary_box h-72 overflow-auto'>
                <p className='font-inter text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section >
  )
}

// Export Section (Can be used elsewhere.) ------------------------------------------------------------------------- 
export default Demo