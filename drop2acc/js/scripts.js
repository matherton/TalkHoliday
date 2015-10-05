 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    //$(".tab_content:first").hide();

  /* if in tab mode */
    $("ul.tabs li").hover(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn(10);		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
    /* hide content when tab hovered off */
    $('ul.tabs li').mouseover(function () {
	    //$('.tab_content').css('display', 'block');
		$(this).addClass('active');
	})
	$('ul.tabs li.active').mouseleave(function () {
		$('.tab_content').css('display', 'none');
	})
    $('ul.tabs li.active, .tab_content').mouseleave(function () {
		$('.tab_content').css('display', 'none');
		$('ul.tabs li').removeClass('active');
	});

	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	