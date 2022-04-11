document.addEventListener("DOMContentLoaded", function(event) {
	// 第一张图片
    let targetImage1 = document.querySelector("#smart-image1");
	targetImage1.addEventListener("click", function() {
		
		if (targetImage1.classList.contains("small")) {
		    targetImage1.classList.remove("small");
		} else {
		    targetImage1.classList.add("small");
		} 
	});
	
	// 第二张图片
	let targetImage2 = document.querySelector("#smart-image2");
	targetImage2.addEventListener("click", function() {
		
		if (targetImage2.classList.contains("small")) {
		    targetImage2.classList.remove("small");
		} else {
		    targetImage2.classList.add("small");
		} 
	});
	
	// 第三张图片
	let targetImage3 = document.querySelector("#smart-image3");
	targetImage3.addEventListener("click", function() {
		
		if (targetImage3.classList.contains("small")) {
		    targetImage3.classList.remove("small");
		} else {
		    targetImage3.classList.add("small");
		} 
	});
	
	// 第四张图片
	let targetImage4 = document.querySelector("#smart-image4");
	targetImage4.addEventListener("click", function() {
		
		if (targetImage4.classList.contains("small")) {
		    targetImage4.classList.remove("small");
		} else {
		    targetImage4.classList.add("small");
		} 
	});
