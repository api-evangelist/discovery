function listCompanies()
    {
    $.getJSON('data/companies.json', function(data) {
    	toggle = 0;
    	 $.each(data['company'], function(key, val) {
			var template = $('#companyListingTemplate').html();
			var html = Mustache.to_html(template, val);
			$('#companyListing').append(html);    						
	        });
        });
    }    
    
function getCompanyDetails(id)
    {
    $.getJSON('data/companies.json', function(data) {  	
        $.each(data['company'], function(key, val) {
        	
        	thisid = val['id'];
        	
        	if(thisid == id)
        		{
                var template = $('#companyDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#companyDetail').append(html);
                
	            website = val['website'];
	        	if(website.length>0){ document.getElementById("home-icon").href=website; } else { document.getElementById("home-icon-img").style.display='none'; }              
                
	            blog = val['blog'];
	        	if(blog.length>0){ document.getElementById("blog-icon").href=blog; } else { document.getElementById("home-blog-img").style.display='none'; }
	        	                
	            blogrss = val['blogrss'];
	        	if(blog.length>0){ document.getElementById("blogrss-icon").href=blogrss; } else { document.getElementById("blogrss-icon-img").style.display='none'; }
	        	
	            twitter = val['twitter'];
	        	if(twitter.length>0){ document.getElementById("twitter-icon").href=twitter; } else { document.getElementById("twitter-icon-img").style.display='none'; }
	        	
	            github = val['github'];
	        	if(github.length>0){ document.getElementById("github-icon").href=github; } else { document.getElementById("github-icon-img").style.display='none'; }	        		        	                
            	}
          	});                                    
        });
    }  