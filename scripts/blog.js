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
}

function getElement(className, text){
	var element = document.createElement("p");
	element.classList.add(className);
	element.innerHTML = text;
	return element;
}