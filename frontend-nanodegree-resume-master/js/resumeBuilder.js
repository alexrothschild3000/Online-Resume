//This is empty on purpose! Your code to build the resume will go here.


var bio = {
	"name": "Alex Rothschild",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "985-768-8655",
		"email": "alexander.rothschild@selu.edu",
		"github": "alexrothschild3000",
		"twitter": "@AlexRothschild",
		"instagram": "alexrothschild",
		"location": "New Orleans"
	},
	"skills": [
		"Software Development", "GUI Design", "Coding & Scripting", "Debugging & Troubleshooting", "Testing & Documentation"
	],
	"welcomeMessage": "Happiness is not a station you arrive at, but a manner of traveling - Margaret Lee Runbeck",
	"biopic": "images/profilepic.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#footerContacts, #topContacts").append(formattedMobile);

		$("#footerContacts, #topContacts").append(formattedEmail);

		$("#footerContacts, #topContacts").append(formattedGithub);

		$("#footerContacts, #topContacts").append(formattedTwitter);

		$("#footerContacts, #topContacts").append(formattedLocation);

		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (var skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};
bio.display();

var education = {
	"schools": [
		{
			"name": "Operation Spark",
			"location": "New Orleans, LA",
			"degree": "Certificate",
			"majors": ["Front End"],
			"dates": "2015",
			"url": "http://www.operationspark.org"
		},
		{
			"name": "Southeastern Louisiana University",
			"location": "Hammond, LA",
			"degree": "BS",
			"majors": ["Computer Science"],
			"dates": "2018",
			"url": "http://www.southeastern.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity.com",
			"date": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Introduction to Programming Nanodegree",
			"school": "Udacity.com",
			"date": "2015",
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title": "Remote Beta Front End Prep",
			"school": "Hack Reactor",
			"date": "2015",
			"url": "http://www.eventbrite.com/o/hack-reactor-remote-beta-8260605281"
		}
	],
	"display": function() {
			for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

				var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

				$('.education-entry:last').append(formattedschoolName + formattedschoolDegree);
				$('.education-entry:last').append(formattedschoolDates);
				$('.education-entry:last').append(formattedschoolLocation);
				$('.education-entry:last').append(formattedschoolMajor);
			}

			$("#education").append(HTMLonlineClasses);

			for (var i = 0; i < education.onlineCourses.length; i++) {
			$("#education").append(HTMLschoolStart);

				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				$('.education-entry:last').append(formattedonlineTitle + formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				$('.education-entry:last').append(formattedonlineDates);

				var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				// didn't see the point of having 2 links for the same thing.
				// $('.education-entry:last').append(formattedonlineURL);
			}
	}
};
education.display();

var work = {
	"jobs": [
		{
			"employer": "Dominos Pizza",
			"title": "Delivery Expert",
			"location": "Slidell, LA",
			"dates": "Feb 2016- current",
			"description": "Delivering great food quickly and safely"
		},
		{
			"employer": "Felix's Restaurant & Oyster Bar",
			"title": "Server",
			"location": "French Quarter, New Orleans, LA",
			"dates": "Dec 2011- Jan 2016",
			"description": "Food service at casual cajun-american restaurant"
		},
		{
			"employer": "United States Marine Corps",
			"title": "Helicopter Mechanic",
			"location": "Naval Air Station Joint Reserve Base, New Orleans, LA",
			"dates": "Nov 2003 - Nov 2005 Active Duty, Sept 2004- May 2005 Afghanistan Deployment,  Nov 2005- Nov 2009 Reserve",
			"description": "Responsible for servicing and maintaining helicopter by using gauges, hand tools, and testing equipment"
		},
		{
			"employer": "Copeland's of New Orleans",
			"title": "Server",
			"location": "Slidell, LA",
			"dates": "Nov 1998- Nov 2003, Nov 2005- Apr 2010",
			"description": "Food service at upscale cajun-american restaurant"
		}
	],
	"display": function() {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

			var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

			var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedworkLocation);

			var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedworkDates);

			var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedworkDescription);
		}
	}
};
work.display();

var projects = {
	"projects": [
		{
			"title": "Resume Builder Project",
			"dates": "2016",
			"description": "With this project, I built an online resume that I can continue to add onto during my career. ",
			"images": ["images/ResumeSite1.png", "images/ResumeSite2.png"],
			"url": "http://www.google.com"
		}
	],
	"display": function() {
		for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

			for (image in projects.projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();

// //this is a google map
$("#mapDiv").append(googleMap);



















