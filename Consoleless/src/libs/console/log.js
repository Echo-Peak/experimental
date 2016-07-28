import parser from '../utils/parser';
export default function(...args){
    let context = Consoleless || Consoleless.context;

    let log = document.createElement('li');
    log.setAttribute('class','Consoleless-display-log')

    let clean = [];
    args.forEach((arg,i,arrayLength)=>{
        let newSpan = document.createElement('span');

      clean.push(parser(arg,newSpan))
    });
    log.innerHTML = clean;
    clearInterval(context.destroy)
    context.render(log);

}
