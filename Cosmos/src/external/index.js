import windowNamespace from './app setup/namespace';
import reloadCounter from './app setup/reload';
import Store from './app setup/eventStore';

windowNamespace();
reloadCounter();
cosmos.store = new Store();
