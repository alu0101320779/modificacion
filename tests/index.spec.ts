import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/revista';
import {Suscriptor} from '../src/suscriptor';


let sub = new Revista(0, 'Forbes');
let sub1 = new Revista(1, 'Otro');
const firstRevistaObserver = new Suscriptor(0, 'firstRevistaObserver');
const secondRevistaObserver = new Suscriptor(1, 'secondRevistaObserver');

describe('getters Revista function tests', () =>{
    it('getId returns value 0', () =>{
        expect(sub.getId()).to.be.equal(0);
    });

    it('getName returns value Forbes', () =>{
        expect(sub.getName()).to.be.equal('Forbes');
    });

    it('getEventType returns value NEW', () =>{
        expect(sub.getEventType()).to.be.equal(0);
    });

    it('getId returns value 1', () =>{
        expect(sub1.getId()).to.be.equal(1);
    });

    it('getName returns value Otro', () =>{
        expect(sub1.getName()).to.be.equal('Otro');
    });

    it('getEventType returns value NEW', () =>{
        expect(sub1.getEventType()).to.be.equal(0);
    });
});

describe('subscribe unsubscribe function tests', () =>{
    it('subscribe returns The observer had already been subscribed', () =>{
        expect(sub.subscribe(firstRevistaObserver)).to.be.equal(undefined);
    });

    it('getId returns The observer has not been subscribed', () =>{
        expect(firstRevistaObserver.getId()).to.be.equal(0);
    });

    it('getName returns The observer has not been subscribed', () =>{
        expect(firstRevistaObserver.getName()).to.be.equal('firstRevistaObserver');
    });

    it('getId returns The observer has not been subscribed', () =>{
        expect(secondRevistaObserver.getId()).to.be.equal(1);
    });

    it('getName returns The observer has not been subscribed', () =>{
        expect(secondRevistaObserver.getName()).to.be.equal('secondRevistaObserver');
    });
});

describe('Revista function tests', () =>{
    it('update returns string', () =>{
        expect(firstRevistaObserver.update(sub)).to.be.equal(undefined);
    });

    it('update returns string', () =>{
        expect(secondRevistaObserver.update(sub)).to.be.equal(undefined);
    });
});