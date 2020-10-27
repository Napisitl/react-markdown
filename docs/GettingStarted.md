# Introduction </ins>

## Getting Started

SCB Developer Platform empowers developers to deploy code with zero downtime, through automating DevOps with its in-built infrastructure configurations and test frameworks. This documentation provides a quick overview of the platform, its features, and currently available code templates.

SCB Developer Platform offers two types of code templates for digital project deployments: API (Node.JS, Java, Python languages available) and Web (React and Angular languages available). 

When signed up, you become a BETA user. In the near future, we will open up a NON-BETA version.

**Step 1: Signing Up**

Follow the instructions below to get started on SCB Developer Platform.

1. Visit [SS Labs Site](https://www.sslabs.sh/)
2. Click on “Get Started with GitHub” button
3. Sign into your GitHub account: enter your GitHub log in information: username or email address and password, to sign in. If you do not have a GitHub account, click on “Create an account” link to create one.
4. Once signed in through GitHub, you will see the following landing page.
5. Check the email address associated with your GitHub account for an invitation from SS Labs to join SS Labs’ GitHub Repository.
6. Return to the same invitation page on the SS Labs website. Click on “Begin Your Journey!” button
7. Set up your team by inputting your Team Name and Description (optional). 

	Please note that team members can only be added to each team manually for now. Please contact SSLabs / Innovation Lab team with your team member’s email to add a member to your team. 

	When done, click the “Let’s code” button.
	
8. You will be redirected to the Project Dashboard page.

### For Those Using SCB Developer Platform to deploy digital projects:

**Step 2: Creating Your First Project**

1. Click on either the “Create Project” button at the top right corner, or, for users without any projects, the “Create your first project to start coding” link under the Project Dashboard header.
2. From the pop up on Project Dashboard screen, select “Create a Project Template” choice (RIGHT).
3. Select from tabs below whether to create an API or Web template

### API Template Tab:

### Web Template Tab:

4. Fill in: Project name, Project description (optional). Note that “Owner” field is already pre-populated with your teamname and that only English and the special character “-” can be used. Click “Back to Project,” if you wish to return to the Project Dashboard page. (This will cancel the creation of a new project.)
5. When done, click on the “Let’s code” button.
6. A Provisioning page appears. SCB Developer platform is preparing the following for your project:
	* 	A Code Repository on GitHub
	*  CI/CD Pipelines
	*  An Image Repository
	*  A Microservice Deployment

Once provisioning is completed, each box's circle will display a tickmark.

7. The Project Dashboard page displays

	* Project Count: The current number of projects
	* For each project, in its own row (from LEFT to RIGHT): 
		* 	status (provisioning or running****)
		*  type (API or Web app)
		*  a button to "View Project" which takes you to its "Project Detail" page

8. Each project's Project Detail page displays the following:

* Base URL of the project's endpoint 
* Current Deployment version (clicking on the link to the right of the text refreshes to display the latest deployment version as a link and in the Deploy History)
* Application Log (redirects to DataDog)
* "Go to GitHub" (redirects to the project's GitHub code repository)
* Clone (click to view and copy the project's GitHub URL)
* Deployment History from the master branch (status can be In Progress, Success)

A sample application log in DataDog looks like this:


A sample project's GitHub page looks like this:


### For Those Using SCB Developer Platform to Host GitHub Repository:_

**Step 2: Creating Your First Code Repository**

1. Click on either the “Create Project” button at the top right corner, or, for users without any projects, the “Create your first project to start coding” link under the Project Dashboard header.

2. From the pop up on Project Dashboard screen, select “Create a code repository” choice (LEFT).

3. Fill in Project name, Project description (optional). 

	* Note that “Owner” field is already pre-populated with your teamname and that only English and the special character “-” can be used. Click “Back to Project,” if you wish to return to the Project Dashboard page. (This will cancel the creation of a new project.)

4. When done, click on the “Let’s code” button. 

5. You will be redirected back to the Project Dashboard page. Notice that the Blank project row on the Project Dashboard page displays a “Completed” instead of “Running” status, and redirects to “GitHub” (Code Repo) instead of to the Web or API.

6. Click on “View Project” (rightmost button) to view GitHub History. Notice that the project detail does not display “Base URL” or “Current Deployment”. There is no “Application Log” button to the right of the “GitHub History” header.

**Step 3: Check Current Platform Limitations**

See also: Release Notes [link]

Currently SCB Developer Platform allows you to create the projects in the following languages:

1. API Projects
	* Node.JS
	* Java
	* Python

2. Web Projects
	* React
	* Angular