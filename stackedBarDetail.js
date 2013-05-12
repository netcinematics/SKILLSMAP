var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  //init data
  var examplejson = {
      'label': ['Front-End', 'Full-Stack', 'Design', 'Soft-Skills', 'Training'],
      'values': [
      {
        'label': '2003',
        'values': [20, 40, 15, 5, 5, 5],
		'barData': ['abc',['1','2','3'],['1','2','3'],'d','e']
      }, 
      {
        'label': '2004',
        'values': [30, 10, 45, 10, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2005',
        'values': [38, 20, 35, 17, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2006',
        'values': [58, 10, 35, 32, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2007',
        'values': [55, 60, 34, 38, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2008',
        'values': [26, 40, 25, 40, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2009',
        'values': [26, 40, 25, 40, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2010',
        'values': [26, 40, 25, 40, 5],
		'barData': ['a','b','c','d','e']
      }, 
      {
        'label': '2012',
        'values': [26, 40, 25, 40, 5],
		'barData': ['aaa','b','c','d','e']
      }, 
      {
        'label': '2013',
        'values': [26, 40, 25, 40, 5],
		'barData': ['abcdefg','b','c','d','e']
      }]
      
  };  
  
  var skillsetjson = {
      'label': ['Front-End', 'Full-Stack', 'Design', 'Soft-Skills', 'Training','Company'],
      'values': [
      {
        'label': '2013',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML5/CSS3/JS','AJAX/JSON','Web Performance','Front Build','AMD','Components','MVC-ExtJS','RIA'],['Bash','JSP','REST'],['Modules','System Design','Architecture','UX Design'],['GitHub','Mentor','Team Lead','Pair Programming','Agile'],['Presenter','Web Performance','PhoneGap','jQueryMobile','SAAS/git','CoffeeScript','BackboneJS'],['FirstBank']]
      },
      {
        'label': '2012',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML5/CSS3/JS','AJAX/JSON','MVC-ExtJS','SASS/Compass','jQueryMobile','RWD','PrototypeJS','TabletApp','JS Charts'],['Gimp','GruntJS','Ant Build','REST','CouchDB','NodeJS'],['RWD','UX Design'],['GitHub','Team Lead','Pair Programming','Agile'],['Presenter','OWASP/InfoSec','TDD','HTML5Denver','HTML5Camp','JSMaster Class'],['FirstBank']]
      },	  
      {
        'label': '2011',
        'values': [26, 40, 25, 40, 5],
		'barData': [['XHTML/CSS/JS','AJAX/JSON','BackboneJS','Templates','Analytics','jQuery','Mobile','AdobeEdge','MicroJS','DevTools'],['Hudson','Arduino','C++'],['UI Design','UX Design'],['Mentor','PivotalTracker','Agile'],['jQueryDenver','HTML5Denver','RichWebExp'],['Retel Tech','FirstBank']]
      },	  
      {
        'label': '2010',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','ActionScript','Amazon AWS API','Analytics','TDD','MVC-Cairngorm','UI Automation','Drag And Drop','InfiniteScroll','TimeLine','Components:','VideoPlayer','CSS Themes','RIA'],['JSP','CrowdSource','H.264 Video'],['Graphics'],[],[],['Retel Tech']]
      },	  
      {
        'label': '2009',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','jQuery','ActionScript','Twitter API','Paypal API','GoogleMap API','Components','SPA/RIA'],['Apache','GlassFish','SSL','ecommerce','PHP/MySQL',],['UML','Architecture'],['GitHub','Mentor','Team Lead','Agile'],['NewTechMeetup','TechStars'],['SBS/TWC','Retel Tech']]
      },	  
      {
        'label': '2008',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','ExtJS','OOJS','AJAX/JSON','Controls','Buttons','Silverlight','ActionScript','SVG Themes','Firebug','SPA/RIA'],['OC4J','SQL','DWR'],['UML','Logos','Interaction','UI Design','API'],['Mentorship','Mentor','Agile'],['RMOUG','NewTechMeetup','SQL Cert'],['SBS/TWC']]
      },	  
      {
        'label': '2007',
        'values': [55, 60, 34, 38, 5],
		'barData': [['HTML/CSS/JS','ExtJS','OOJS','AJAX/JSON','SVG/DOM','jQuery','Firebug','CSS Themes','SPA/RIA'],['PL/SQL','J2EE/JAVA','StepDebug IE','FullStack'],['UML','Graphics','Design Patterns','Architecture'],['Mentorship'],['J2EE','OOJS','AJAX/SVG'],['SBS/GE']]
      },	  
      {
        'label': '2006',
        'values': [58, 10, 35, 32, 5],
		'barData': [['HTML/CSS/JS','AJAX/XML','Templates'],['encryption','C++ DLLs','Ant','Oracle SQL','C#/ASP.NET/IIS'],['Modules'],['Mentorship','SVN','Iterative'],['C#/ASP'],['SBS/GE']]
      },	  
      {
        'label': '2005',
        'values': [38, 20, 35, 17, 5],
		'barData': [['HTML/CSS/JS','Fireworks','Photoshop'],['XML','Clarion','Flash','Bash'],['Logos','Graphics'],['Design Patterns','System Design','UI Design','Architecture'],[],['Websites','RMTEC']]
      },	  
      {
        'label': '2004',
        'values': [30, 10, 45, 10, 5],
		'barData': [[],['AI/NLP','C++/DLLs','Custom DB'],['Modules','UML','Design Patterns','System Design','UI Design','Architecture'],[],['OO'],['Tokenizr']]
      },	  
      {
        'label': '2003',
        'values': [20, 40, 15, 5, 5, 5],
		'barData': [['DHTML/CSS/JS','Website'],['C++','vim/cygwin','bash','StepDebug C++'],['Graphics','Design Patterns'],['Mentorship','SVN'],['MVC-C++','OO','TDD','Pair Programming','XP'],['SeldenSystems']]
      },	  
      {
        'label': '2002',
        'values': [20, 40, 15, 5, 5, 5],
		'barData': [['DHTML/CSS/JS','Website'],['C++','vim/cygwin','bash','StepDebug C++'],['Graphics'],['Mentorship'],['OO','MVC-C++','Pair Programming'],['SeldenSystems']]
      }	  ,	  
      {
        'label': '2001',
        'values': [20, 40, 15, 5, 5, 5],
		'barData': [['DHTML/CSS/JS','Website'],['C++','perl'],['Graphics'],['Mentorship'],['Internship'],['SeldenSystems']]
      }	  
	  ]
      
  };
  
  var jsonData = skillsetjson;
  
	  //if(this.config.showBarData){    //!Re-Init-Stack-Values-To-Equal-BarData-Item-Heights-.
		for(var vnum = 0; vnum < jsonData.values.length; vnum++){
		  jsonData.values[vnum].values =(function(config, barData){ //!
			var tmp = [];
			for(var stknum = 0; stknum < barData.length; stknum++){
				if(typeof barData[stknum] === 'object'){
					var numStacks = barData[stknum].length;
					tmp.push(numStacks * (2));
				} else{
					tmp.push(5);
				}
			}
			return tmp;
		  })(this.config, jsonData.values[vnum].barData);
		}//end-loop-.  
	  //}		
  
  /*var json2 = {
      'values': [
      {
        'label': 'date y',
        'values': [10, 40, 15, 7]
      }, 
      {
        'label': 'date B',
        'values': [30, 40, 45, 9]
      }, 
      {
        'label': 'date D',
        'values': [55, 30, 34, 26]
      }, 
      {
        'label': 'date C',
        'values': [26, 40, 85, 28]
      }]
      
  };*/
    //init BarChart
    var barChart = new $jit.BarChart({
      //id of the visualization container
      injectInto: 'infovis',
      //whether to add animations
      animate: true,
      //horizontal or vertical barcharts
      orientation: 'vertical',
      //bars separation
      barsOffset: 20,
      //visualization offset
      Margin: {
        top:5,
        left: 5,
        right: 5,
        bottom:5
      },
      //labels offset position
      labelOffset: 5,
      //bars style
      type: useGradients? 'stacked:gradient' : 'stacked',
      //whether to show the aggregation of the values
      showAggregates:false,
	  //show-label-at-top-of-the-bar-. //!
	  showTopLabel:true, 
      //whether to show the labels for the bars
      showLabels:true,
      //labels style
      showBarData:true,
      //custom-style-for-bar-data-.-similar-to-showAggregates-. //!
      Label: {
        type: labelType, //Native or HTML
        size: 13,
        family: 'Arial',
        color: 'white'
      },
      //add tooltips
      Tips: {
        enable: true,
        onShow: function(tip, elem) {
          tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;
        }
      }
    });
	
    //load JSON data.
    barChart.loadJSON(jsonData);
    //end
    var list = $jit.id('id-list'),
        button = $jit.id('update'),
        orn = $jit.id('switch-orientation');
    //update json on click 'Update Data'
    /*$jit.util.addEvent(button, 'click', function() {
      var util = $jit.util;
      if(util.hasClass(button, 'gray')) return;
      util.removeClass(button, 'white');
      util.addClass(button, 'gray');
      barChart.updateJSON(json2);
    });*/
    //dynamically add legend to list
    var legend = barChart.getLegend(),
        listItems = [];
    for(var name in legend) {
      listItems.push('<div class=\'query-color\' style=\'background-color:'
          + legend[name] +'\'>&nbsp;</div>' + name);
    }
    list.innerHTML = '<li>' + listItems.join('</li><li>') + '</li>';
}
