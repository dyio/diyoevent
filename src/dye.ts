import NameSpace from './lib/namespace';

const DefaultKey = 'default';
const NameSpaceCache = {
  default:new NameSpace({name:DefaultKey})
};

export default function create(key:string|undefined){
  const keyReal = key || DefaultKey;
  if(NameSpaceCache[keyReal]){
    return NameSpaceCache[keyReal];
  }
  const namespaceIns = new NameSpace({name:keyReal});
  NameSpaceCache[keyReal] = namespaceIns;
  return namespaceIns;
}

