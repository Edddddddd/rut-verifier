import * as rut from '../src/index';
import { expect } from 'chai';

describe('verify', () => {
  it('invalid string returns error', done => {
    rut
      .verify('sdfwer')
      .then(data => {
        done(data);
      })
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('invalid character at beginning returns error', done => {
    rut
      .verify('a93847362')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('invalid character at ending returns error', done => {
    rut
      .verify('93847362a')

      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('invalid character at any position returns error', done => {
    rut
      .verify('9384a7362')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('10 characters RUT number is valid', done => {
    rut
      .verify('147837488')
      .then(data => {
        expect(data).to.be.true;
        done();
      })
      .catch(e => done(e));
  });

  it('10 characters RUT number is invalid', done => {
    rut
      .verify('147837483')
      .then(data => {
        expect(data).to.be.false;
        done();
      })
      .catch(e => done(e));
  });

  it('10 characters RUT number with letter k is valid', done => {
    rut
      .verify('14853568k')
      .then(data => {
        expect(data).to.be.true;
        done();
      })
      .catch(e => done(e));
  });

  it('10 characters RUT number with letter k is invalid', done => {
    rut
      .verify('14853567k')
      .then(data => {
        expect(data).to.be.false;
        done();
      })
      .catch(e => done(e));
  });

  it('9 characters RUT number is valid', done => {
    rut
      .verify('98465340')
      .then(data => {
        expect(data).to.be.true;
        done();
      })
      .catch(e => done(e));
  });

  it('9 characters RUT number is invalid', done => {
    rut
      .verify('98465341')
      .then(data => {
        expect(data).to.be.false;
        done();
      })
      .catch(e => done(e));
  });

  it('9 characters RUT with letter k number is valid', done => {
    rut
      .verify('4853578k')
      .then(data => {
        expect(data).to.be.true;
        done();
      })
      .catch(e => done(e));
  });

  it('9 characters RUT number with letter k is invalid', done => {
    rut
      .verify('4853579k')
      .then(data => {
        expect(data).to.be.false;
        done();
      })
      .catch(e => done(e));
  });
});

describe('split', () => {
  it('invalid string returns error', done => {
    rut
      .split('sdfwer')
      .then(data => {
        done(data);
      })
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('invalid character at beginning returns error', done => {
    rut
      .split('a93847362')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('invalid character at ending returns error', done => {
    rut
      .split('93847362a')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('invalid character at any position returns error', done => {
    rut
      .split('9384a7362')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Input contains invalid characters');
        done();
      })
      .catch(e => done(e));
  });

  it('return 10 characters RUT number splitted', done => {
    rut
      .split('147837488')
      .then(data => {
        expect(data).to.eql(['14783748', '8']);
        done();
      })
      .catch(e => done(e));
  });

  it('invalid 10 characters RUT number returns error', done => {
    rut
      .split('147837483')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Invalid RUT');
        done();
      });
  });

  it('return 10 characters RUT number with letter k splitted', done => {
    rut
      .split('14853568k')
      .then(data => {
        expect(data).to.eql(['14853568', 'k']);
        done();
      })
      .catch(e => done(e));
  });

  it('invalid 10 characters RUT number with letter k returns error', done => {
    rut
      .split('14853567k')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Invalid RUT');
        done();
      });
  });

  it('return 9 characters RUT number splitted', done => {
    rut
      .split('98465340')
      .then(data => {
        expect(data).to.eql(['9846534', '0']);
        done();
      })
      .catch(e => done(e));
  });

  it('invalid 9 characters RUT number returns error', done => {
    rut
      .split('98465341')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Invalid RUT');
        done();
      });
  });

  it('return 9 characters RUT with letter k splitted', done => {
    rut
      .split('4853578k')
      .then(data => {
        expect(data).to.eql(['4853578', 'k']);
        done();
      })
      .catch(e => done(e));
  });

  it('invalid 9 characters RUT number with letter k return error', done => {
    rut
      .split('4853579k')
      .then(data => done(data))
      .catch(e => {
        expect(e.message).to.equal('Invalid RUT');
        done();
      });
  });
});
