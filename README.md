Joshua Musukambale 2021418821
Mike Shatamuka 2021453006

#Brief Description of the Pages
INDEX.HTML PAGE
   **Home Page (index.html):** The **Home Page** of Coffee Haven welcomes visitors with an introduction to the café, showcasing its cozy atmosphere and fine coffee offerings. It features a hero section with a catchy slogan and a brief description of what Coffee Haven represents. The page also highlights “Our Story” and “Today's Specials,” inviting customers to explore the café's unique offerings.
SERVICES.HTML PAGE
        **Services Page (services.html):** The **Services Page** highlights the diverse services that Coffee Haven provides to enhance the customer experience. This includes expert coffee brewing, freshly baked pastries, a cozy workspace with free Wi-Fi, and live events such as workshops and music performances. The page uses visual cards for each service to make it easy for users to understand what’s on offer. 3. **Contact Page (contact.html)

CONTACT.HTML PAGE
       The **Contact Page** provides visitors with a simple form to reach out to Coffee Haven for inquiries, feedback, or special requests. The page includes fields for name, email, subject, and message, making it easy for customers to get in touch. It also emphasizes the café's commitment to customer service and engagement. Each page is designed to provide relevant, easy-to-navigate content for visitors, ensuring they have a pleasant experience while exploring Coffee Haven online


Summary Of Features Used
     
 1. **Selectors:** - **Universal Selector (*)**: Resets the default styling for all elements on the page, creating a clean slate. - **Element Selectors**: Specific elements like body, header, nav, .hero, .container, .service-card, etc., are selected to apply styles to them directly. These styles include background colors, padding, and text styles. - **Class Selectors (.hero, .container, .service-card)**: Used extensively throughout the page to style various sections of the layout. For example, .hero is used to style the hero section, while .service-card is used to style individual service items.

 2. **CSS Grid Layout:** - The **CSS Grid** layout is used in the .services-grid and .todays-special-container sections to create responsive grids that adjust according to the screen size. - The grid-template-columns property is used to create columns that adjust based on the available space. For example, grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) ensures the grid items adjust dynamically, becoming a single column on smaller screens while spreading out on larger screens. - This ensures the content is flexible and adjusts accordingly on different screen sizes, enhancing the responsiveness of the layout.
 
 3. **Flexbox Layout:** - **Flexbox** is used in the navigation bar (nav ul) and the main container (.container). For the navigation bar, display: flex and justify-content: center are used to center the navigation items horizontally. - The .container utilizes Flexbox to arrange content such as .intro and .sidebar side by side on larger screens, and stack them on smaller screens via media queries.

  4. **Media Queries:** - Media queries are used to ensure the layout is responsive across different screen sizes: - **1024px**: The .container element’s maximum width is reduced to 900px to adjust the layout for medium-sized screens like tablets. - **768px**: On smaller screens, Flexbox is used to change the layout of .container to a column layout, stacking the elements vertically. Also, the grid layout for .services-grid and .todays-special-container is adjusted to display one column on smaller screens. - **480px**: For very small devices like mobile phones, the navigation bar switches to a vertical layout (flex-direction: column) and the hero section text size is reduced for better visibility on small screens.

  5. **Animations:** - **Keyframe Animation (@keyframes)**: The fadeIn animation is used in the .hero section to create a smooth fading effect when the page loads. The opacity transitions from 0 to 1, making the text appear gradually. - **Text Fade Animation**: The .intro and .sidebar sections use a textFade animation to smoothly transition into view.

  6. **Hover Effects and Transitions:** - Several elements, such as .service-card and .special-card, feature hover effects that add interactivity to the page. On hover, these cards transform slightly (e.g., moving up or enlarging) and increase the shadow intensity (box-shadow), which makes them more visually interactive