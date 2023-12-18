## Overview
This is a simple Next.js app for the Boom & Bucket tech challenge. It features the following:
- Filters for category, engine HP, and operating weight
- A custom logo and styling via TailwindCSS along with a color palette that I chose.
- Rendering of dozers from cat.com's API that displays all dozers and allows for filtering
- Animations on filter of dozers
- A Request More Info modal with emails sent via Sendgrid
- CI/CD with Github Actions and deployment through Vercel
- React Testing Library unit tests integrated into the CI/CD pipeline

## How to set up
1. Clone the repo
2. run `npm i` and then `npm run dev`
3. Optional: visit live site (has fetching issues): https://boom-and-bucket-tech-challenge.vercel.app


## Screen Recording (shows all steps through to email)
![tech challenge](https://github.com/noahpeden/boom-and-bucket-tech-challenge/assets/15061527/596149ef-1829-479c-abd0-6f54d119eccc)

## Misses
- [ ] Branding the email. I de-prioritized this and ran out of time, but I'm very confident I could get it done quickly in Sendgrid's dashboard or adding in some html to the message.
- [ ] Localization. I worked on setting this up for a while but kept running into context issues with i18n-next. I added the config, wrapped my layout component in the `appWithTranslation` HOC, and then used the `useTranslation` hook to translate using my common.js file, but kept getting a `Error: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function` error. My suspicion is if I paired on this with someone for five minutes I could probably figure it out.
- [ ] Live deployment fetching issues - Deploying via Vercel was very trivial, and was able to set up CI/CD with Github Actions and make them depend on tests passing, however the cat.com API seems to block the deployed version of my call as I keep getting gateway timeouts, even though I'm calling it through an API route on my backend. I looked into setting up an account so I could get an API Key, but it didn't allow me to sign up.

## Acceptance Criteria
1. Use the following API to build your NextJS Frontend:
    - [x] [GET] https://www.cat.com/content/catdotcom/en_US/products/new/equipment/dozers/jcr:content/root/responsivegrid/productcards.feed.json

2. Frontend: Develop “Filtering” Experience
- [x] Left-hand side of the screen should have the following filters
    - [x] Category (checkboxes for Small Dozer, Medium Dozer, Large Dozer, Wheel Dozer)
    - [x] Engine HP (slider with user-adjustable bottom bounds and upper bounds)
    - [x] Operating Weight (slider with a user-adjustable bottom bounds and upper bounds)
    - [x] Note: examples of the UI components described above can be found in the filters used in Kayak.com’s flight search:
￼

- [x] Right-hand side of the screen should display all of the Bulldozers that have specifications that fall within the filter values
    - [x] Each match should be in a tile that displays the image of the dozer, make, model, category, engine HP and operating weight

3. Frontend: Develop “Request More Information” Experience
- [x] If a user clicks on one of the tiles in the result set, display a modal view with a simple form in it
    - [x] Full Name (Required)
    - [x] Email Address (Required)
    - [x] Phone Number (Required)
    - [x] CTA Button: “Request Info”
- [x] Form should validate for bad inputs
- [x] Form submission should also pass along the Make and Model of the Bulldozer the user is interested in getting more information on
- [x] Upon submission, an email consisting of the following info should be sent to an email address of your choosing:
    - [x] “<Full Name> has requested more information about the <Make> <Model> bulldozer. You can reach them at <Email Address> or call them at <Phone Number>.”

Best in Class Attributes:
The above is the basic assessment we use for full-stack developers, but for frontend, we want to make sure we are raising the bar with each hire.  As such, we have found that the following attributes make an assessment top notch:

- [x] Selective use of animations when listings are filtered.
- [x] Use of a testing framework
- [ ] Localization
- [x] Branding the project (doesn’t matter what, but just cohesive use of components)
- [x] Leveraging and branding an component system not an off the shelf (PrimeNG, etc)
- [ ] Branding the email & using an third party like sendgrid to send the email
- [x] Extra Credit:
    - [x] CI/CD
    - [x] Deployed Live
