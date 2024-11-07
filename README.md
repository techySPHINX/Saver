# Saver: SaaS Project Management Platform

## Project Overview

**Saver** is a Multivendor B2B2B SaaS platform built to empower digital marketing agencies and e-commerce businesses by streamlining project management through Kanban boards, website generation, and robust role-based access control. Saver allows agencies to manage sub-accounts, track projects, create and manage e-commerce solutions, and integrate Stripe for subscription payments.

## Objectives

- Provide a user-friendly, scalable project management solution for agencies.
- Offer a Kanban board for tracking project progress.
- Enable agencies to manage multiple sub-accounts with role-based access.
- Support secure, flexible subscription and payment handling through Stripe.
- Allow agencies to create and deploy custom websites for clients.
- Enhance productivity through customizable dashboards and media management features.

## Key Features

- **Kanban Boards:** Visualize and manage tasks in an intuitive drag-and-drop interface.
- **Sub-account Management:** Allow agencies to create and manage sub-accounts for multiple clients.
- **Website Generation:** A Figma-inspired editor to build and deploy websites directly within the platform.
- **Role-Based Access:** Define permissions for different users to ensure secure data handling.
- **Stripe Payment Integration:** Streamline agency payments and subscriptions with built-in Stripe support.
- **Unlimited Funnel Hosting for paid users:** Host an endless number of sales funnels without any restrictions for paid users.
- **Custom Dashboards:** Personalize dashboards to display key metrics and insights tailored to your needs.
- **Media Storage:** Store and manage all your media files securely in one place.
- **Integrated Project Management System:** Organize projects and track progress within the platform.
- **Agency & Sub-Account Metrics:** Get comprehensive reports on the performance of agencies and their sub-accounts.

## Technology Stack

- **Frontend:** Next.js 14 for a responsive and dynamic user experience. Used TailwindCSS and ShadCN UI library to improve the look and user experience of the website platform. 
- **Backend:** Prisma and Neon DB for data management and ORM. Used Clerk Authentication for managing users across the platform.
- **Storage:** AWS S3 for secure storage of files and assets. UploadThing was used to integrate file uploading, handling and saving to database.
- **Payment Integration:** Stripe API for seamless subscription and e-commerce payments.
- **Software Tools:** Visual Studio Code was the main IDE that we used for the project. We tested our application on Windows 11 Operating System

## Challenges and Solutions
- **Multi-client Management:** Implemented structured sub-accounts with customizable access to streamline client management.
- **Payment and Subscription Processing:** Utilized Stripe’s flexible API for secure payment processing.
- **Customization Needs:** Integrated a Kanban board and dashboard customization to provide flexible options for agencies.

## User Roles and Permissions

- **Agency Owner:** Complete control over the agency, sub-accounts, and billing.
- **Sub-Account User:** Access to sub-account features, project creation, and task management.
- **Guest:** View-only access to specific projects.

## Future Enhancements

- **Mobile App Version:** Create a mobile version for easy access on the go.
- **Advanced Analytics:** Add analytics to help agencies track project performance.
- **Integration with Popular Tools:** Potential integrations with Slack, Trello, and other productivity tools.
- **Pre-Built Templates:** Offer customizable templates to quickly set up projects and workflows.
- **AI Automation:** AI integration to automate workflows and user funnels to generate new valuable leads.

## Running the Project
To fork and run this project locally, please follow the steps below:



<h3>1. Install Dependencies</h3>
<ul>
    <li>Navigate to the project directory:</li>
</ul>
<pre><code>cd repo-name</code></pre>
<ul>
    <li>Run the following command to install the necessary dependencies:</li>
</ul>
<pre><code>npm install</code></pre>

<h3>2. Set Up Environment Variables</h3>
<ul>
    <li>Create a <code>.env</code> file in the root directory of the project by copying the provided <code>.env.example</code>:</li>
</ul>
<pre><code>cp .env.example .env</code></pre>
<p>You will need to create accounts in the services mentioned in the <code>.env.example</code> file and fill in the required keys and credentials. Here’s a brief overview of the variables you need to configure:</p>
<ul>
    <li><strong>Clerk</strong>: Used for authentication. Set your <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and <code>CLERK_SECRET_KEY</code>.</li>
    <li><strong>Database</strong>: Set your <code>DB_USERNAME</code>, <code>DB_PASSWORD</code>, and configure the <code>DATABASE_URL</code> for your PostgreSQL database.</li>
    <li><strong>UploadThing</strong>: Set your <code>UPLOADTHING_SECRET</code> and <code>UPLOADTHING_APP_ID</code>.</li>
    <li><strong>Stripe</strong>: Set your Stripe keys such as <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> and <code>STRIPE_SECRET_KEY</code>.</li>
</ul>

<h3>3. Run the Development Server</h3>
<ul>
    <li>Start the development server using:</li>
</ul>
<pre><code>npm run dev</code></pre>
<p>The server will start at <code>http://localhost:3000</code>.</p>

<h3>4. Access Prisma</h3>
<ul>
    <li>If you need to run Prisma, ensure you have the Prisma CLI installed and use the following command to access the Prisma studio:</li>
</ul>
<pre><code>npx prisma studio</code></pre>
<p>This will usually run at <code>http://localhost:5555</code> (or another port if specified in your Prisma configuration).</p>

<h3>Notes</h3>
<ul>
    <li>Ensure that your PostgreSQL server is running and accessible, and that you have created the necessary database specified in your <code>DATABASE_URL</code>.</li>
    <li>For any additional setup or configuration, refer to the documentation of the respective services you are using.</li>
    <li>To see all the Shadcn UI components integrated into the project. Click <a href="https://github.com/techySPHINX/Saver/blob/main/Note.md" target="_blank">here</a>
</li>
</ul>

## License

This project is licensed. You may view the license details [here](https://github.com/techySPHINX/Saver/blob/main/LICENSE).

## Link to Tools

<p align="left">
<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/fluent/512/nextjs.png" alt="Next.js" width="40" height="40"/></a>&emsp;
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width="40" height="40"/></a>&emsp;
<a href="https://prisma.io/" target="_blank" rel="noreferrer">
<img src="https://media.licdn.com/dms/image/v2/D4E0BAQEggtAQvh0k6A/company-logo_200_200/company-logo_200_200/0/1727798020280/prisma_io_logo?e=1738800000&v=beta&t=ZoXOwZVJjJ9fx0LMhcaf0z36mRVk4urTgiX9Hnbou14" alt="Prisma" width="40" height="40"/></a>&emsp;
<a href="https://neon.tech/" target="_blank" rel="noreferrer">
<img src="https://neon.tech/favicon/favicon.png" alt="Neon DB" width="40" height="40"/></a>&emsp;
<a href="https://clerk.dev/" target="_blank" rel="noreferrer">
<img src="https://imgix.cosmicjs.com/9d8bc340-e63d-11ee-b074-b5c8fe3ef189-clerk.webp?w=200&h=200&fit=crop&auto=format,compression" alt="Clerk Authentication" width="40" height="40"/></a>&emsp;
<a href="https://aws.amazon.com/s3/" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS S3" width="40" height="40"/></a>&emsp;
<a href="https://uploadthing.com/" target="_blank" rel="noreferrer">
<img src="https://www.uploadthing.com/favicon.ico" alt="UploadThing" width="40" height="40"/></a>&emsp;
<a href="https://stripe.com/" target="_blank" rel="noreferrer">
<img src="https://cdn.icon-icons.com/icons2/2407/PNG/512/stripe_icon_146092.png" alt="Stripe" width="40" height="40"/></a>&emsp;
<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="Visual Studio Code" width="40" height="40"/></a>&emsp;
<a href="https://www.microsoft.com/en-us/software-download/windows11" target="_blank" rel="noreferrer">
<img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows 11" width="40" height="40"/></a>
</p>
