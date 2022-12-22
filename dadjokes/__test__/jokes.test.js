const file = require('fs');
const path = require('node:path');
import { RestJoke } from '../RestJoke';
import { writeJoke } from '../writeJoke';

jest.mock('../RestJoke');

import {screen} from '@testing-library/dom';
import '@testing-library/jest-dom';

const html = file.readFileSync(path.resolve(__dirname,'../index.html'));

const dummyJoke = 
    {
    id: "R7UfaahVfFd",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    status: 200
  };

describe('Joke API',()=>{
    beforeEach(()=>{
        document.body.innerHTML = html.toString();
        const btnJoke = screen.getByRole('button',{name:/get another joke/i});

        RestJoke.prototype.getRandom.mockResolvedValueOnce(dummyJoke);
        btnJoke.addEventListener('click',writeJoke);
    });

    afterEach(()=>{
        jest.clearAllMocks();
    })

    it('should exists a dom node',()=>{
        expect(document).not.toBeUndefined();
    });

    it('should return a joke', (done)=>{        
        const btnJoke = screen.getByRole('button',{name:/get another joke/i});        
        const paragraph = document.getElementById('paragraph');
        btnJoke.click();
        expect(RestJoke.prototype.getRandom).toHaveBeenCalledTimes(1);
        expect(paragraph).not.toBeUndefined();               
        setTimeout(()=>{
            expect(paragraph.textContent).toMatch(dummyJoke.joke);
            done();
        },1000);
    });
})