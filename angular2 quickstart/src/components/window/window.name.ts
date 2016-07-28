function windowName(){


  let actions = {
    _name:null
  }
  Object.defineProperty(actions ,'name',{
    get(){
      return window[actions._name];
    },
    set(_name){
      actions._name = _name;
  let x = new Function(
    `return new function ${_name}(){}` //debugging purposes only
  );

      window[_name] = new x();
    }
  });

  return actions
}

export let windowName = windowName()
