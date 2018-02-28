//fonction gestion des imports
//fonction redirection pour css, js
const importAssetsFile=(arg,type_arg)=>{return '../assets/'+type_arg+'/'+arg+'.'+type_arg;}

//fonction gestion des imports
const importAssets=(arg)=>{
    var result='';
    for(var idarg=0;idarg<arg.length;idarg++){
        var temp_split=arg[idarg].split('.');
        result[idarg]=importAssetsFile(temp_split[0],temp_split[1]);
    }
    document.write('<link href="../assets/css/global.css" type="text/css">'); ;
}

export default importAssets;