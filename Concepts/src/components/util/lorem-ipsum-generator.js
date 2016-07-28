export default function loremIpsum  (){
    let loremArray = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Donec", "a", "erat", "augue.", "Suspendisse", "rutrum", "felis", "risus,", "at", "dictum", "mauris", "pulvinar", "ac.", "Ut", "bibendum,", "lorem", "vitae", "vehicula", "tempus,", "quam", "ante", "mattis", "erat,", "ac", "tristique", "sapien", "quam", "quis", "nisi.", "Donec", "et", "nisl", "bibendum,", "condimentum", "velit", "a,", "aliquam", "dolor.", "Pellentesque", "venenatis", "bibendum", "ex", "at", "dictum.", "Donec", "eros", "turpis,", "commodo", "et", "imperdiet", "et,", "malesuada", "nec", "magna.", "Sed", "ornare", "aliquet", "tellus,", "sed", "elementum", "nulla", "congue", "eget.", "In", "hendrerit", "gravida", "ligula", "quis", "malesuada.", "Integer", "tempus", "mattis", "suscipit.", "Nullam", "ornare", "lorem", "et", "mauris", "porttitor", "lobortis.", "Donec", "sem", "enim,", "efficitur", "eget", "tortor", "quis,", "auctor", "iaculis", "sapien.", "Pellentesque", "habitant."];
    let copy = loremArray.slice(0)


    return {
        restric:'EA',
        //scope:{},
        replace:true,

        link:function(scope ,elm ,attr){
            //attrs available | amount , type , multiplyer
            attr.amount = attr.amount || 5
            attr.multiplyer = attr.multiplyer || 1;
            attr.type =attr.type || 'p';
            elm[0].style.color = attr.color || 'white'


            var restrictedTags = ['body' ,'head','script','iframe','html']
            var tag = document.createElement(attr.type);
            if(~restrictedTags.indexOf(attr.type)){

                console.error('cant create element you silly goose')
                throw new Error('cant create element')
            }
            var blob =[];
            let generate = function(){

                for(var i = 0; i<attr.amount*attr.multiplyer; i++){
                    var getRandomIndex = Math.floor(Math.random()* copy.length);
                    blob.push(copy[getRandomIndex]);
                }
                 JSON.stringify(blob);

                return blob.toString().replace(/,/g ,' ');
            }
            tag.innerHTML = generate() ;
            elm[0].appendChild(tag);
        }
    }
}
