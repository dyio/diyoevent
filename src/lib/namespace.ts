
import EventCenter from './event';

export default class NameSpace {
  private name:string = '';
  private event:EventCenter = new EventCenter();;
  constructor(props){
    const { name } = props;
    this.name = name;
  }
 

  listen(key:string,handler:Function){
    this.event.listen(key,handler);
  }

  trigger(key:string){
    this.event.trigger(key);
  }

  remove(key:string,handler:Function){
    this.event.remove(key,handler);
  }

  once(key:string,handler:Function){
    this.event.once(key,handler);
  }

}