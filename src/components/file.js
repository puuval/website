/**
 * Downloads a file from a given URL and saves it with a specified filename.
 * 
 * @param {string} url - The URL of the file to download.
 * @param {string} filename - The name to save the file as.
 */
function downloadFile(url, filename) {
  // Fetch the content from the URL
  fetch(url)
      .then(response => {
          // Check if the response is okay (status code in the range 200-299)
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          // Convert the response to a blob
          return response.blob();
      })
      .then(blob => {
          // Create an object URL for the blob
          const objectUrl = window.URL.createObjectURL(blob);
          
          // Create an anchor (a) element in the DOM
          const anchorElement = document.createElement('a');
          anchorElement.style.display = 'none'; // Hide the element
          anchorElement.href = objectUrl; // Set its href attribute
          anchorElement.download = filename; // Set the download attribute
          
          // Attach the anchor element to the DOM
          document.body.appendChild(anchorElement);
          
          // Simulate a click on the anchor element to trigger the download
          anchorElement.click();
          
          // Revoke the object URL to free up resources
          window.URL.revokeObjectURL(objectUrl);
          
          // Remove the anchor element from the DOM
          document.body.removeChild(anchorElement);
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch
          alert(`An error occurred while downloading the file: ${error}`);
      });
}

export default downloadFile;
