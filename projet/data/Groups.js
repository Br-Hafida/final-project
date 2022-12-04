

/*   all 32 qualified teams  */
var team1={flag:'./flags/Netherlands.png',name:'Netherlands'}
var team2={flag:'./flags/Qatar.png',name:'Qatar'}
var team3={flag:'./flags/senegal.png',name:'Senegal'}
var team4={flag:'./flags/Équateur.png',name:'Équateur'}


var team5={flag:'./flags/Angleterre.png',name:'Angleterre'}
var team6={flag:'./flags/Iran.png',name:' Iran'}
var team7={flag:'./flags/États-Unis.png',name:'États-Unis'}
var team8={flag:'./flags/Pays de Galles.png',name:'Pays de Galles'}


var team9={flag:'./flags/Argentine.png',name:'Argentine'}
var team10={flag:'./flags/Arabie saoudite.png',name:'Arabie saoudite'}
var team11={flag:'./flags/Mexique.png',name:'Mexique'}
var team12={flag:'./flags/Pologne.png',name:'Pologne'}



var team13={flag:'./flags/France.png',name:'France'}
var team14={flag:'./flags/Australie.png',name:'Australie '}
var team15={flag:'./flags/Danemark.png',name:'Danemark'}
var team16={flag:'./flags/Tunisie.png',name:'Tunisie '}





var team17={flag:'./flags/Espange.png',name:'Espagne'}
var team18={flag:'./flags/Costa Rica.png',name:'Costa Rica'}
var team19={flag:'./flags/Allemagne.png',name:'Allemagne'}
var team20={flag:'./flags/Japon.png',name:'Japon'}




var team21={flag:'./flags/Maroc.png',name:'Maroc'}
var team22={flag:'./flags/Croatie.png',name:'Croatie'}
var team23={flag:'./flags/Canada.png',name:'Canada'}
var team24={flag:'./flags/Belgique.png',name:'Belgique'}


var team25={flag:'./flags/Brésil.png',name:' Brésil'}
var team26={flag:'./flags/Serbie.png',name:'Serbie'}
var team27={flag:'./flags/Suisse.png',name:'Suisse'}
var team28={flag:'./flags/Cameroun.png',name:'Cameroun'}



var team29={flag:'./flags/Portugal.png',name:'Portugal'}
var team30={flag:'./flags/Ghana.png',name:'Ghana'}
var team31={flag:'./flags/Urugueuy.png',name:'Uruguay'}
var team32={flag:'./flags/Coree du Sud.png',name:'Corée du Sud'}

/*
path: represente the path for a given nation flag
complete the rest here 

*/

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

var index=document.URL.indexOf('?')+4 ;
var groupId=document.URL.charAt(index)
var rows=document.getElementsByClassName('teams-rank-groupes')
var groupTitle=document.getElementById('group-title')
    groupTitle.children[1].textContent=groups[groupId].name
    for(var i=0 ; i<rows.length ;i++){

    rows[i].children[0].children[0].src=groups[groupId].teams[i].flag
    rows[i].children[0].children[0].width='70'
    rows[i].children[1].children[0].textContent=groups[groupId].teams[i].name
    
}
 


