import {Revista} from '../src/revista';
import {Observer} from '../src/index';
import {Observable} from '../src/index';

enum NuevaRevistaEventType {'NO_EVENT', 'NEW'};
/**
 * Clase suscriptor se implementan el método update
 */
export class Suscriptor implements Observer {
    constructor(private id: number, private name: string) {
    }
    //Getters
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    /**
     * Actualiza información
     * @param observable Observable de EventType
     */
    update(observable: Observable): string | undefined {
      if (observable instanceof Revista) {
        switch(observable.getEventType()) {
          case NuevaRevistaEventType.NEW:
            return `I am a RevistaObserver called ${this.name} ` +
                        `and I have observed that Revista ${observable.getName()} ` +
                        `new Revista arrived`;
            break;
        }
      }
      return undefined
    }
  }

  const myRevista = new Revista(0, 'myRevista');
  const firstRevistaObserver = new Suscriptor(0, 'firstRevistaObserver');
  const secondRevistaObserver = new Suscriptor(1, 'secondRevistaObserver');
  
  console.log('firstRevistaObserver subscription');
  myRevista.subscribe(firstRevistaObserver);
  
  console.log('secondRevistaObserver subscription');
  myRevista.subscribe(secondRevistaObserver);
  
  try {
    myRevista.subscribe(secondRevistaObserver);
  } catch (error) {
    console.log('secondRevistaObserver was already subscribed');
  }
  
  console.log('myRevista new');
  myRevista.newRevista();
  
  console.log('firstRevistaObserver unsubscription');
  myRevista.unsubscribe(firstRevistaObserver);
