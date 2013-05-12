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
      'label': ['Front-End', 'Full-Stack', 'Design', 'Soft-Skills', 'Training'],
      'values': [
      {
        'label': '2003',
        'values': [20, 40, 15, 5, 5, 5],
		'barData': [['Website','DHTML/CSS/JS'],['C++','perl','vim/cygwin','bash','StepDebug'],['Graphics','Patterns'],['Mentorship','SVN'],['Internship','XP/PairP/TDD','MVC-C++','OO']]
      }, 
      {
        'label': '2004',
        'values': [30, 10, 45, 10, 5],
		'barData': [['FE'],['AI/NLP','C++/DLLs','TokenDB'],['Patterns','System','Interface','Architect'],['SS'],['OO']]
      }, 
      {
        'label': '2005',
        'values': [38, 20, 35, 17, 5],
		'barData': [['Websites','HTML/CSS/JS','Fireworks','Photoshop'],['XML','Clarion','Flash','Bash'],['Logos','Graphics'],['Patterns','System','Interface','Architect'],['Waterfall'],['TR']]
      }, 
      {
        'label': '2006',
        'values': [58, 10, 35, 32, 5],
		'barData': [['HTML/CSS/JS','AJAX/XML','Templates'],['encryption','C++ DLLs','Ant','Oracle SQL','C#/ASP.NET/IIS'],['Modules'],['Mentorship','SVN','Iterative'],['C#/ASP']]
      }, 
      {
        'label': '2007',
        'values': [55, 60, 34, 38, 5],
		'barData': [['HTML/CSS/JS','ExtJS','OOJS','AJAX/JSON','SVG/DOM','jQuery','Firebug','CSS Themes','SPA/RIA'],['PL/SQL','J2EE/JAVA','StepDebug','FullStack'],['UML','Graphics','Patterns','Architect'],['Mentorship'],['J2EE','OOJS','AJAX/SVG']]
      }, 
      {
        'label': '2008',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','ExtJS','OOJS','AJAX/JSON','Controls','Buttons','Silverlight','ActionScript','SVG Themes','Firebug','SPA/RIA'],['OC4J','SQL','DWR'],['UML','Logos','Interaction','Interface','API'],['Mentorship','Mentor','Agile'],['RMOUG','NewTech','SQLCert']]
      }, 
      {
        'label': '2009',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','jQuery','ActionScript','TwitterAPI','PaypalAPI','GoogleMapAPI','Components','SPA/RIA'],['Apache','GlassFish','SSL','ecommerce','PHP/MySQL',],['UML','Architect'],['GitHub','Mentor','TeamLead','Agile'],['NewTech','TechStars']]
      }, 
      {
        'label': '2010',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','ActionScript','AWS API','Analytics','TDD/MVC','Components','VideoPlayer','CSS Themes'],['JSP','CrowdSource','H264 Video'],['Graphics'],['SS'],['TR']]
      }, 
      {
        'label': '2011',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML/CSS/JS','AJAX/JSON','BackboneJS','Templates','Analytics','jQuery','Mobile','AdobeEdge','XHTML','MicroJS','DevTools','RIA'],['Hudson','Arduino','C++'],['UX'],['Mentor','PivotalT','Agile'],['jQueryDEN','HTML5DEN','RichWebExp']]
      }, 
      {
        'label': '2012',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML5/CSS3/JS','AJAX/JSON','MVC/ExtJS','SASS/Compass','jQueryMobile','RWD','PrototypeJS','TabletApp','JS Charts'],['Gimp','GruntJS','Ant Build','REST','CouchDB','NodeJS'],['RWD','UX'],['GitHub','TeamLead','PairPro','Agile'],['Presenter','OWASP','TDD','HTML5DEN','HTML5Camp','JSMastrCls']]
      }, 
      {
        'label': '2013',
        'values': [26, 40, 25, 40, 5],
		'barData': [['HTML5/CSS3/JS','AJAX/JSON','Web Perf','Front Build','AMD','Components','RIA'],['Bash','JSP','REST'],['Modules','System','Architect','UX'],['GitHub','Mentor','TeamLead','PairPro','Agile'],['Presenter','Web Perf','PhoneGap','jQueryMobl','SAAS/git','CoffeeScr','BackboneJS']]
      }]
      
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
