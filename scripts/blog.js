var latestNavMonth = "";

for (var blogPost of blogJson) {
	// Container
	var post = document.createElement("div");
	post.classList.add("blog_post");
	
	// Image
	var authorImage = document.createElement("img");
	authorImage.classList.add("blog_image");
	authorImage.src = "./resources/team/" + blogPost.author.toLowerCase() + ".png";
	post.appendChild(authorImage);
	
	// Text
	post.appendChild(getElement("blog_author", blogPost.author));
	post.appendChild(getElement("blog_date", blogPost.date));
	post.appendChild(getElement("blog_content", blogPost.content));

	// Add to page
	var blog = document.getElementById("blog")
	blog.insertBefore(post, blog.firstChild);
	
	// Add navigation button
	var month = blogPost.date.substr(3, 2);
	if(month != latestNavMonth){
		var blogNav = document.getElementById("blog_navigation");
		
		var button = document.createElement("button");
		button.classList.add("blog_button");
		button.innerHTML = getMonthString(month) + " " + blogPost.date.substr(6, 4);

		var anchorId = getMonthString(month) + "_anchor";
		post.id = anchorId;
		button.onclick = (function () {
			  var anchorElement = document.getElementById(anchorId);
			  return function () { anchorElement.scrollIntoView(); }
		})();

		blogNav.insertBefore(button, blogNav.firstChild);
		latestNavMonth = month;
	}
}

function getElement(className, text){
	var element = document.createElement("p");
	element.classList.add(className);
	element.innerHTML = text;
	return element;
}

function getMonthString(month){
	switch(month){
		case "01":
			return "January";
		case "02":
			return "Feb";
		case "03":
			return "March";
		case "04":
			return "April";
		case "05":
			return "May";
		case "06":
			return "June";
		case "07":
			return "July";
		case "08":
			return "August";
		case "09":
			return "September";
		case "10":
			return "October";
		case "11":
			return "November";
		case "12":
			return "December";
	}
}