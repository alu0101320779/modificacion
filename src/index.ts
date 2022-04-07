/**
 * Interfaz de observable
 */
 export interface Observable {
    /**
     * Se implementará un método para comprobar la suscripción
     * @param observer Observador
     */
    subscribe(observer: Observer): void;
    /**
     * Se implementará un método para comprobar la suscripción
     * @param observer Observador 
     */
    unsubscribe(observer: Observer): void;
    /**
     * Método para notificar al usuario
     */
    notify(): void;
  }
  
  /**
   * Interfaz de observable
   */
  export interface Observer {
    update(observable: Observable): string | undefined;
  }