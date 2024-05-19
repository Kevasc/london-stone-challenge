
# London Stone Challenge

A brief description of what this project does and who it's for



## How to run colour swatch filter:

In the project directory, you can run:

npm start

Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.
## Question 1:
Using HTML, CSS and JS create the markup for a control that will be used to filter the display of  products within a category, for example, products appearing on the page: https:// www.londonstone.co.uk/stone-paving/sawn-sandstone-paving/. 
The controls should look like the provided design mockup showing colour swatches, colour  names and the number of products that match each colour


## Question 1 answer:
For this question I decided to build the colour swatch filter using React and JSX - React is built upon HTML, JS and CSS and offers features useful for this project such as state management.

The swatch selector is functional, with the ability to highlight any colour you choose with an orange background.

Given more time, I would change line 23 ```
const [selectedColour, setSelectedColour] = useState("")``` to use an array to allow for multiple selections by pushing new values onto the array and filtering out to remove.

I decided to give all the colours a light grey background, as I feel it improves the UI if every colour has the same uniform border.
The borders do not have a profound effect on darker colours such as the blue or green, but on the cream and white it clearly defines the outline of the colour to make them stand out from the background.
 
For storing data, I would suggest using key-value pairs to store in a database. Key = name of the data, value would be the colour component. 

Below is a screenshot of my code in action:

![Untitled](https://github.com/Kevasc/london-stone-challenge/assets/108089289/f35905ea-2e2a-479d-96ba-0c3d809d0422)


## Question 2:
Outline some benefits, if any, of the new 'xcx' image compression format. Should London Stone  be investing time and resources in adopting it? 
## Question 2 Answer:
After researching the new ‘xcx’ image compression format via google, speaking to experienced developers and consulting chatGPT, I have come to the conclusion that ‘xcx’ image compression format does not currently exist.
On inspecting the London Stone website, I can see JPEG and WebP are already in use as image compression formats.

If ‘xcx’ were to be created or is found to exist, then I think some things would need to be considered before investing time and resources adopting it.
## Compression:
What are the compression rates for 'xcx'?
 
JPEG is known to have a highly efficient compression rate. It is smaller in size while still maintaining the image quality.

As well, WebP also has a superior compression rate, suitable for smaller scale images. 

## Image type:
JPEG files are best suited for continuous-tone images like photographs, where subtle variations in colour and detail are essential, especially in a setting where the customer is ordering online and may not get a chance to see in person what specific tile or clay paver colour they have selected until it has arrived. 
## Browser compatibility:
Can ‘xcx’ be used in all browsers? JPEG is supported in all browsers and devices, making it a very reliable and versatile option. 

WebP is also extremely compatible, with a 96.3% compatibility rate, with only internet explorer and KaiOS browser not supported.
## Question 3:
We have a showrooms page and wish to pass a list of showrooms, from the page url, eg 'https:// www.londonstone.co.uk/show-showrooms/?showrooms=barnsley,birmingham,bristol' into a page  element, with an id of 'contentarea' — please debug the following JavaScript:


## Question 3 JavaScript (buggy with comments)

```
function displayShowrooms() {
  //rewrote as arrow function (personal preference)

  let natoinwideShowrooms = []; //variable not in use because of spelling mistake - 'natoinwide'
  let showroomQS = ""; //bad semantic - variable naming (what is 'QS'?)
  var showroomCount = "1"; // var outdated and leaves room for error, would use 'let'
  // 'var showroomCount = "1";' should be a number not a string

  if (location.href.indexOf("showrooms") !== -1) {
    showroomQs = location.href.split("showrooms=")[1]; // not defined, should be 'showroomQS'
    // line above works by, splitting the url string into two strings, into an array

    nationwideShowrooms = showroomQS.split(",");
    //should equal to ['barnesley', 'bristol', 'birmingham']
    // line 8 splits single showroom string into 3 individual elements 'barnseley, bristol and birmingham'
    //this will not work becuase 'showroomQS' is an empty string

    nationwideShowrooms.forEach(function (showroom) {
      //rewrite as an arrow function

      const insertElement = document.getElementById("contentArea"); //'getElementById' looks in the dom for 'contentArea', and will be assigned to 'insertElement'

      const divEl = document.createElement("div"); // creates a div element and assigns it to 'divEl'

      const spanEl = document.createElement("span"); // needs to be 'let' as is overwritten 

      //line above creates a span element and assigning it to 'spanEl' 

      spanEl.innerHTML= '(' + showroomCount + '). '; //changed to string interpolation as is easier to read -- this will create (1), (2), (3)

      divEl.append(spanEl); // 'append' takes 'spanEl' and appends it to the end of 'divEl' eg:'(1)'

      spanEl = document.createElement("span"); //reassigning spanEl

      spanEl.innerHTML = showroom.charAt(0).toUpperCase() + showroom.slice(1); //charAt capitalizes the first letter of string, in this case 'B' and sets result to the text of spanEl
      //.slice(1) takes the rest of the string and adds result to text of spanEl

      divEl.append(spanEl); //'append' takes 'spanEl' and appends it to the end of 'divEl' eg:'(1)'

      insertElement.append(divEl);
      showroomCount += 1; // can use += operator to do same thing
    });
  }
 // no return, need to add in 
}
displayShowrooms();
```
## Question 3 answer (debugged code)

```
const displayShowrooms = () => {
  let nationwideShowrooms = [];
  let showroomQS = "";
  let showroomCount = 1;

  if (location.href.indexOf("showrooms") !== -1) {
    showroomQS = location.href.split("showrooms=")[1];
    nationwideShowrooms = showroomQS.split(",");
    nationwideShowrooms.forEach((showroom) => {
      const insertElement = document.getElementById("contentArea");
      const divEl = document.createElement("div");
      let spanEl = document.createElement("span");
      spanEl.innerHTML = `(${showroomCount})`;
      divEl.append(spanEl);
      spanEl = document.createElement("span");
      spanEl.innerHTML = showroom.charAt(0).toUpperCase() + showroom.slice(1);
      divEl.append(spanEl);
      insertElement.append(divEl);
      showroomCount += 1;
    });
  }
  return nationwideShowrooms;
};
displayShowrooms();
```
