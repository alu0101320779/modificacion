import {Observable} from '../src/index';
import {Observer} from '../src/index';

enum NuevaRevistaEventType {'NO_EVENT', 'NEW'};
/**
 * Clase revista implementa los métodos subscribe y unsubscribe
 */
export class Revista implements Observable {
    private observers: Observer[] = [];
  
    private eventType: NuevaRevistaEventType = NuevaRevistaEventType.NO_EVENT;
  
    constructor(private id: number, private name: string) {
    }
    //Getters
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getEventType() {
      return this.eventType;
    }
    /**
     * Método que devuelve si está suscrito
     * @param observer Observer que comprueba la suscripción del usuario
     */
    subscribe(observer: Observer) {
      if (this.observers.includes(observer)) {
        throw new Error('The observer had already been subscribed');
      } else {
        this.observers.push(observer);
      }
    }
    /**
     * Método que desuscribe
     * @param observer Observer que comprueba la suscripción del usuario
     */
    unsubscribe(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index === -1) {
        throw new Error('The observer has not been subscribed');
      } else {
        this.observers.splice(index, 1);
      }
    }
    /**
     * Método que notifica al usuario
     */
    notify() {
      this.observers.forEach((observer) => observer.update(this));
    }
    /**
     * Método que crea una nueva revista
     */
    newRevista() {
      this.eventType = NuevaRevistaEventType.NEW;
      this.notify();
    }
    
  }