function validate() {
	var name = document.getElementById("name").value;
	if (name == '') {
		alert('Please enter a valid name.');
		return false;
	} else {
		return true;
	}
}

function switchTab(type){
	if($(type).html() == 'Specifications'){
		$("#pdf-li").removeAttr("class");
		$("#spec-li").attr("class","active");
		$("#shop-tab2").css("display", "none");
		$("#shop-tab1").css("display", "block");
	}else{
		$("#spec-li").removeAttr("class");
		$("#pdf-li").attr("class","active");
		$("#shop-tab1").css("display", "none");
		$("#shop-tab2").css("display", "block");
	}
}

var type = ["flag","briefcase","user","gears","comments"];
var count = 0;
var flag = false;
function runCircle(){
	
	if(count == 0 && flag){
		reason_onmouseout(type[4]);
	}
	if(count != 0){
		
		reason_onmouseout(type[count-1]);
	}
	reason_onmousehover(type[count]);
	count ++;
	flag = true;
	
	if(count == 5){
		count=0;
		flag = true;
	}
	
}

function reason_onmousehover(no){
	if(no == 'flag'){
		$("#wcu_DIV_56").css("background" , "#8ec36c");
		$("#ricon").removeClass();
		$("#ricon").addClass("fa fa-flag");
		$("#wcu_H3_71").html('The Best Solar LED Light');
		$("#wcu_DIV_72").html('Exceeding your expectations for reliability is part of our mission.');
	}else if(no == 'gears'){
		$("#wcu_DIV_38").css("background" , "#8ec36c");
		$("#ricon").removeClass();
		$("#ricon").addClass("fa fa-gears");
		$("#wcu_H3_71").html('Options');
		$("#wcu_DIV_72").html('Our LED lights come in lumen ranges from 4400- 14300. We can even double up a pole to 28,600 lumens.');
	}
	else if(no == 'user'){
		$("#wcu_DIV_29").css("background" , "#8ec36c");
		$("#ricon").removeClass();
		$("#ricon").addClass("fa fa-user");
		$("#wcu_H3_71").html('LED Street Lighting Solutions');
		$("#wcu_DIV_72").html('If you are looking to light up city roads, a main highway or other large areas, Solar Lighting International’s LED Lighting Systems are a reliable and effective choice.');
	}
	else if(no == 'briefcase'){
		$("#wcu_DIV_20").css("background" , "#8ec36c");
		$("#ricon").removeClass();
		$("#ricon").addClass("fa fa-briefcase");
		$("#wcu_H3_71").html('Industry Experience');
		$("#wcu_DIV_72").html('With over 40 years of combined solar experience, SLI has the know-how to get the project done right.');
	}
	else if(no == 'comments'){
		$("#wcu_DIV_47").css("background" , "#8ec36c");
		$("#ricon").removeClass();
		$("#ricon").addClass("fa fa-comments");
		$("#wcu_H3_71").html('Complex Solutions');
		$("#wcu_DIV_72").html('Our LED lights come in lumen ranges from 4400- 14300. We can even double up a pole to 28,600 lumens.');
	}
	
	
}

jQuery(".info-c-full-br").each(function() {
    "click" == jQuery(this).data("focus-on") && jQuery(this).find(".icon-circle-list .info-circle-icons").click(function() {
        var a = jQuery(this);
        jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"),
        show_next_info_circle(a)
    }),
    "hover" == jQuery(this).data("focus-on") && jQuery(this).find(".icon-circle-list .info-circle-icons").hover(function() {
        var a = jQuery(this);
        jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"),
        show_next_info_circle(a)
    }, function() {})
})

function reason_onmouseout(no){
	if(no == 'flag'){
		$("#wcu_DIV_56").css("background", "#f6b435");
	}else if(no == 'gears'){
		$("#wcu_DIV_38").css("background", "#f6b435");
 	}
	else if(no == 'user'){
		$("#wcu_DIV_29").css("background", "#f6b435");
  	}
	else if(no == 'briefcase'){
		$("#wcu_DIV_20").css("background", "#f6b435");
	}
	else if(no == 'comments'){
		$("#wcu_DIV_47").css("background", "#f6b435");
	}
	
}

/*function sendEmail(){
	
	var ContactInfo = new Object();
	ContactInfo.name ="arpit";
	ContactInfo.email = "arpit-k@HCL.COM";
	ContactInfo.subject = "hello";
	ContactInfo.message = "Hi mass";
	
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "sendmail",
		data : JSON.stringify(ContactInfo),
		dataType : 'json',
		timeout : 100000,
		success : function(data) {
			console.log("SUCCESS: ", data);
			
		},
		error : function(e) {
			console.log("ERROR: ", e);
			
		},
		done : function(e) {
			console.log("DONE");
			
		}
	});
	
}*/
