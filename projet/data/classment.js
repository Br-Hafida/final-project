var team1={flag:'./flags/Netherlands.png',name:'Netherlands',pts:'7',MJ:'3',G:'2',N:'1',P:'0'}
var team2={flag:'./flags/senegal.png',name:'Senegal',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team3={flag:'./flags/Équateur.png',name:'Équateur',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team4={flag:'./flags/Qatar.png',name:'Qatar',pts:'0',MJ:'3',G:'0',N:'0',P:'3'}




var team5={flag:'./flags/Angleterre.png',name:'Angleterre',pts:'7',MJ:'3',G:'2',N:'1',P:'0'}
var team6={flag:'./flags/États-Unis.png',name:'États-Unis',pts:'5',MJ:'3',G:'1',N:'2',P:'0'}
var team7={flag:'./flags/Iran.png',name:' gdgdd',pts:'3',MJ:'3',G:'1',N:'0',P:'2'}
var team8={flag:'./flags/Pays de Galles.png',name:'Pays de Galles',pts:'3',MJ:'3',G:'0',N:'1',P:'2'}


var team9={flag:'./flags/Argentine.png',name:'Argentine',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team10={flag:'./flags/Pologne.png',name:'Pologne',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team11={flag:'./flags/Mexique.png',name:'Mexique',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team12={flag:'./flags/Arabie saoudite.png',name:'Arabie saoudite',pts:'3',MJ:'3',G:'1',N:'0',P:'2'}




var team13={flag:'./flags/France.png',name:'France',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team14={flag:'./flags/Australie.png',name:'Australie',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team15={flag:'./flags/Tunisie.png',name:'Tunisie',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team16={flag:'./flags/Danemark.png',name:'Danemark',pts:'1',MJ:'3',G:'0',N:'1',P:'2'}





var team17={flag:'./flags/Japon.png',name:'Japon',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team18={flag:'./flags/Espange.png',name:'Espagne',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team19={flag:'./flags/Allemagne.png',name:'Allemagne',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team20={flag:'./flags/Costa Rica.png',name:'Costa Rica',pts:'3',MJ:'3',G:'1',N:'0',P:'2'}






var team21={flag:'./flags/Maroc.png',name:'Maroc',pts:'7',MJ:'3',G:'2',N:'1',P:'0'}
var team22={flag:'./flags/Croatie.png',name:'Croatie',pts:'5',MJ:'3',G:'1',N:'2',P:'0'}
var team23={flag:'./flags/Belgique.png',name:'Belgique',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team24={flag:'./flags/Canada.png',name:'Canada',pts:'0',MJ:'3',G:'0',N:'0',P:'3'}



var team25={flag:'./flags/Brésil.png',name:' Brésil',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team26={flag:'./flags/Suisse.png',name:'Suisse',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team27={flag:'./flags/Cameroun.png',name:'Cameroun',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team28={flag:'./flags/Serbie.png',name:'Serbie',pts:'1',MJ:'3',G:'0',N:'1',P:'2'}




var team29={flag:'./flags/Portugal.png',name:'Portugal',pts:'6',MJ:'3',G:'2',N:'0',P:'1'}
var team30={flag:'./flags/Corée du Sud.png',name:'Corée du Sud',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team31={flag:'./flags/Uruguay.png',name:'Uruguay',pts:'4',MJ:'3',G:'1',N:'1',P:'1'}
var team32={flag:'./flags/Ghana.png',name:'Ghana',pts:'3',MJ:'3',G:'1',N:'0',P:'2'}



/* complte for the rest groups*/
var teamsForA=[team1,team2,team3,team4] 
var teamsForB=[team5,team6,team7,team8]
var teamsForC=[team9,team10,team11,team12]
var teamsForD=[team13,team14,team15,team16]
var teamsForE=[team17,team18,team19,team20]
var teamsForF=[team21,team22,team23,team24]
var teamsForG=[team25,team26,team27,team28]
var teamsForH=[team29,team30,team31,team32]
/* same for B,C,..*/
 var A={name:'A',teams:teamsForA} ; 
 var B={name:'B',teams:teamsForB} ;
 var C={name:'B',teams:teamsForC} ;
 var D={name:'B',teams:teamsForD} ;
 var E={name:'B',teams:teamsForE} ;
 var F={name:'B',teams:teamsForF} ;
 var G={name:'B',teams:teamsForG} ;
 var H={name:'B',teams:teamsForH} ;
/* ... pash the rest to 'groups array' */
 var groups=[A,B,C,D,E,F,G,H] 

 // dynamic group  content: Don't add here 

var rows=document.getElementsByClassName('classement')
var groupTitle=document.getElementById('group-title')
   
var indexRow=0;
    
    for(var j=0 ; j<8;j++){    
        for( var k=0 ; k<4;k++){
        
        
            rows[indexRow].children[0].children[0].src=groups[j].teams[k].flag
            rows[indexRow].children[0].children[0].width='35'
            rows[indexRow].children[1].children[0].textContent=groups[j].teams[k].name
        
            rows[indexRow].children[2].textContent=groups[j].teams[k].pts
            rows[indexRow].children[3].textContent=groups[j].teams[k].MJ
            rows[indexRow].children[4].textContent=groups[j].teams[k].G
            rows[indexRow].children[5].textContent=groups[j].teams[k].N
            rows[indexRow].children[6].textContent=groups[j].teams[k].P
            indexRow++;
        }
        
    }

 
 